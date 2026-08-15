---
name: Takala Wang Resume Workbench
description: An engineering resume composed like a working editorial archive.
colors:
  background: "#e7e2d8"
  foreground: "#172733"
  paper: "#f3efe7"
  paper-deep: "#d8d1c4"
  blue: "#145a78"
  yellow: "#e6b84f"
  red: "#a64b3b"
  ink-soft: "#59656a"
  ink-faint: "#8b8f8a"
  line: "rgba(23, 39, 51, 0.18)"
  line-strong: "rgba(23, 39, 51, 0.42)"
typography:
  display:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(4.25rem, 13vw, 12.5rem)"
    fontWeight: 650
    lineHeight: 0.78
    letterSpacing: "-0.095em"
  headline:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(3.1rem, 8vw, 8.2rem)"
    fontWeight: 600
    lineHeight: 0.82
    letterSpacing: "-0.085em"
  body:
    fontFamily: "Geist Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "SFMono-Regular, Cascadia Code, Roboto Mono, ui-monospace, monospace"
    fontSize: "0.63rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  circle: "50%"
spacing:
  shell: "clamp(1.25rem, 4vw, 4.5rem)"
  section: "clamp(6rem, 12vw, 12rem)"
components:
  signal-link:
    textColor: "{colors.foreground}"
    typography: "{typography.label}"
    padding: "0.8rem 0"
  project-entry:
    border: "1px solid {colors.line}"
    padding: "2.4rem 0"
---

# Design System: Takala Wang Resume Workbench

## Overview

**Creative North Star: "The Digital Print Workbench"**

This resume is a working archive, not a presentation deck. Visitors move through a sequence of project files, engineering notes, and evidence. The page feels like a carefully prepared editorial workspace: large type establishes the person, paper layers give the work a physical rhythm, and thin rules keep the information easy to scan.

The visual world is intentionally not space-themed. It uses uncoated paper, dark ink, drafting blue, and yellow registration marks. Real screenshots are treated as source material; text-only projects get a restrained case-study stamp rather than a decorative illustration.

**Key Characteristics:**

- Layered work file in the first viewport.
- Full-width project records instead of equal card containers.
- Dark ink, paper tones, blue annotations, and yellow registration marks.
- One small registration pulse for ambient motion; the content remains still and readable.

## Colors

The palette is paper-first, with a dark ink base and two functional print marks.

### Primary

- **Drafting Blue** (#145a78): Links, taxonomy, active information, and annotation marks.
- **Registration Yellow** (#e6b84f): File corners, record markers, focus, and attention.

### Secondary

- **Proof Red** (#a64b3b): Reserved for link hover or future status/error states.

### Neutral

- **Paper Ground** (#e7e2d8): Main page field.
- **Paper Sheet** (#f3efe7): File and project image surfaces.
- **Paper Deep** (#d8d1c4): Layered sheets behind the primary file.
- **Dark Ink** (#172733): Headings and primary copy.
- **Soft Ink** (#59656a): Supporting copy.
- **Faint Ink** (#8b8f8a): Low-priority metadata.
- **Hairline** (rgba(23, 39, 51, 0.18)): Separators and archive rules.

### Named Rules

**The Registration Rule.** Blue identifies information; yellow marks a file, a focus state, or a point of attention. Neither is a general-purpose decoration.

## Typography

**Display Font:** Geist Variable (with ui-sans-serif fallback)

**Body Font:** Geist Variable (with ui-sans-serif fallback)

**Label/Mono Font:** SFMono-Regular, Cascadia Code, Roboto Mono, ui-monospace

Geist gives the identity and project titles a broad editorial presence. Mono labels are used for dates, taxonomy, navigation, and file metadata only.

### Hierarchy

- **Display:** 650 weight, clamp 4.25rem–12.5rem, compressed letter spacing; name and archive title.
- **Headline:** 600 weight, clamp 3.1rem–8.2rem; section titles.
- **Title:** 600 weight, clamp 2.6rem–6.6rem; project names.
- **Body:** 400 weight, 1rem, 1.7 line-height; descriptions and evidence.
- **Label:** 500–700 weight, 0.63rem mono, tracked uppercase; navigation and metadata.

## Layout

The shell is centered with horizontal padding from `clamp(1.25rem, 4vw, 4.5rem)`. The hero is a two-column workbench: identity on the left and a layered file on the right. Profile and evidence use asymmetric editorial grids. Work is a vertical archive line with a beacon column and alternating media/copy rows; it never becomes a grid of equal cards.

Sections use generous vertical pacing from `clamp(6rem, 12vw, 12rem)`. At 800px and below, grids become one column, navigation reduces to contact plus controls, and project rows read media then copy. At 480px, action links become full width and project media uses a 4:3 crop.

## Elevation & Depth

Depth comes from paper layers, a soft offset shadow under the document stack, image framing, and overlapping rules. Content entries stay flat. There are no floating card shadows, glass panels, or decorative glow effects.

## Shapes

Content containers are rectangular with 1px rules. Small squares are used as registration marks and record beacons. Circles are reserved for the theme icon; no rounded cards are part of the visual language. Project frames use crop marks in two corners.

## Components

### Navigation

- **Shape:** Sticky transparent paper field with a hairline bottom rule.
- **Typography:** Mono labels at 0.63rem, uppercase, muted at rest.
- **State:** Hover shifts to blue and moves up 1px; focus uses a yellow outline.
- **Mobile:** Work and experience links collapse while contact, language, and theme controls remain.

### Signal Links

- **Shape:** Text action with a bottom rule, not a filled button.
- **State:** The rule and text shift to blue/yellow on hover; directional spacing expands.

### Project Entries

- **Shape:** Full-width records separated by rules and marked by a square beacon.
- **Media:** Verified screenshots inside a paper frame; no-URL projects use a typographic case-study stamp.
- **Proof:** Description, contribution, and outcome stay in the same reading path.

### Document Stack

- **Shape:** Three offset paper sheets with crop marks and file metadata.
- **Behavior:** Static layered composition; the scroll cue supplies the only ambient motion on the hero.

### Theme Control

- **Shape:** Circular icon button using the SmoothUI motion primitive.
- **State:** Sun/Moon icons, persisted theme, visible focus ring.

## Do's and Don'ts

### Do:

- **Do** make the person and the work the visual focus.
- **Do** use real screenshots as source material.
- **Do** keep contribution and outcome close to each project.
- **Do** use blue and yellow as functional print marks.
- **Do** preserve contrast, keyboard focus, and reduced-motion behavior.

### Don't:

- **Don't** use star fields, orbit diagrams, or space metaphors.
- **Don't** rebuild the page as a deck of rounded cards.
- **Don't** use gradient text or decorative badges as proof.
- **Don't** place an eyebrow above every heading.
- **Don't** invent claims or links outside the resume data.
