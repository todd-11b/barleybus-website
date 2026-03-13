# Barley Bus Website — Build Context

## What is Barley Bus?
Tour and transportation company in Kansas City. Brewery, winery, food, sightseeing tours + party bus rentals + private events.

## Tech Stack
- Next.js (App Router) on Vercel
- Tailwind CSS v4 with @theme inline tokens
- shadcn/ui component library (Radix primitives + CVA)
- GHL handles CRM, forms, lead capture, tracking
- All booking links centralized in config/booking.ts — never hardcode
- The homepage availability bar submits to GHL as a lead. Tim checks CaptainBook for availability manually. When the GHL booking engine goes live, automation takes over — no website changes needed.

## Design Philosophy
- Availability-first: hero has an availability bar (tour type, date, group size) — not just a button
- Conversion-first: every section moves toward the availability bar or "Get a Quote"
- Mobile-first: most users are on phones
- Light/white theme: pure white + light gray backgrounds. No dark sections except footer.
- Restrained: fewer sections, large photography, generous whitespace. Think Abrams Fence, not typical tour site.
- Fast: LCP under 2.5s, no heavy iframes on first paint

## Color Palette (Locked)
- CTA / accent: Coral #FF6B52 (hover: #E85A42)
- Navy: #1B2A4A (logo, nav, footer bg, secondary elements)
- Headlines: #111111
- Body text: #777777
- Backgrounds: #FFFFFF (primary), #F5F5F3 (surface/alternating)
- Borders: #EBEBEB
- Stars: #FBBF24 (gold, ratings only)
- Footer: Navy bg #1B2A4A, light text #C8D0DE

## Design System
- All colors, fonts, spacing defined in config/design-tokens.ts
- Tailwind tokens defined in globals.css @theme inline block
- These tokens export to GHL funnel custom CSS when booking engine goes live
- Any design change must update the tokens file
- Booking subdomain (future): book.barleybus.com or reserve.barleybus.com — TBD

## Voice
Friendly KC local who loves what they do. Warm, confident, casual but not sloppy. Never pushy. Never corporate. Think: the friend who always knows the best spots.

## Key Facts
- Phone: 816-323-3889
- Public tours: $50-$125/person
- Private tours: from $60/person (10+ guests)
- Bus rentals: from $150/hr
- $200 deposit for private tours
- Tours run Fri-Sun
- 21+ for drink tours
- Gratuity included on private tours, NOT on public
- Meeting points: Made in KC (food/drink tours), Enzo (sightseeing)

## Never Do
- Don't list exact tour stops (they change weekly)
- Don't autoplay video
- Don't hide pricing
- Don't use all caps or exclamation-heavy copy
- Don't use dark backgrounds for page sections (only footer)
- Don't clutter — if a section doesn't move toward a booking, cut it
