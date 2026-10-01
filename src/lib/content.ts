import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { createMarkdownProcessor } from "@astrojs/markdown-remark";

export type Locale = "zh" | "en";
export type Entry = {
  id: string;
  groupId: string;
  title: string;
  subtitle: string;
  summary: string;
  blocks: Array<{ html: string; text: string; startLine: number; endLine: number }>;
  images: Array<{ src: string; alt: string; provenance: "production" | "fixture" | "local" }>;
  links: Array<{ href: string; label: string }>;
};
export type PortfolioContent = {
  name: string;
  englishName: string;
  role: string;
  summary: string;
  sourceDate: string;
  groups: Array<{ id: string; title: string; entries: Entry[] }>;
  fullHtml: string;
};

type Node = {
  type: string;
  depth?: number;
  value?: string;
  url?: string;
  alt?: string | null;
  children?: Node[];
  position?: { start: { offset?: number; line: number }; end: { offset?: number; line: number } };
};
const sections = [
  ["profile", "個人資訊", "Profile"],
  ["education", "教育背景", "Education"],
  ["work", "工作經歷", "Work experience"],
  ["projects", "大型專案", "Major projects"],
  ["side", "Side Projects", "Side projects"],
  ["community", "社團與課外經驗", "Community"],
  ["research", "Research & Recognition", "Research & recognition"],
  ["skills", "技術能力", "Skills"],
] as const;

