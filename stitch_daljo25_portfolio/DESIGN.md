---
name: Technical Precision Dark
colors:
  surface: '#111317'
  surface-dim: '#111317'
  surface-bright: '#37393e'
  surface-container-lowest: '#0c0e12'
  surface-container-low: '#1a1c20'
  surface-container: '#1e2024'
  surface-container-high: '#282a2e'
  surface-container-highest: '#333539'
  on-surface: '#e2e2e8'
  on-surface-variant: '#bbcabf'
  inverse-surface: '#e2e2e8'
  inverse-on-surface: '#2f3035'
  outline: '#86948a'
  outline-variant: '#3c4a42'
  surface-tint: '#4edea3'
  primary: '#4edea3'
  on-primary: '#003824'
  primary-container: '#10b981'
  on-primary-container: '#00422b'
  inverse-primary: '#006c49'
  secondary: '#4cd7f6'
  on-secondary: '#003640'
  secondary-container: '#03b5d3'
  on-secondary-container: '#00424e'
  tertiary: '#ffb3af'
  on-tertiary: '#650911'
  tertiary-container: '#fc7c78'
  on-tertiary-container: '#711419'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#6ffbbe'
  primary-fixed-dim: '#4edea3'
  on-primary-fixed: '#002113'
  on-primary-fixed-variant: '#005236'
  secondary-fixed: '#acedff'
  secondary-fixed-dim: '#4cd7f6'
  on-secondary-fixed: '#001f26'
  on-secondary-fixed-variant: '#004e5c'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3af'
  on-tertiary-fixed: '#410005'
  on-tertiary-fixed-variant: '#842225'
  background: '#111317'
  on-background: '#e2e2e8'
  surface-variant: '#333539'
typography:
  headline-xl:
    fontFamily: Geist
    fontSize: 4rem
    fontWeight: '700'
    lineHeight: 4.5rem
    letterSpacing: -0.04em
  headline-xl-mobile:
    fontFamily: Geist
    fontSize: 2.5rem
    fontWeight: '700'
    lineHeight: 3rem
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Geist
    fontSize: 2.75rem
    fontWeight: '600'
    lineHeight: 3.25rem
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Geist
    fontSize: 2rem
    fontWeight: '600'
    lineHeight: 2.5rem
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Geist
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Geist
    fontSize: 1.25rem
    fontWeight: '500'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.875rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.625rem
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.375rem
    letterSpacing: 0em
  code-inline:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.25rem
    letterSpacing: -0.01em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1rem
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.6875rem
    fontWeight: '500'
    lineHeight: 0.875rem
    letterSpacing: 0.06em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 1.5rem
  margin-sm: 1rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the intersection between architectural code craftsmanship and high-end editorial clarity. Designed specifically for senior-level engineering portfolios, it delivers an uncompromising dark mode aesthetic characterized by deep charcoal tones, micro-engineered structural lines, and laser-focused neon accents.

### Brand Personality & Philosophy
- **Authoritative & Senior:** Rejects generic portfolio clichés in favor of architectural rigor, production-grade maturity, and deep technical depth.
- **Surgical Precision:** Every grid line, label, and status indicator operates with strict intentionality, mirroring the discipline of pristine codebases.
- **Refined & Kinetic:** Combines monolithic editorial typography with subtle, ultra-smooth micro-interactions, avoiding loud or gratuitous animations.

### Design Movement & Aesthetic Form
The design style is a hybrid of **Technical Minimalism** and **Editorial Engineering**:
- High-contrast, typographic scale anchors the page.
- Utilitarian monospaced accents serve functional metadata, commit statuses, and code metrics.
- Surfaces leverage hairline graphite boundaries, deliberate pitch-black negative space, and localized ambient emerald glows rather than traditional heavy skeuomorphism or overt glassmorphism.

## Colors

The palette revolves around deep, light-absorbent charcoal canvases punctuated by clinical, hyper-vibrant signal colors.

### Core Architecture
- **Primary Signal (`#10B981` / Emerald Neon):** Represents system vitality, production readiness, and active availability for roles or architectural consults. Used for interactive focal points, success badges, and commit-tier accents. Extended by a brighter `#34D399` tier for acute hover states and pulse nodes.
- **Secondary Signal (`#06B6D4` / Electric Cyan):** Dedicated to technical constructs, language badges (Astro, Tailwind, Laravel), dynamic endpoints, and interactive data structures.
- **Base Canvas (`#0B0D11` / Obsidian Core):** An ultra-deep carbon neutral delivering rich black levels without clinical flat grayness.
- **Elevated Canvas (`#11141B` / Graphite Bed):** The primary layer for cards, floating controls, and interactive zones.
- **Structural Outlines (`#1F242E` / Sub-Surface Zinc):** Delicate, 1px boundaries separating modules with surgical definition.

### Foreground Hierarchy
- **Text Dominant (`#F9FAFB`):** Pure stark white reserved for primary headlines, active titles, and focal values.
- **Text Secondary (`#94A3B8` / Slate):** Balanced mid-tone for body paragraphs, technical case-study breakdowns, and descriptions.
- **Text Subdued (`#475569`):** Reserved for monospaced timestamps, table borders, and structural metadata.

## Typography

