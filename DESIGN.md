---
name: "Chung-Chun Wang Portfolio"
description: "Immersive full-width scroll narrative in mist blue: content surfaces as you scroll."
colors: "SmoothUI theme-blue (src/styles/global.css) for every neutral; the only override is a mist-blue accent in src/styles/site.css: oklch(0.56 0.1 245) light / oklch(0.78 0.09 240) dark. No gradients, no tinted shadows."
typography:
  family: "'Manrope Variable','Noto Sans TC Variable',system-ui,sans-serif"
motion: "Trigger-once reveal: slide up 24px + fade, 600ms cubic-bezier(.22,1,.36,1), 80ms stagger (--i), via IntersectionObserver in Base.astro. Hover: 2px lift + shadow (.lift)."
---

# Design

## Principles

- **Words first.** Every project states its problem, the decisions made, and their results. No mascot, no themed scene.
- **Motion like the references.** The pattern comes from measuring Linear, Stripe, and AOS-based portfolios (2026-10-01). When an element enters the viewport, it slides up 24px and fades in once, with cards in a group staggered by 80 ms. Nothing is tied to scroll position; nothing floats, blurs, bounces, or tilts. Hover only lifts a card by 2px and adds a shadow.
- **Borrowed from nycu.life (the owner's team site).**
  - One screen per section, with gentle `proximity` snapping and each project chapter as its own snap point.
  - A section-dot rail on the left (wide screens) and a `n / 8` counter at the bottom right.
  - A section opening: the title appears centered, moves to its place, and only then does the section's content slide in (`.stage`, `.stage-title`, `.stage-hide`).
- **SmoothUI first.** Use SmoothUI's own theme, components, and neutral styling. Do not add gradients, background glows, or accent-tinted shadows; the accent color is the only customization.
- **Full, not empty.** Every section is full width with its own rhythm: a hero with a screenshot collage, a timeline, sticky project chapters, a bento grid, and card grids. Alternate sections sit on a muted band.
- **Motion never blocks reading.** Content is server-rendered. Reveals only apply when JavaScript runs (`html.js`) and motion is allowed, so otherwise everything is simply visible.

## Home, top to bottom

1. **Hero:** full viewport height.
   - Left: a kicker, the name, the role, the résumé button, and contact links.
   - Right: three project screenshots stacked at angles, with a portrait above the name.
   - Everything slides in with a stagger on load.
2. **About:** a one-sentence summary on the left (it opens centered, then moves left), with education cards sliding in on the right.
3. **Experience:** a pinned section title on the left; on the right, a timeline whose entries show two story headlines each.
4. **Projects:** one chapter per project, alternating sides.
   - The screenshot stays pinned on its side. Projects without a real screenshot go full width, with their three story cards side by side; no placeholder visuals.
   - Next to it are numbered story cards (title plus result), the tech line, and "Read the case study".
5. **Side projects:** a bento grid; entries with screenshots take a wide tile.
6. **Research:** paper cards beside a list of awards.
7. **Community:** a card grid.
8. **Closing:** a large call to action with the email address.

## Other pages

- **Case page:**
  - A large title, the lead screenshot, then the prose.
  - Each block slides in as it is reached, with sticky tech tags on the right.
- **`/work/`:** technology filter chips; results fade in and out.
- **Résumé:** links out to the one-page LaTeX CV at https://takalawang.github.io/CV/.
- **Every page:** SmoothUI's floating pill navbar (hides while scrolling down), a reading-progress bar, and the light/dark toggle.

## Retired

The 3D floating islands, pixel office, book, guild, and console themes are retired, and so are the bouncy SmoothUI effects (magnetic buttons, tilt cards, wobbling tags), scroll-scrubbed effects (word-by-word lighting, image wipes, the receding hero), and the stats row. Do not reintroduce them.