// Screenshot origin, not a claim of live availability or a production benchmark.
// Keep the detailed qualifications in the public Markdown alongside each image.
const imageOrigins: Record<string, Entry["images"][number]["provenance"]> = {
  "cool-english": "production", nojv: "production", hinagiku: "production", onstage: "production",
  routa: "fixture", "1111": "fixture", "repo-lens": "local",
  urtube: "production", "weave-in": "production", "cs-camp": "production", lookline: "local", "codex-chronicle": "local", twlinter: "local", "behavioral-kit": "local", "nycu-life": "production",
};
const plainText = (node: Node): string => node.value ?? node.alt ?? (node.children ?? []).map(plainText).join("");
const walk = (node: Node, visit: (node: Node) => void) => {
  visit(node);
  node.children?.forEach(child => walk(child, visit));
};
// The site may be served under a sub-path (GitHub Pages project site: /resume). Astro exposes it
// as BASE_URL; plain Node scripts (scripts/check-build.mjs) have no import.meta.env and get "".
const BASE = ((import.meta as { env?: { BASE_URL?: string } }).env?.BASE_URL ?? "/").replace(/\/$/, "");
const publicPath = (url: string) => url.replace(/^public\/projects\//, `${BASE}/projects/`);
const isImage = (url: string) => /\.(?:png|jpe?g|webp|gif|avif|svg)$/i.test(url);

/** Pure parsing entry point for source/translation integrity and mutation tests. */
export async function parseContent(source: string, locale: Locale, master = source): Promise<PortfolioContent> {
  if (locale !== "zh" && locale !== "en") throw new Error(`Unknown locale: ${locale}`);
  const sourceDate = master.match(/^更新日期：(\d{4}-\d{2}-\d{2})。/m)?.[1];
  if (!sourceDate) throw new Error("RESUME.md has no source update date");
  const stamp = source.match(/^<!-- source-sha256: ([a-f0-9]{64})\n[\s\S]*?-->/)?.[0];
  if (locale === "en") {
    const hash = createHash("sha256").update(master).digest("hex");
    if (!stamp?.startsWith(`<!-- source-sha256: ${hash}\n`)) {
      throw new Error("resume-en.md is missing or stale: translate the current RESUME.md before updating source-sha256");
    }
    if (!source.includes(`Updated: ${sourceDate}.`)) throw new Error("English source date mismatch");
  }

  let root: Node | undefined;
  const parser = await createMarkdownProcessor({
    smartypants: false, syntaxHighlight: false,
    remarkPlugins: [() => (tree: Node) => { root = tree; }],
  });
  await parser.render(source);
  if (!root?.children) throw new Error("Missing Markdown document");
  const renderer = await createMarkdownProcessor({
    smartypants: false, syntaxHighlight: false,
    remarkPlugins: [() => (tree: Node) => walk(tree, node => {
      if (node.url) node.url = publicPath(node.url);
    })],
  });
  const slice = (node: Node) => {
    if (node.position?.start.offset === undefined || node.position.end.offset === undefined) throw new Error("Missing Markdown source position");
    return source.slice(node.position.start.offset, node.position.end.offset);
  };
  const groups: PortfolioContent["groups"] = sections.map(([id, zh, en]) => ({ id, title: locale === "en" ? en : zh, entries: [] }));
  const seenGroups = new Set<string>();
  const ids = new Set<string>();
  let group = groups[0];
  let entry: Entry | undefined;
  let entryId: string | undefined;
  let maintenance = false;
  let maintenanceCount = 0;
  let maintenanceBlocks = 0;
  let pending: Node[] = [];
  const publicNodes: Node[] = [];

  const addBlock = async (node: Node, target: Entry) => {
    if (node.type === "list") {
      for (const item of node.children ?? []) await addBlock(item, target);
      return;
    }
    if (!node.position) throw new Error("Missing block source position");
    const text = plainText(node);
    target.blocks.push({ html: (await renderer.render(slice(node))).code, text,
      startLine: node.position.start.line, endLine: node.position.end.line });
    walk(node, child => {
      if (!child.url) return;
      const href = publicPath(child.url);
      const label = plainText(child);
      if (child.type === "image" || isImage(href)) {
        const provenance = imageOrigins[href.slice(BASE.length).split("/")[2]];
        if (!href.startsWith(`${BASE}/projects/`) || !provenance) throw new Error(`Unclassified image provenance: ${href}`);
        if (!target.images.some(image => image.src === href && image.alt === label)) target.images.push({ src: href, alt: label, provenance });
      }
      if (child.type === "link" && !target.links.some(link => link.href === href && link.label === label)) target.links.push({ href, label });
    });
    if (node.type === "paragraph" && /^(?:(期間|類型)：|(Period|Type): )/.test(text)) {
      if (!target.subtitle) target.subtitle = text;
    } else if (!target.summary && ["paragraph", "listItem"].includes(node.type) && !node.children?.some(child => child.type === "link")) {
      target.summary = text;
    }
  };

  for (const node of root.children) {
    const text = plainText(node);
    if (node.type === "html") {
      if (locale === "en" && node.position?.start.offset === 0 && text === stamp) continue;
      if (text === "<!-- nonpublic:maintenance:start -->" && !maintenance && !entryId) {
        maintenance = true; maintenanceCount++; continue;
      }
      if (text === "<!-- nonpublic:maintenance:end -->" && maintenance) { maintenance = false; continue; }
      const marker = text.match(/^<!-- entry:([a-z0-9]+(?:-[a-z0-9]+)*) -->$/);
      if (marker && !maintenance && !entryId) { entryId = marker[1]; continue; }
      throw new Error(`Unclassified or misplaced metadata at line ${node.position?.start.line}`);
    }
    if (maintenance) {
      if (node.type !== "paragraph") throw new Error("Maintenance must contain prose, not entries or sections");
      maintenanceBlocks++; continue;
    }
    walk(node, child => {
      if (child.type === "html" || child.type === "definition" || child.type.endsWith("Reference")) {
        throw new Error("Public blocks require inline Markdown links and no raw HTML or metadata");
      }
      if (!child.url) return;
      const href = publicPath(child.url);
      if (href.startsWith(`${BASE}/projects/`) && !/[\\%]|\.\./.test(href)) return;
      if (!/^(https:\/\/|mailto:)/.test(href)) throw new Error(`Unsafe public URL: ${href}`);
      const url = new URL(href);
      if (url.username || url.password) throw new Error("Credentials in public URL");
    });
    if (node.type === "heading" && node.depth === 2) {
      if (pending.length) throw new Error("Section has no marked entry");
      const next = groups.find(item => item.title === text);
      if (!next || seenGroups.has(next.id)) throw new Error(`Unknown or duplicate group: ${text}`);
      group = next; seenGroups.add(group.id);
      entry = group.id === "profile" ? group.entries[0] : undefined;
    }
    if (node.type === "heading" && node.depth === 3 && group.id === "research") entry = undefined;
    const startsEntry = node.type === "heading" && (
      node.depth === 1 ||
      (node.depth === 3 && !["profile", "research"].includes(group.id)) ||
      (node.depth === 4 && group.id === "research")
    );
    if (startsEntry) {
      if (!entryId) throw new Error(`Missing entry marker: ${text}`);
      if (ids.has(entryId)) throw new Error(`Duplicate entry id: ${entryId}`);
      ids.add(entryId);
      entry = { id: entryId, groupId: group.id, title: node.depth === 1 ? text.split("｜")[0] : text,
        subtitle: "", summary: "", blocks: [], images: [], links: [] };
      group.entries.push(entry); entryId = undefined;
    } else if (entryId) throw new Error(`Entry marker must precede an entry heading: ${entryId}`);
    publicNodes.push(node);
    if (!entry) { pending.push(node); continue; }
    for (const heading of pending) await addBlock(heading, entry);
    pending = [];
    await addBlock(node, entry);
  }
  if (maintenance || maintenanceBlocks < maintenanceCount || entryId || pending.length || seenGroups.size !== sections.length || groups.some(item => !item.entries.length)) {
    throw new Error("Unassigned content, incomplete sections, or invalid maintenance classification");
  }
  const profile = groups[0].entries[0];
  const introduction = publicNodes.slice(0, 3);
  if (introduction[0]?.depth !== 1 || introduction[1]?.type !== "paragraph" || introduction[2]?.type !== "paragraph") throw new Error("Missing profile identity");
  const name = profile.title;
  const englishName = plainText(introduction[1]);
  const role = plainText(introduction[2]);
  const summaryIndex = publicNodes.findIndex(node => node.type === "heading" && plainText(node) === (locale === "en" ? "Personal summary" : "個人摘要"));
  if (summaryIndex < 0 || publicNodes[summaryIndex + 1]?.type !== "paragraph") throw new Error("Missing personal summary");
  const summary = plainText(publicNodes[summaryIndex + 1]);
  profile.summary = summary; profile.subtitle = role;
  const fullHtml = `<div lang="${locale === "en" ? "en" : "zh-Hant"}">${(await renderer.render(publicNodes.map(slice).join("\n\n"))).code}</div>`;
  return { name, englishName, role, summary, sourceDate, groups, fullHtml };
}

// Build-time Node loader. Astro moves bundled modules into dist, so resolve from
// the project-root cwd rather than from the compiled module's import.meta.url.
export async function loadContent(locale: Locale): Promise<PortfolioContent> {
  if (locale !== "zh" && locale !== "en") throw new Error(`Unknown locale: ${locale}`);
  const master = await readFile(resolve("RESUME.md"), "utf8");
  const source = locale === "en" ? await readFile(resolve("src/content/resume-en.md"), "utf8") : master;
  return parseContent(source, locale, master);
}
