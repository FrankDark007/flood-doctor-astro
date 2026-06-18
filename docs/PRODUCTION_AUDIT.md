# Production Audit - Phase 0

Audit date: 2026-06-18
Repo: `/Users/ghost/flood-doctor/flood-doctor-astro`
Decision: the site is technically live, but it is not production-ready.

## Phase 0 Status

Phase 0 baseline is complete enough to move into remediation planning, not launch approval.

The live Astro site and sampled city subdomains return `200`, core metadata/schema checks mostly pass, and local build checks passed in the technical audit. However, the visual, content, and conversion audits found launch-blocking issues: template/SaaS visuals, stock or broken imagery, unsupported trust claims, fabricated-looking testimonials, weak emergency CTAs, and a mobile navigation conflict.

Production status: **live but not production-ready**.

## Evidence Reviewed

- `docs/MASTER_PLAN.md` - phase structure, exit criteria, and Definition of Done.
- `docs/audit/VISUAL_AUDIT.md` - live screenshot review for apex, Ashburn, Vienna, and request pages.
- `docs/audit/CONTENT_AUDIT.md` - public copy, claims, reviews, service, and city content audit.
- `docs/audit/TECHNICAL_AUDIT.md` - live URL, metadata, schema, sitemap, build, and form endpoint checks.
- `docs/audit/CONVERSION_AUDIT.md` - CTA, mobile, request/contact form, and reassurance audit.

## Critical Launch Blockers

1. Generic SaaS/template visual system remains above the fold, including dashboard/product UI imagery unrelated to restoration work.
2. Hero imagery is stock/demo-like and includes a broken or placeholder-looking `Moisture testing` card.
3. Mobile homepage has severe horizontal clipping/overflow, and the fixed theme toggle conflicts with the mobile menu tap zone.
4. Sitewide claims such as `IICRC-certified`, `under 60 minutes`, `direct insurance billing`, insurance partnerships, and numeric stats are not yet substantiated.
5. Testimonial content appears fabricated or unsafe to ship, including `Sarah Chen`, `James Rodriguez`, and `Daniel Park / Midwest Financial Group` unless verified.
6. Emergency conversion path is inconsistent: CTA labels mix estimate, request, message, and call language instead of prioritizing `Call Now` and `Request Emergency Service`.
7. City pages largely swap city names into the same generic content, creating local credibility and doorway-page risk.

## Phase 1 Must Fix

- Remove all SaaS dashboard/product screenshots from homepage and city pages.
- Replace the generic logo/brand treatment with a Flood Doctor-specific restoration brand system.
- Replace stock/demo hero collage with owned, approved, or restoration-specific visuals.
- Remove or replace broken/placeholder visual cards.
- Fix mobile horizontal overflow and verify desktop/mobile screenshots after changes.
- Make phone and request CTAs visually prominent on mobile without relying on a broken hamburger path.

Gate to exit Phase 1: homepage and priority city screenshots must look like a credible emergency restoration company, not a template demo; no Tailwind placeholder/logo artifacts, unrelated dashboard screenshots, or broken visual cards remain.

## Phase 2 Must Fix

- Rewrite the homepage around concrete water-damage response, service area, what happens next, and safe expectations.
- Standardize primary homepage CTA language around service intent, not price-shopping: `Request Service`, `Request Emergency Service`, or `Call Now`.
- Remove fabricated testimonials and unsupported trust/stat blocks unless proof is documented.
- Replace hard promises with defensible language for response time, certifications, insurance support, and outcomes.
- Rewrite `Our Track Record` style sections into process-oriented reassurance: intake, safety/source control, inspection, extraction, drying, documentation, and adjuster coordination.
- Ensure the homepage has one H1 and all primary CTA links work on desktop and mobile.

Gate to exit Phase 2: homepage can be shown to a real customer without caveats, with no fake reviews, fake stats, unverified awards, or unsupported operational guarantees.

## Phase 3 Must Fix

- Fix the mobile header/menu conflict caused by the fixed theme toggle overlapping the hamburger area.
- Add or improve a persistent emergency mobile action path: phone plus request, visible without blocking form submission.
- Standardize CTAs sitewide to `Call Now` and `Request Emergency Service`; reserve estimate language for non-emergency contexts.
- Upgrade `/request` copy and form reassurance: privacy/consent, why address is needed, emergency-call fallback, and what happens next.
- Align success messages with the 24/7 emergency promise; avoid `within 30 minutes during business hours` as the only expectation for emergency leads.
- Verify live POST submission and Resend/email delivery path before declaring request flow production-ready.

Gate to exit Phase 3: a mobile emergency visitor can call or request service in under 10 seconds, and a real request submission is verified end-to-end.

## Phase 4/5 Must Fix

- Audit generated service and commercial service copy for thin/repetitive sections, unsafe guarantees, and unsupported specialty claims.
- Improve service pages with clear definitions, scope, process, when-to-call guidance, FAQs, related links, and breadcrumbs.
- Remove or soften absolute outcomes such as complete restoration, no hidden moisture pockets, pre-loss condition, and mold prevention certainty unless backed by policy.
- Correct the service JSON-LD URL mismatch where `Service.url` does not match the canonical route hierarchy.
- Standardize city NAP and service-area language around verified HQ/service-area facts; remove unsupported local office implications.
- Add truthful local variation for priority cities: Vienna, Ashburn, McLean, Arlington, Alexandria, and Fairfax.
- Remove city-localized generic proof claims such as `Trusted by Ashburn Homeowners` unless supported by local reviews or case evidence.
- Verify all service routes render, representative city pages pass screenshot review, city canonicals/sitemap hosts are correct, and `npm run build:all` passes.

Gate to exit Phase 4/5: service pages are useful and defensible, and city pages read like legitimate service-area pages, not city-name doorway variants.

## Technical Risks To Carry Forward

- Service page JSON-LD `Service.url` mismatch should be fixed before broader service SEO QA.
- Reviews page visible text contains `AggregateRating`; this is not JSON-LD schema, but simple scanners may flag it.
- No hreflang tags are present; acceptable for now, but do not add city alternates without a deliberate reciprocal strategy.
- Shortcut service URLs may return `404`; add redirects only if analytics/search evidence shows demand.
- Form preflight passed, but no live POST was submitted; full request/email delivery remains unverified.
- Build checks passed from a temp copy, not the dirty working tree.
- Visual screenshots came from live production/headless Chrome; some Chrome shutdowns timed out after screenshots were written.
- Proof inventory remains missing for licenses, insurance, IICRC certificates, Google Business Profile URL, review excerpts, project photos, service-area policy, and response-time policy.

## Definition Of Ready For Phase 1

Phase 1 may start when all of the following are true:

- This master audit exists at `docs/PRODUCTION_AUDIT.md`.
- The four Phase 0 audit reports are treated as the source of truth for initial remediation.
- The team accepts that the site is live but not production-ready.
- Phase 1 work is limited to brand/visual credibility and mobile visual blockers unless a blocker prevents visual verification.
- No Phase 1 change ships with fake proof, fabricated testimonials, unsupported badges, or unrelated SaaS/demo imagery.
- Desktop and mobile screenshot review is required before Phase 1 exit.

## Definition Of Done Reminder

The project is not done until the full `docs/MASTER_PLAN.md` Definition of Done is satisfied: apex and city subdomains are live on Astro, homepage has no stock/template/demo feel, fake reviews/stats/offices/unsupported claims are removed, core service pages are useful, request form works live, technical SEO files/schema are valid, mobile experience is reviewed, final screenshots are accepted, `npm run build:main` and `npm run build:all` pass, and final deployment passes.
