# Phase 1 Header/Footer Brand + CTA Cleanup

Date: 2026-06-18
Worker: Phase 1 Worker J

## Scope

Owned files changed only:

- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/islands/MobileMenu.tsx`
- `src/layouts/BaseLayout.astro`
- `docs/audit/PHASE1_HEADER_FOOTER.md`

## Changes

- Replaced the Tailwind placeholder logo in the shared header and footer with `BrandLogo`.
- Removed the Tailwind demo logo URL from the mobile menu and replaced it with the local Flood Doctor mark plus text lockup.
- Standardized shared CTAs away from estimate language:
  - desktop header keeps the visible phone number link and uses `Request Service` as the primary button.
  - mobile menu exposes `Call Now` and `Request Emergency Service`.
  - footer CTA uses `Call Now` and `Request Service`.
- Render-time footer request navigation labels now display `Request Service` for `/request` without changing shared navigation data outside this worker scope.
- Reworked footer trust/process copy to safe wording around water damage cleanup, drying plans, documentation support, and coordination.
- Removed the Unsplash preconnect from `BaseLayout`; the rebuilt homepage no longer needs it, and remaining older pages can still load remote images without a global resource hint.

## Claim Safety

Footer copy avoids unsupported claims including guaranteed satisfaction, direct billing, IICRC certification, licensed/insured status, guaranteed response times, and carrier partnerships.

## Accessibility Notes

- Header/footer logo links use `BrandLogo` accessible names.
- Mobile menu logo link has an explicit accessible name.
- Navigation labels remain visible, and updated interactive controls include focus-visible/focus ring states.

## Verification

- `npm run build:main` passed: 71 pages built in `1.98s`.
- Owned-file blocker scan passed with no matches:
  `rg -n -i "tailwindcss.com/plus-assets|Free Estimate|Request Free Estimate|guaranteed satisfaction|Direct Insurance Billing|IICRC|Licensed & Insured" src/components/Header.astro src/components/Footer.astro src/components/islands/MobileMenu.tsx src/layouts/BaseLayout.astro`
- Rendered main homepage scan also returned no matches for the same blocker terms in `dist/index.html`.

## Remaining Risks

- Other pages outside this worker scope may still contain estimate-language CTAs, Unsplash images, and unverified copy. This worker only changed shared header/footer/mobile-menu/layout files.
