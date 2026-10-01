import assert from 'node:assert/strict';
import { readdir } from 'node:fs/promises';
import path from 'node:path';

const origin = process.env.PORTFOLIO_TEST_URL ?? 'http://127.0.0.1:4174';
const root = path.resolve('dist');
async function files(directory) {
  return (await Promise.all((await readdir(directory, { withFileTypes: true })).map(item => item.isDirectory()
    ? files(path.join(directory, item.name)) : [path.join(directory, item.name)]))).flat();
}
const queue = (await files(root)).filter(file => !file.endsWith('.map'));
const total = queue.length;
await Promise.all(Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const filename = queue.pop();
    if (!filename) break;
    const route = '/' + path.relative(root, filename).replace(/index\.html$/, '');
    const response = await fetch(origin + route, { signal: AbortSignal.timeout(10000) });
    assert.equal(response.status, 200, `${route}: HTTP ${response.status}`);
    await response.arrayBuffer();
  }
}));
console.log(`HTTP verified: ${total} built local pages/assets returned 200. External availability and browser behavior are separate checks.`);
