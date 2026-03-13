# Barley Bus Redesign Plan — Plexify-Inspired Premium Polish

## Overview
Merge Plexify's premium SaaS design language (Apple/Stripe aesthetic) into the
existing Arid-based Barley Bus site. Keep all colors, architecture, booking
integrations, and voice. Upgrade typography, spacing, shadows, animations, and
component styling.

---

## Phase 1: Design Token & Global CSS Overhaul

### 1a. Typography Upgrade (`design-tokens.ts` + `globals.css`)
**Current:** Inter only, basic sizes (72/48/40/16/14px), minimal tracking control.

**New — Plexify-inspired:**
- Add **Inter Tight** as display font (bolder, tighter, more premium for headlines)
- Expand type scale with fluid `clamp()` sizes for responsive typography:
  - Hero: `clamp(3rem, 5vw + 1rem, 5rem)` (~48px → 80px)
  - H1: `clamp(2.25rem, 3vw + 1rem, 3.5rem)` (~36px → 56px)
  - H2: `clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)` (~28px → 40px)
  - H3: `clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)` (~20px → 24px)
  - Body large: `18px`
  - Body: `16px`
  - Small: `14px`
  - Caption: `13px`
- Tighter letter-spacing for headlines: `-0.03em` (hero), `-0.025em` (h1/h2)
- Line heights: `1.05` (hero), `1.15` (h1), `1.2` (h2), `1.6` (body)
- Font weight tokens: `800` (hero), `700` (headings), `500` (subheadings), `400` (body)

### 1b. Spacing & Rhythm
**Current:** `py-24`/`py-32` sections, `max-w-7xl`.

**New:**
- Section padding: `py-24 lg:py-32` → `py-20 lg:py-28` (slightly tighter for modern feel)
- Add `--section-gap` token for consistent vertical rhythm
- Max-width stays `max-w-7xl` (1280px) — proven for content sites
- Inner content `max-w-3xl` for centered text blocks (better readability)
- Card gap: `gap-6` → `gap-8` on desktop for more breathing room

### 1c. Shadows & Depth (Plexify's layered shadow system)
**Current:** `shadow-sm`, `shadow-md` — flat, minimal.

**New:**
- `--shadow-xs`: `0 1px 2px rgba(0,0,0,0.04)` (resting cards)
- `--shadow-sm`: `0 2px 8px rgba(0,0,0,0.06)` (slight lift)
- `--shadow-md`: `0 4px 16px rgba(0,0,0,0.08)` (hover cards)
- `--shadow-lg`: `0 8px 32px rgba(0,0,0,0.10)` (modals, elevated)
- `--shadow-glow`: `0 0 0 4px rgba(255,107,82,0.12)` (CTA glow on hover)

### 1d. Border Radius
**Current:** `8px` (sm), `12px` (md).

**New:**
- `--radius-xs`: `6px` (small chips, tags)
- `--radius-sm`: `10px` (inputs, small cards)
- `--radius-md`: `14px` (standard cards)
- `--radius-lg`: `20px` (hero elements, availability bar)
- `--radius-full`: `9999px` (pill buttons, badges)

### 1e. Animation Utilities (new in `globals.css`)
Add CSS utility classes for subtle Plexify-style micro-interactions:
- `.animate-fade-in-up`: fade + translate-y entrance (for scroll reveals)
- `.animate-scale-in`: subtle scale-up entrance
- Transition defaults: `transition-all duration-300 ease-out`
- Hover card lift: `hover:-translate-y-1 hover:shadow-md`

### 1f. Base Layer Updates
- Smoother heading styles with new tracking/weight defaults
- Subtle `::selection` color (coral at 20% opacity)
- Better focus-visible ring: `3px` offset, coral glow

---

## Phase 2: Component-Level Polish

### 2a. Button Component (`button.tsx`)
- Add `transition-all duration-200` for smooth hover
- Default variant: add subtle `shadow-sm`, on hover → `shadow-md` + slight `-translate-y-0.5`
- Increase border-radius to `--radius-md` (14px) for softer feel
- Large size: bump to `h-14 px-10` with `text-base font-semibold`
- Add `cursor-pointer` explicitly
- Outline variant: `border-2` instead of `border` for more definition

