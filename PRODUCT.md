# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

- Astro generates bilingual routes, case studies and no-JavaScript HTML. The one-page English CV is a separate LaTeX repository (TakalaWang/CV) published at https://takalawang.github.io/CV/.
- Astro renders all content to HTML; React islands with Motion and SmoothUI components add scroll-driven effects, and Tailwind v4 carries the mist-blue theme.
- Manrope Variable and Noto Sans TC Variable are self-hosted through the installed font packages.
- The old Remotion, SmoothUI, pixel-office, book and guild frontends are retired, not alternative runtime modes or compatibility targets.

## Users

- Recruiters and hiring managers need to identify the person, understand the work and reach a contact or printable résumé quickly.
- Engineering managers, interviewers and potential collaborators need attributable evidence: what a system does, what the candidate contributed, how it works and what remains unverified.
- Readers use Traditional Chinese or English, desktop or mobile, with or without animation, JavaScript or working WebGL.

## Product Purpose

Make real engineering work understandable and inspectable. Every project states its problem, the decisions made and their results, so a reader can judge ownership and depth within one click.

## Positioning

The candidate's identity and demonstrated work lead. Technology names, architecture diagrams, screenshots and outcomes support an understanding of ownership; none substitutes for evidence. Current titles, dates, achievements and project descriptions belong in the canonical résumé rather than being duplicated as product policy here.

## Operating Context

- The identity is content first: a full-width scroll narrative with sticky project chapters (see `DESIGN.md`). Light and dark follow the system setting.
- `/` and `/en/` are the home pages; `/work/` and `/en/work/` collect major projects, side projects and work experience. `/case/<id>/` and `/en/case/<id>/` address individual entries. The "Résumé" navigation item and hero button link to the one-page CV PDF.
- URL navigation, browser Back/Forward and language switching retain the destination. The CV PDF is built by the CV repository, not by this site.
- Pages are indexable and carry canonical and Open Graph tags for https://takalawang.github.io/resume/ (GitHub Pages project site next to the blog). A local build or successful check is not evidence of public deployment or live service availability.

## Capabilities and Constraints

- `RESUME.md` is the canonical content source. `src/content/resume-en.md` is its English translation, checked against the master's SHA-256 stamp, entry identity, structure and evidence. Internal source notes are provenance, not parallel editable product truth.
- Include every current public entry from the canonical source. Never hardcode a portfolio total such as 13 projects, or truncate content to fit a layout.
- Stable entry markers and source locations tie routes, reader blocks and diagrams to their owners. Presentation can promote a title, summary or link into a heading without deleting it from the source or duplicating it in the reader.
- Real project imagery is served from `public/projects/`. Preserve captions and the distinction between actual product captures, local application captures and fixture data. Missing imagery must not prevent reading.
- Do not infer a public link, screenshot, benchmark, employment detail or individual contribution from a visual prop. The public-scope section of the canonical source controls what may be shown.

## Brand Commitments

- The name and real work are primary; a slogan, decorative statistic or fantasy label must not obscure them.
- The site is an immersive scroll narrative in mist blue: content surfaces as you scroll, but motion never hides or delays it, and there is no themed scenery. It is not a 3D world, slide deck, pixel office or book simulation.
- Immersion must help orientation and understanding. Plain HTML text, working links and recognizable controls remain the reading interface.
- Bilingual coverage and a direct link to the CV are commitments, not optional theme variants.

## Evidence and Public Boundaries

- Preserve the canonical source's qualifications and verification dates. A screenshot is not proof of current availability, and a local or fixture demonstration is not a production result.
- Keep phone numbers, credentials, internal repositories, client data, host inventories and private architecture configuration out of public content.
- Do not reinstate retired projects, known-invalid demonstration URLs or unverified metrics. Do not run credit-consuming analysis merely to create portfolio evidence.
- Keep uncertain attribution, titles and dates explicitly unresolved until the source is updated with evidence. Translation may clarify language but may not increase the strength of a claim.
- Asset provenance and licences remain separate evidence records. This document does not certify all shipping assets or extend a bounded visual verdict into whole-site acceptance.

## Product Principles

1. Show the system and its contribution before listing tools.
2. Keep the complete public record reachable in one click from every page.
3. Derive inventories from the current source, not a curated count frozen in UI copy.
4. Separate facts, local demonstrations, private boundaries and unknowns.
5. Use movement to preserve orientation; never bind camera travel to reading scroll.

## Accessibility & Inclusion

- Keyboard-operable HTML controls, visible focus, semantic content, named destinations and a direct résumé link are required alongside the Canvas.
- Respect reduced motion and the pause control. Neither may remove content or prevent navigation.
- Preserve readable no-JavaScript output, a WebGL-failure HTML reader and a print layout. These are access paths within the current architecture, not retired-design compatibility layers.
- WCAG 2.2 AA remains an accessibility target, not a certified result. Code inspection and content tests do not establish contrast, assistive-technology acceptance or whole-site approval.

## Documentation Status

On 2026-09-30 the user retired the floating-island identity after an interview-driven content rewrite and chose a content-first site. On 2026-10-01 it became a full-width, immersive scroll narrative in mist blue, after a brief bouncy SmoothUI version was judged too playful. Earlier design records under `docs/internal/archive/` and `.impeccable/` are historical, not current authority.
