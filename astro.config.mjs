import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  // Deployed as a GitHub Pages project site next to the blog (takalawang.github.io).
  site: "https://takalawang.github.io",
  base: "/resume",
  devToolbar: { enabled: false },
  integrations: [react()],
  vite: { plugins: [tailwindcss()] },
});
