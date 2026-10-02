# Takala Wang — portfolio

An Astro site with React islands. Motion and the SmoothUI components (`src/components/smoothui/`, installed through the shadcn CLI from https://smoothui.dev/r/<name>.json) provide the navbar, progress bar, theme toggle, and buttons. Tailwind v4 supplies the utilities; colors come from SmoothUI's theme-blue in `src/styles/global.css`, with only the accent overridden to mist blue in `src/styles/site.css`. All content is server-rendered, so it stays readable without JavaScript.

## Run

```sh
pnpm install
pnpm dev
pnpm build     # astro check → astro build → scripts/check-build.mjs
pnpm preview
```

## Content

- `RESUME.md` is the only factual master. Keep the stable `<!-- entry:id -->` markers when reordering or editing; the IDs are the `/case/<id>/` URLs.
- `src/content/resume-en.md` is its English translation. After changing the master, update the translation and the SHA-256 stamp on its first line, which `src/lib/content.ts` checks at build time.
- This repository is public. Keep provenance and private notes out of it, in the git-ignored `docs/internal/`. The parser still drops `<!-- nonpublic:maintenance:start/end -->` blocks from the site, but the source stays visible on GitHub.
- Case pages follow the source headings. Put the "#### 技術 / Technologies" paragraph in an entry to get tags; images linked under "#### 現有產品畫面 / Current product screens" become the gallery.

## Routes

`/` (full-width scroll narrative), `/work/` (all work), `/case/<id>/` (one page per entry), and the same under `/en/`. The Résumé link goes to the one-page LaTeX CV (TakalaWang/CV, https://takalawang.github.io/CV/).

## Files

- `src/layouts/`: `Home`, `Case`, `Work`, `ResumeLayout`, and the shared `Base` shell.
- `src/lib/content.ts` parses the Markdown; `src/lib/view.ts` derives the tags, metadata and case body.
- `src/components/site/`: the site's own islands (work filter, navbar, theme switch, buttons). Scroll reveals are `.reveal` in `site.css`, triggered once by a small IntersectionObserver script in `Base.astro`.
- `src/styles/site.css`: base styles and case-study prose; the theme toggle stores light or dark in `localStorage` (default: follow the system).
