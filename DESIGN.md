# Design System: Takala Wang Resume Console

## Creative North Star

**Personal Systems Console.** This is an engineering resume that behaves like a working product surface: identity stays visible, real projects can be switched into a live preview frame, and every section leads to evidence. It is not a slide deck, a dashboard, or a decorative landing-page experiment.

## Visual language

- **Background:** quiet responsive canvas in `#f4f7fb`, with `#0c121b` dark mode.
- **Ink:** `#101828` / `#edf3fb` for primary text; muted blue-gray for supporting copy.
- **Signals:** electric blue for links and selection, warm yellow for focus and status attention, coral for secondary emphasis, green only for availability states.
- **Surfaces:** flat panels, thin rules, compact rows, and real screenshot frames. No star fields, paper layers, glassmorphism, or card grids.

## Typography

- **Display and body:** Geist Variable.
- **Metadata:** system monospace stack for dates, labels, navigation, and project frame status.
- Large type belongs to Takala's name and section titles; descriptions stay at readable body sizes.

## Information architecture

1. Identity, current role, direct contact, and location.
2. Education and recognition facts.
3. Five selected projects with NOJV first.
4. Experience timeline with dates, role, contribution, and links.
5. Technical stack and awards.
6. Direct contact and the complete work index.

## Interaction and motion

- Project tabs update a real screenshot, link, stack, description, contribution, and outcome in one reading path.
- Motion is purposeful: project changes use a short crossfade/slide; the status route pulses slowly; supported browsers reveal sections as they enter the viewport.
- Theme switching uses the existing SmoothUI control.
- `prefers-reduced-motion` removes non-essential animation and smooth scrolling.

## Components

- **Header:** sticky, translucent reading rail with name, section anchors, language switch, and theme icon.
- **Status panel:** compact current-role signal with a live availability indicator.
- **Project showcase:** tab list + animated preview frame + contribution/outcome evidence.
- **Experience rows:** chronological records with hover emphasis and direct external links.
- **Contact:** email is the primary action; LinkedIn and GitHub remain one click away.

## Do / don't

- Do lead with the person, shipped work, and verifiable links.
- Do keep screenshots close to the project explanation.
- Do preserve keyboard focus, readable contrast, responsive layout, and reduced motion.
- Don't add filler microcopy, invented metrics, decorative badges, or generic technology slogans.
- Don't turn the resume into a PPT-like sequence of isolated panels.