The type system blends contemporary engineering typography (`Geist`) with clinical developer monospacing (`JetBrains Mono`). 

### Type Application Rules
- **Display & Headings:** Set in dense, tight tracking (`-0.03em` to `-0.04em`). Headlines must feel architectural, confident, and grounded.
- **Narrative Body Text:** Neutral, optimized for deep legibility on pure dark backdrops, avoiding glare by utilizing muted zinc and slate tints rather than saturated pure white.
- **Technical Metadata & Micro-Labels:** Exclusively set in `JetBrains Mono` with uppercase casing where applied to categories, stack markers, terminal stats, and availability badges (`AVAILABLE FOR HIRE`, `V1.4.0-PROD`).

## Layout & Spacing

The layout philosophy is built on an architectural 12-column responsive grid framed by structural boundary lines.

### Grid & Breakpoints
- **Desktop (>= 1280px):** 12-column fluid grid, centered inside a max-width envelope of `1200px`. Gutters set to `2rem`, flanked by wide outer margins (`4rem`).
- **Tablet (768px - 1279px):** 8-column layout with `1.5rem` gutters and responsive edge gutters.
- **Mobile (< 768px):** 4-column layout with `1rem` margins and condensed gutters to maximize content real estate.

### Spacing Rhythm
Spacing behaves monotonically based on multiples of `0.5rem` (8px). Structural rhythm utilizes large vertical gaps (`space-xl` to `5rem`) between major sections to let architectural modules breathe, while inner card structures use tight, disciplined gaps (`space-sm` to `space-md`) to communicate data density and efficiency.

## Elevation & Depth

Visual hierarchy rejects blurry dropshadows in favor of **Tonal Layering** and **Sub-Surface Hairline Borders**.

### Depth Layers
- **Layer 0 (Canvas Base):** Background `#0B0D11`, completely flat, grounding the entire interface.
- **Layer 1 (Card & Module Deck):** Background `#11141B`, bounded by a sharp `1px` border of `#1F242E`. Hover states transition this border to `#334155` or an accent tint.
- **Layer 2 (Interactive Floating Elements & Flyouts):** Background `#161B24`, complemented by a strict hairline outline and an extremely subtle, tinted ambient spread (`0px 8px 32px rgba(0, 0, 0, 0.65)`).
- **Signal Ambient Radiance:** Key interactive focal points (such as status pills or primary CTAs) emit a localized, low-intensity neon glow (`0px 0px 20px rgba(16, 185, 129, 0.15)`), signifying live system state without visual noise.

## Shapes

The design system employs a **Soft** shape language (`roundedness: 1`), keeping elements crisp and engineering-focused without brutalist harshness.

### Corner Radius Conventions
- **Interactive Controls & Inputs:** `0.375rem` (6px) to maintain a tailored, technical tool aesthetic.
- **Cards, Panels, and Code Blocks:** `0.5rem` (8px) for clean framing.
- **Status Pills & Micro Chips:** Complete pill radius (`9999px`) to create immediate visual distinction from standard structural boxes.
- **Dividers & Hairlines:** Strict 1px geometric borders.

## Components

### Buttons
- **Primary (Signal Action):** Background `#10B981`, foreground `#0B0D11`, bold weight, `0.375rem` corner radius. Subtle scale hover (`scale(1.01)`) with an emerald diffusion glow.
- **Secondary / Outline:** Background `transparent`, border `1px solid #1F242E`, foreground `#F9FAFB`. On hover: border switches to `#06B6D4`, text to `#06B6D4`, with background shifting to `rgba(6, 182, 212, 0.04)`.
- **Ghost Utility:** Background `transparent`, text `#94A3B8`, mono label. Hover brings text to `#F9FAFB`.

### System Availability Pill
- Compact pill element (`rounded-full`) housing a pulsing green node: a central `#10B981` dot surrounded by a CSS ping-animation aura.
- Accompanied by uppercase `label-sm` monospace text: `SYSTEM: READY FOR CONTRACTS / ROLES`.
- Background tint: `rgba(16, 185, 129, 0.08)` enclosed in `1px solid rgba(16, 185, 129, 0.2)`.

### Project & Engineering Cards
- Constructed with surface `#11141B` and boundary `#1F242E`.
- Card header features technical taxonomy tags (e.g., `ASTRO // TAILWIND // FILAMENT`) in `label-sm`.
- Interaction: On hover, border color transitions smoothly from `#1F242E` to `#34D399` alongside an upward lift of `-2px`.
- Optional terminal output preview or architecture stat footer pinned with a 1px top border.

### Interactive Code Previews & Stack Badges
- **Stack Chips:** Minimal charcoal badges (`#161B24`) with `1px solid #1F242E`, featuring monospace type with small dot glyphs matching technology colors (Cyan for Tailwind, Emerald for Laravel/Filament).
- **Code Blocks:** Styled as minimal CLI windows; header includes directory breadcrumbs (`src/domain/system.ts`) in monospace, with line-numbered code in high-contrast syntax highlighting.

### Form Inputs & Terminal Inputs
- Background `#0E1117`, border `1px solid #1F242E`, typography `JetBrains Mono` at `body-sm`.
- Focus State: Border transitions to `#06B6D4` with `0px 0px 0px 1px #06B6D4` ring; prompt indicator `>` pulses softly.