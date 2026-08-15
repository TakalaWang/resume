import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

const runtime = /** @type {{ process?: { env?: { SITE_BASE?: string } } }} */ (globalThis);
const siteBase = runtime.process?.env?.SITE_BASE;

export default defineConfig({
  integrations: [react()],
  base: siteBase ?? undefined,
  output: 'static',
  outDir: './dist',
  vite: { plugins: [tailwindcss()] },
});
