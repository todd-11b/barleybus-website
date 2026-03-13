# Barley Bus Redesign Plan — Plexify-Inspired Premium Polish

## Overview
Merge Plexify's premium travel agency design language into the existing
Arid-based Barley Bus site. Keep all Barley Bus colors, architecture, booking
integrations, and voice. Upgrade typography, spacing, shadows, border radii,
animations, and component styling based on the actual Plexify template files.

### Key Plexify Design Patterns Extracted (from `_reference-templates/plexify/`)
- **Fonts:** Poppins (body), Oswald (display/titles), Roboto Condensed (accent)
- **Headings:** `font-semibold`, `leading-[1.1]`, uppercase, Oswald font-title
- **Type scale:** Aggressive responsive sizing (e.g., hero goes from `text-4xxl` (45px) on mobile → `text-15xl` (150px) on 3xl screens)
- **Buttons:** Pill shape (`border-radius: 50px`), medium weight, `padding: 14px 35px`, overflow-hidden hover effect with pseudo-element wipe
- **Cards:** `rounded-xxl` (15px) to `rounded-2xl` (20px), white bg, `p-2.5` outer padding, `shadow-1` (`0px 5px 40px rgba(0,0,0,0.1)`)
- **Section spacing:** Generous — `py-37.5` to `py-40` (150-160px) on desktop, `py-18` (72px) on mobile
- **Animations:** GSAP ScrollTrigger, fade/clip-path reveals, word rotate animations, `duration-500` default transitions
- **Nav:** Pill-shaped indicator that slides between items, `bg-secondary/40` backdrop, `rounded-6xl`
- **Image treatment:** Gradient overlays (`bg-linear-to-b from-transparent to-black/60`), overflow-hidden with rounded corners, shine effect on hover
- **Color approach:** Bold primary accent, dark secondary (#000), light surface (#F2EFEA)
- **Border radii:** 15px (xxl), 20px (2xl), 25px (2xxl), 30px (3xl), up to 100px

---

## Phase 1: Design Token & Global CSS Overhaul

### 1a. Typography Upgrade (`design-tokens.ts` + `globals.css`)
**Current:** Inter for both display and body, basic sizes (72/48/40/16/14px).

**New — Plexify-adapted:**
- Keep **Inter** as body font (cleaner than Poppins for our brand)
- Add **Inter Tight** as display/title font (our equivalent of Plexify's Oswald — condensed, bold, modern)
- Adopt Plexify's aggressive responsive type scale using `clamp()`:
  - Hero: `clamp(2.75rem, 5vw + 1rem, 5rem)` (~44px → 80px, echoing Plexify's `text-4xxl` → `text-10xl` range)
  - H1: `clamp(2.25rem, 3vw + 1rem, 3.5rem)` (~36px → 56px)
  - H2: `clamp(1.75rem, 2.5vw + 0.5rem, 2.5rem)` (~28px → 40px)
  - H3: `clamp(1.25rem, 1.5vw + 0.5rem, 1.5rem)` (~20px → 24px)
  - Body large: `18px`, Body: `16px`, Small: `14px`, Caption: `13px` (matching Plexify's `text-2xs`)
- Adopt Plexify's heading style: `leading-[1.1]` (from `global.css` h1-h6 rule), `font-semibold`
- Letter-spacing: `-0.03em` hero, `-0.025em` h1/h2 (tighter than current `-0.02em`)
- **NOT adopting:** Plexify's uppercase headings — too aggressive for Barley Bus's warm voice

### 1b. Spacing & Rhythm
**Current:** `py-24 lg:py-32` sections (96px/128px).

**New — matching Plexify's generous spacing:**
- Section padding: `py-18 lg:py-28` on mobile/desktop (72px/112px — Plexify uses `py-18` mobile, up to `py-40` desktop; we go lighter since we're not as content-dense)
- Max-width: keep `max-w-7xl` (1280px) — close to Plexify's 1330px container
- Inner text blocks: `max-w-3xl` for centered copy (better readability)
- Card gaps: `gap-6` → `gap-8` desktop (Plexify uses `gap-5` but with larger cards)

### 1c. Shadows & Depth
**Current:** `shadow-sm` and `shadow-md` — minimal.

**New — inspired by Plexify's `shadow-1: 0px 5px 40px rgba(0,0,0,0.1)`:**
- `--shadow-xs`: `0 1px 2px rgba(0,0,0,0.04)` (resting state)
- `--shadow-sm`: `0 2px 8px rgba(0,0,0,0.06)` (slight elevation)
- `--shadow-md`: `0 4px 16px rgba(0,0,0,0.08)` (hover/active cards)
- `--shadow-lg`: `0 5px 40px rgba(0,0,0,0.10)` (Plexify's signature shadow — dropdowns, modals)
- `--shadow-glow`: `0 0 0 4px rgba(255,107,82,0.15)` (coral CTA focus/hover glow)

### 1d. Border Radius
**Current:** `8px` (sm), `12px` (md).

**New — matching Plexify's generous radius system:**
- `--radius-xs`: `6px`
- `--radius-sm`: `10px` (Plexify's `radius-2lg`)
- `--radius-md`: `15px` (Plexify's `radius-xxl` — used on cards)
- `--radius-lg`: `20px` (Plexify's `radius-2xl` — used on card containers)
- `--radius-xl`: `30px` (Plexify's `radius-3xl`)
- `--radius-full`: `9999px` (Plexify's `--btn-radius: 50px` — pill buttons)

### 1e. Animation & Transition Utilities (new in `globals.css`)
Inspired by Plexify's animation system but kept lightweight (no GSAP dependency):
- Default transition: `duration-500` on links (matching Plexify's `a { @apply duration-500; }`)
- `.animate-fade-in-up`: CSS-only fade + translate-y for scroll reveals
- `.animate-clip-in`: clip-path reveal animation (from Plexify's `clipRightIn` keyframe)
- Hover card lift pattern: `hover:-translate-y-1 hover:shadow-md transition-all duration-300`
- Image shine on hover (adapted from Plexify's `dzShine` animation)
- `::selection` color: coral at 20% opacity (matching Plexify's `selection:bg-primary`)

### 1f. Base Layer Updates
- Headings: `font-semibold leading-[1.1]` (directly from Plexify's global.css)
- Buttons: `cursor-pointer` default (from Plexify's `button { @apply cursor-pointer; }`)
- Smoother scrolling: `scrollbar-width: thin` (from Plexify)
- Link hover underlines: adapted from Plexify's `.link-hover` pattern

---

## Phase 2: Component-Level Polish

### 2a. Button Component (`button.tsx`)
Adapted from Plexify's `btn.css`:
- Pill shape: `rounded-full` (Plexify's `--btn-radius: 50px`)
- `transition-all duration-300` (Plexify's `transition-duration: 0.3s`)
- `overflow-hidden` (for future hover wipe effects)
- Default: coral bg + slight shadow, hover → darker coral + lift
- Outline: `border-2` for more definition
- Size lg: `h-14 px-10` (matching Plexify's padding `3.5 8.75`)

### 2b. Header (`header.tsx`)
Adapted from Plexify's header patterns:
- Remove border-bottom, use subtle `shadow-xs` instead
- Stronger backdrop: `bg-white/95 backdrop-blur-md`
- Nav links: `text-[15px] font-medium` (Plexify uses `xl:text-base text-2sm font-medium`)
- Book Now: pill shape `rounded-full` matching new button system
- Logo: `text-2xl font-extrabold`
- Mobile: keep current drawer pattern (simpler than Plexify's xmenu system)

### 2c. Eyebrow Component
- Reduce letter-spacing to `0.1em` (from `0.15em`) — more modern/confident
- `font-bold` weight

---

## Phase 3: Homepage Sections (one at a time)

### 3a. Hero Section
Inspired by Plexify's full-bleed hero with gradient overlay:
- Headline: new fluid clamp sizing, `leading-[1.1]`, `font-extrabold`
- Subheadline: `text-xl`, `text-white/75`, `max-w-2xl`
- Availability bar: `rounded-[20px]` (Plexify's card radius), stronger `shadow-lg`, `p-4 sm:p-5`
- CTA button in bar: pill shape `rounded-full` with arrow icon
- Trust badges: refined spacing, `font-bold` (not extrabold)
- Press bar: more spacing, `duration-500` hover transitions (Plexify default)

### 3b. Tour Categories
Plexify card pattern adaptation:
- Cards: `rounded-[15px]` (Plexify's `rounded-xxl`), white bg, `shadow-xs` resting
- Hover: `shadow-lg` + `-translate-y-1` lift + `duration-300`
- Image: `overflow-hidden rounded-t-[15px]`, gradient overlay on hover
- Title: `text-xl font-bold`
- Price: pill badge
- Gap: `gap-8`

### 3c. Social Proof Strip
- More vertical padding
- Larger stat numbers, tighter tracking
- Subtle divider refinement

### 3d. How It Works
- Step circles: larger, coral fill, white text, `rounded-full`
- Connecting line between steps (desktop)
- Cards: subtle shadow on hover, no borders
- Plexify-style font hierarchy

### 3e. Private Events Teaser
- Image: `rounded-[20px]`, `shadow-lg` (Plexify card shadow)
- Stronger text hierarchy with Plexify spacing
- CTA button: pill shape with hover lift

### 3f. Guarantees
- Badge icons: larger with coral tint
- Cards: `rounded-[15px]`, `shadow-xs` → `shadow-md` hover
- Bolder text

### 3g. Reviews
- Cards: `rounded-[20px]`, `shadow-xs` → `shadow-lg` hover
- Larger stars, `gap-1`
- Decorative coral quote mark
- Author divider line

### 3h. FAQ
- More padding, larger click targets
- `duration-500` transitions (Plexify default)
- `text-lg font-semibold` questions

### 3i. Final CTA
- Keep coral bg
- Larger headline with fluid sizing
- White pill button with navy text, hover lift

### 3j. Footer
- Keep navy bg
- Better spacing, `duration-500` link transitions
- Refined typography hierarchy

---

## Phase 4: Global Polish

### 4a. Scroll Animations
- CSS intersection-observer-based fade-in-up
- 20px translate, 400ms, ease-out
- Respect `prefers-reduced-motion`
- Inspired by Plexify's WOW/GSAP reveals but pure CSS

### 4b. Mobile CTA Bar
- Pill button matching new system
- Smoother backdrop blur

---

## Rules (from CLAUDE.md — non-negotiable)
- All Barley Bus colors preserved exactly (NO Plexify colors: no lime #C8F31D, no #072032)
- No dark sections except footer
- Mobile-first responsive approach
- Booking/GHL integrations untouched
- Voice stays warm, casual KC local
- No pricing hidden, no tour stops listed, no autoplay changes
- Every design token change reflected in BOTH `design-tokens.ts` AND `globals.css`

## Order of Execution
1. `globals.css` + `design-tokens.ts` (foundation)
2. `button.tsx` (shared component)
3. `header.tsx` (visible on every page)
4. `hero.tsx` (most impactful section)
5. Remaining homepage sections top-to-bottom
6. Footer
7. Scroll animations (final polish)

Each section: implement → show you → get approval → next section.
