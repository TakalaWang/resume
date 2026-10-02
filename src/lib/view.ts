import type { Entry, Locale } from './content';

/** Prefix a root-relative path with the deploy sub-path (astro.config `base`), e.g. /resume. */
export const withBase = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
// One-page LaTeX CV, its own repo and Pages site (TakalaWang/CV).
export const CV_URL = 'https://takalawang.github.io/CV/';
export const base = (locale: Locale) => withBase(locale === 'en' ? '/en' : '');
export const caseHref = (locale: Locale, entry: Entry) => `${base(locale)}/case/${entry.id}/`;

const techHeading = /^<h4[^>]*>(?:技術|Technologies)<\/h4>/;
const screensHeading = /^<h4[^>]*>(?:現有產品畫面|Current product screens)<\/h4>/;
const linkOnlyItem = /^<ul>\s*<li><a [^>]*>[^<]*<\/a><\/li>\s*<\/ul>\s*$/;

/** "期間：2025-12–Present · 兼職" → "2025-12–Present · 兼職" */
export const meta = (entry: Entry) => entry.subtitle.replace(/^(?:期間|類型)：|^(?:Period|Type): /, '');

/** Tag list from the paragraph that follows the entry's "技術 / Technologies" heading. */
export function techOf(entry: Entry): string[] {
  const i = entry.blocks.findIndex(block => techHeading.test(block.html));
  return i < 0 ? [] : (entry.blocks[i + 1]?.text ?? '').split(/、|, /).map(tag => tag.trim()).filter(Boolean);
}

/** Case-page body: source blocks minus what the page header, tags, link row and gallery already show. */
export function bodyBlocks(entry: Entry) {
  const tech = entry.blocks.findIndex(block => techHeading.test(block.html));
  return entry.blocks.filter((block, i) =>
    !/^<h[123]/.test(block.html) && !(block.html.startsWith('<h') && block.text === entry.title) &&
    block.text !== entry.subtitle && block.text !== entry.summary &&
    !linkOnlyItem.test(block.html) &&
    i !== tech && i !== tech + 1 &&
    !screensHeading.test(block.html));
}

const setupHeading = /^(?:背景|技術|現有產品畫面|系統功能與工作範圍|個人貢獻與成果|產品與我的角色|Background|Technologies|Current product screens|System scope|Contributions and outcomes|Products and my role|問題|做法與決策|結果|Problem|Approach and decisions|Result)$/;
const resultLabel = /^(?:結果：|Result: )/;

/** Story headlines for the home page: each "#### story" heading with its "結果 / Result" line.
 *  Entries without stories fall back to their first contribution bullets. */
export function storiesOf(entry: Entry, limit = 3): { title: string; result?: string }[] {
  const stories: { title: string; result?: string }[] = [];
  for (const block of entry.blocks) {
    if (/^<h4/.test(block.html)) {
      if (!setupHeading.test(block.text)) stories.push({ title: block.text });
    } else if (stories.length && resultLabel.test(block.text)) {
      stories.at(-1)!.result = block.text.replace(resultLabel, '');
    }
  }
  if (stories.length) return stories.slice(0, limit);
  const body = bodyBlocks(entry);
  const mine = body.findIndex(b => /^<h4[^>]*>(?:個人貢獻與成果|Contributions and outcomes)</.test(b.html));
  return body.slice(mine + 1).filter(b => b.html.startsWith('<ul>') && !/^(?:黑客松|Hackathon|競賽|Competition)/.test(b.text)).slice(0, limit).map(b => ({ title: b.text }));
}
