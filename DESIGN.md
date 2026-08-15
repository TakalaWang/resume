# Design System: Takala Wang Smooth Resume

## North star

**A finished product surface for a working engineer.** The visitor should understand who Takala is, what he has shipped, and how to contact him without decoding a visual concept. SmoothUI-native controls carry state and actions; the surrounding layout gives the resume a calm, product-quality frame.

## Visual language

- Cool neutral canvas: `#f5f7fa` in light mode and `#0f141c` in dark mode.
- Ink-first typography with electric blue for active work and links, warm yellow for focus, and green only for availability.
- Rounded SmoothUI surfaces, thin borders, quiet shadows, compact rows, and one large project stage.
- No stars, glassmorphism, gradients, paper metaphors, decorative grids, or slide-deck cards.

## Typography

- Geist Variable for display and body copy.
- A system monospace stack only for labels, dates, project state, and technical metadata.
- The name is the dominant first-view object; section headings stay below 6rem and body copy stays readable.

## Information architecture

1. Name, role, direct email, LinkedIn, and current work status.
2. Education and recognition proof strip.
3. Five selected projects, led by NOJV, with a single interactive project stage.
4. Chronological engineering, research, and collaboration timeline.
5. Technical working set, awards, and papers.
6. Direct contact and a complete work index.

## Native components

- `SmoothButton` is used for project tabs, primary project actions, contact, and theme control.
- Project tabs are real accessible tabs with selected state and keyboard focus.
- Links remain semantic anchors; screenshots and text-only projects share the same project stage.
- The page keeps all resume content in the DOM and does not depend on animation to reveal information.

## Motion

- Switching a project fades and lifts the single stage; its screenshot, URL, stack, contribution, and outcome change together.
- The availability dot is the only continuous ambient motion.
- Sections use a supported view-timeline reveal; reduced-motion preferences remove all non-essential motion.

## Responsive behavior

- Desktop uses a two-column identity/profile opening and a two-column work stage.
- Tablet collapses navigation and keeps the profile surface readable.
- Mobile stacks identity, profile, proof, project tabs, project stage, timeline, and contact without horizontal overflow.

## Do / don't

- Do lead with factual resume content and verified links.
- Do keep project contribution and outcome adjacent to the project preview.
- Do use SmoothUI states consistently for selected, hover, focus, and action states.
- Don't invent demos, metrics, repository URLs, or project claims.
- Don't add decorative copy, repeated eyebrows, or a grid of same-size portfolio cards.
