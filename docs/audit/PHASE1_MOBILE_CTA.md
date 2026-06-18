# Phase 1 Mobile CTA Check

Date: 2026-06-18

## Change

- Moved the theme toggle out of mobile view so it cannot overlap the hamburger tap zone.
- Added a persistent mobile bottom action bar with `Call Now` and `Request Service`.
- Added mobile body bottom padding so the fixed action bar does not cover reachable form submit buttons.
- Added `Request Emergency Service` inside the mobile menu drawer.

## Verification

- `npm run build:main` passed.
- Local preview: `npm run preview -- --host 127.0.0.1 --port 4321`.
- Chrome headless screenshots captured at `390x844`:
  - `/tmp/flood-mobile-home.png`
  - `/tmp/flood-mobile-request.png`
- Chrome DevTools Protocol check at `390x844` confirmed:
  - theme toggle computed `display: none` on mobile.
  - hamburger hit target is `44px` wide/tall at `left: 332`, `right: 376`.
  - `elementFromPoint()` on the hamburger center resolves to `mobile-navigation`.
  - tapping the hamburger opens the drawer and exposes `Request Emergency Service`.
  - sticky CTA text is `CALL NOW` and `REQUEST SERVICE`.
  - request submit button can be scrolled fully above the sticky CTA; mobile body bottom padding is `88px`.

## Remaining Risks

- Existing homepage/mobile horizontal overflow remains visible in screenshots; this worker did not own homepage content/layout.
- Existing request page CTA copy still says `Request a Free Estimate`; this worker did not own request page content.
