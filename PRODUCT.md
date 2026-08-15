# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro with React islands, SmoothUI components, and static output.

## Users

Recruiters, hiring managers, engineering leads, and collaborators reviewing Takala Wang's engineering background and work.

## Product Purpose

This site is a public-facing engineering resume and portfolio. It makes Takala's education, experience, technical range, open-source contributions, research, and shipped products easy to understand and verify.

## Positioning

The site presents engineering work as evidence: each project connects a real artifact or repository to Takala's contribution and the resulting product or system outcome.

## Operating Context

Visitors scan the site quickly on desktop or mobile, then follow project links, repositories, LinkedIn, email, or the full work index for deeper review.

## Capabilities and Constraints

- Static single-page resume with a separate complete-work route.
- Chinese and English versions are required.
- Selected work presents five projects first, with NOJV first; the full index contains all projects.
- Use verified live URLs only; projects without a public URL remain descriptive case studies.
- Website-backed projects may show locally stored screenshots; claims must stay grounded in the supplied resume data. Missing or unverified demos remain text-only.
- The page must remain legible as a resume while allowing immersive motion and visual pacing.

## Brand Commitments

- Name: Takala Wang / 王重鈞.
- Primary role: Software Engineer · AI Researcher.
- Direct contact: ccwangtakala@gmail.com and LinkedIn.
- The visual redesign must avoid a presentation/PPT feeling and should feel immersive rather than like a grid of slides.
- The current visual direction is a SmoothUI-native product surface: identity leads, one project stage reveals evidence, and compact rows carry the resume; do not use star fields, space metaphors, glass cards, or presentation-deck framing.

## Evidence on Hand

- Resume data in `src/data/resume.ts`.
- Chinese and English copy in `src/data/siteCopy.ts`.
- Project screenshots in `public/projects/` for NOJV, OnStage TW, Hinagiku, and Cool English.
- Public links and repositories recorded in the project data.

## Product Principles

1. Lead with the person and the work, not decorative claims.
2. Make contribution and outcome easier to scan than technology labels.
3. Preserve factual resume clarity inside a memorable visual experience.
4. Let real artifacts carry the proof.

## Accessibility & Inclusion

The site must work with keyboard navigation, visible focus, reduced-motion preferences, responsive layouts, and sufficient text contrast.
