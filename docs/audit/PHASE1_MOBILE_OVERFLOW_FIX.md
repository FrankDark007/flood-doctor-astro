# Phase 1 Mobile Overflow Fix

Date: 2026-06-18
Worker: Phase 1 Worker K

## Scope

Owned files only:

- `src/pages/index.astro`
- `src/components/StickyMobileCTA.astro`
- `docs/audit/PHASE1_MOBILE_OVERFLOW_FIX.md`

## Changes

- Tightened the homepage mobile hero width, heading scale, line height, and wrapping rules so the H1 stays inside a 390px viewport.
- Constrained the decorative hero background on small screens so it no longer creates a wider internal scroll area.
- Made homepage CTA buttons mobile-safe with `max-width`, `min-width: 0`, and normal wrapping.
- Shortened the sticky mobile request label to `Request` with an accessible label of `Request emergency service`.
- Reduced sticky CTA column gap, text size, and letter spacing so both sticky actions fit at 390px.

## Verification

- `npm run build:main` passed: 71 pages built in `1.88s`.
- Rendered blocker scan against `dist/index.html` returned no matches:
  `rg -n -i "Sarah Chen|James Rodriguez|Daniel Park|Midwest Financial|Free Estimate|Direct Insurance Billing|45\\+|24 certified|15\\+ years|600\\+|2M\\+|92%|under 60|60 minutes|IICRC-certified|Moisture testing|deployments|activity feed|unsplash|tailwindcss.com/plus-assets" dist/index.html`
- Local preview was available at `http://127.0.0.1:4322/` because port `4321` was already in use.
- Headless Chrome/CDP 390px screenshot captured:
  `/tmp/flood-phase1-worker-k-home-mobile-390.png`
- 390px CDP check confirmed:
  - document scroll width equals client width: `390 / 390`
  - homepage has one `h1`
  - hero H1 rect stays inside viewport: left `10`, right `297.46875`
  - hero CTA area stays inside viewport: left `10`, right `380`
  - sticky mobile CTA stays inside viewport: left `0`, right `390`
  - sticky labels render as `Call Now` and `Request`
