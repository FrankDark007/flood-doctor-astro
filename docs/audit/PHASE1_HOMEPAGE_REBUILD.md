# Phase 1/2 Homepage Rebuild

Date: 2026-06-18
Worker: Phase 1/2 Worker H

## Scope

Owned files only:

- `src/pages/index.astro`
- `docs/audit/PHASE1_HOMEPAGE_REBUILD.md`

## Changes

- Rebuilt the homepage around restoration-specific SVG/HTML/CSS sections and existing brand assets.
- Removed SaaS dashboard screenshots, unrelated stock-image collage cards, the broken `Moisture testing` card, and the fabricated `Sarah Chen` testimonial.
- Added hero, emergency process, services overview, insurance/documentation support, service area, FAQ/what-to-expect, and final CTA/form sections.
- Standardized homepage CTAs around `Request Emergency Service`, `Request Service`, and `Call Now` with the configured city phone number.
- Preserved city-aware wording through `cityData.name`, `cityData.slug`, `cityData.phone`, `cityData.state`, and `cityData.serviceArea` without adding fake city-specific proof.
- Added homepage-scoped responsive CSS to prevent 390px mobile horizontal overflow.

## Claim Safety

Avoided unsupported claims including IICRC certification, guaranteed arrival times, direct insurance billing, licensing, carrier trust, fake stats, fake review counts, and fabricated testimonials.

Insurance copy is limited to documentation support: photos, notes, moisture readings, scope details, and owner-facing summaries for claim conversations.

## Verification

- `npm run build:main` passed after final edits: 71 pages built in `1.95s`.
- `npm run build:all` passed after final edits: 18/18 city variants built in `51.0s`.
- Refreshed `dist` with `npm run build:main` for main-homepage visual checks.
- Local preview: `npm run preview -- --host 127.0.0.1 --port 4321`.
- Headless Chrome/CDP screenshots captured:
  - `/tmp/flood-home-main-mobile-390.png`
  - `/tmp/flood-home-main-desktop-1440.png`
- CDP check at 390px and 1440px confirmed:
  - document scroll width equals client width; overflow delta `0`.
  - homepage has one `h1`.
  - homepage scoped text/html does not include `Sarah Chen`, SaaS dashboard screenshot references, Unsplash image references, `IICRC-certified`, `under 60 minutes`, `direct insurance billing`, fake review-count language, or `trusted by insurance companies`.
  - homepage scoped images are local assets only.

## Remaining Risks

- Header, footer, request page, city pages, schema helpers, and form component copy were outside this worker's ownership scope.
- No real job-site photography or verified review proof was provided, so the homepage uses existing restoration-specific SVG/brand assets as a production-safe bridge.