### 2b. Header (`header.tsx`)
- Height: `h-16` → `h-18` (72px) for more breathing room
- Remove border-bottom, use subtle shadow instead: `shadow-xs`
- Backdrop blur: `backdrop-blur-md` (stronger)
- Logo: slightly larger, `text-2xl` with `font-extrabold`
- Nav links: `text-sm` → `text-[15px]`, `font-medium` → `font-semibold`
- Book Now button: pill shape (`rounded-full`), consistent coral CTA
- Mobile drawer: full-screen overlay with fade animation

### 2c. Eyebrow Component
- Current is fine but add `font-bold` and slightly reduce `letter-spacing` to `0.1em`
- This gives a more confident, less delicate feel

---

## Phase 3: Homepage Sections (one at a time)

### 3a. Hero Section
- Headline: use new fluid clamp sizing, `-0.03em` tracking, `font-extrabold`
- Subheadline: `text-xl` (up from `text-lg`), `text-white/75`, `max-w-2xl`
- Availability bar: larger radius (`rounded-2xl`), stronger shadow (`shadow-lg`),
  `p-4 sm:p-5` padding, subtle border `border border-border/50`
- CTA button inside bar: pill shape (`rounded-full`), with right arrow icon
- Trust badges: refine spacing, use `font-bold` instead of `font-extrabold` (more refined)
- Press bar: increase spacing, add subtle opacity hover transitions
- Overall: more vertical padding, let the hero breathe

### 3b. Tour Categories
- Cards: larger radius (`rounded-xl`), add `shadow-xs` resting state
- Hover: `shadow-md` + `-translate-y-1` lift (Plexify card pattern)
- Image: `rounded-t-xl` to match card radius
- Title: `text-xl font-bold` (up from current)
- Price badge: pill shape, coral background, white text
- Gap between cards: `gap-8` on desktop

### 3c. Social Proof Strip
- Increase vertical padding
- Larger stat numbers with tighter tracking
- Add subtle divider styling refinement

### 3d. How It Works
- Step numbers: larger circles with coral fill, white text, `rounded-full`
- Connecting line between steps (desktop) using `::after` pseudo-elements
- Card style: no border, just subtle shadow on hover
- Title: `font-bold`, body: `text-text-secondary`

### 3e. Private Events Teaser
- Image: `rounded-2xl`, subtle shadow
- Better text hierarchy: larger heading, more whitespace between elements
- CTA button: prominent with hover lift

### 3f. Guarantees
- Badge icons: larger, coral tint
- Cards: `rounded-xl`, `shadow-xs` resting, `shadow-sm` hover
- Tighter, bolder text

### 3g. Reviews
- Quote cards: `rounded-2xl`, `shadow-xs` → `shadow-md` on hover
- Star display: slightly larger, `gap-1`
- Author info: subtle divider line above
- Pull-quote marks: large decorative coral quotation mark

### 3h. FAQ
- Accordion items: more padding, larger click targets
- Open/close animation: smoother with `transition-all duration-300`
- Question text: `text-lg font-semibold`

### 3i. Final CTA
- Keep coral background
- Headline: larger with new fluid sizing
- Button: white with navy text, pill shape, hover lift
- Add subtle pattern or gradient overlay for depth

### 3j. Footer
- Keep navy background
- Refine spacing and typography
- Links: better hover transitions

---

## Phase 4: Global Polish

### 4a. Scroll Animations
- Add intersection observer-based fade-in-up for sections
- Keep it subtle — 20px translate, 400ms duration, `ease-out`
- Respect `prefers-reduced-motion`

### 4b. Mobile CTA Bar
- Match new button styles (pill, shadow)
- Smoother backdrop blur

---

## Rules (from CLAUDE.md — non-negotiable)
- All Barley Bus colors preserved exactly
- No dark sections except footer
- Mobile-first responsive approach
- Booking/GHL integrations untouched
- Voice stays warm, casual KC local
- No pricing hidden, no tour stops listed, no autoplay changes
- Every design token change reflected in `design-tokens.ts` AND `globals.css`

## Order of Execution
1. `globals.css` + `design-tokens.ts` (foundation)
2. `button.tsx` (shared component)
3. `header.tsx` (visible on every page)
4. `hero.tsx` (most impactful section)
5. Remaining homepage sections top-to-bottom
6. Footer
7. Scroll animations (final polish)

Each section: implement → show you → get approval → next section.
