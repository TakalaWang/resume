import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { loadContent } from '../src/lib/content.ts';

const dist = path.resolve('dist');
// Must match astro.config.mjs `base`: pages link to /resume/..., but dist/ holds the files at its root.
const BASE = '/resume';
const exists = async file => { try { return (await stat(file)).isFile(); } catch { return false; } };
async function files(directory) {
  return (await Promise.all((await readdir(directory, { withFileTypes: true })).map(entry => entry.isDirectory() ? files(path.join(directory, entry.name)) : [path.join(directory, entry.name)]))).flat();
}
let cases = 0;
for (const locale of ['zh', 'en']) {
  const data = await loadContent(locale);
  const prefix = locale === 'en' ? 'en/' : '';
  const resume = await readFile(path.join(dist, prefix, 'resume/index.html'), 'utf8');
  const index = await readFile(path.join(dist, prefix, 'work/index.html'), 'utf8');
  const resumeText = resume.replaceAll('&#x26;', '&').replaceAll('&amp;', '&');
  for (const group of data.groups) assert(resumeText.includes(group.title), `${locale}: résumé misses section ${group.title}`);
  for (const group of data.groups) for (const entry of group.entries) {
    const html = await readFile(path.join(dist, prefix, 'case', entry.id, 'index.html'), 'utf8');
    assert(html.includes(`<title>${entry.title.replaceAll("&", "&amp;")} · `), `${locale}/${entry.id}: missing case title`);
    if (['projects', 'side', 'work'].includes(group.id)) assert(index.includes(`${BASE}${prefix ? '/' + prefix.slice(0, -1) : ''}/case/${entry.id}/`), `Missing index entry ${entry.id}`);
    for (const image of entry.images) assert(html.includes(`src="${BASE}${image.src}"`), `Missing SSR gallery ${entry.id} ${image.src}`);
    cases++;
  }
}
const htmlFiles = (await files(dist)).filter(file => file.endsWith('.html'));
const resources = new Set();
for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8');
  assert(!/office-room\.png|OfficePortfolio|@remotion|Silkscreen|\/guild\/|\/models\//.test(html), `Retired frontend leaked into ${file}`);
  assert(!/<!--\s*(?:entry:|non-public:|source-sha256:)/.test(html), `Development metadata in ${file}`);
  for (const [, url] of html.matchAll(/(?:src|href)="(\/[^"#?]*)(?:[^" ]*)"/g)) resources.add(url);
}
for (const url of resources) {
  assert(!url.includes('..'), `Unsafe resource path: ${url}`);
  assert(url.startsWith(`${BASE}/`) || url === BASE, `Link misses the ${BASE} base: ${url}`);
  const file = path.join(dist, decodeURIComponent(url.slice(BASE.length)));
  assert(await exists(file) || await exists(path.join(file, 'index.html')), `Missing built route or asset: ${url}`);
}
for (const retired of ['guild', 'poc', 'pixel', 'book', 'directions']) assert(!await exists(path.join(dist, retired, 'index.html')), `Retired route shipped: ${retired}`);
console.log(`Build verified: ${htmlFiles.length} pages; ${cases} bilingual cases; ${resources.size} internal routes/assets.`);
