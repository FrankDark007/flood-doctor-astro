# Visual Audit - Flood Doctor Astro Site

## Summary

Audited live production pages on June 18, 2026:

- https://flood.doctor/
- https://ashburn.flood.doctor/
- https://vienna.flood.doctor/
- https://flood.doctor/request

The site is deployed, but it does not yet look production-ready for a local emergency restoration company. The dominant visual language reads as a dark SaaS/product landing page rather than a real water-damage contractor. The largest blockers are the generic logo/brand system, stock hero collage, broken/placeholder image card, unrelated SaaS dashboard screenshots, generic testimonial imagery, and mobile horizontal overflow.

Phase 1 should prioritize replacing template/demo visuals with restoration-company proof: real technician/job-site photography, truck/equipment imagery, local service-area trust cues, insurance/IICRC credentials, and a conventional emergency-response visual hierarchy.

## Evidence

Capture method:

- First attempted Playwright CLI screenshots. Local Playwright was unusable because `/opt/homebrew/bin/playwright` points to a missing Python interpreter: `/opt/homebrew/opt/python@3.13/bin/python3.13`.
- Used Google Chrome headless as fallback with fixed viewport screenshots.
- Chrome wrote usable screenshots but timed out waiting for browser shutdown on several captures; output image files were still produced and visually inspected.
- Rendered the provided reference PDF `/Users/ghost/Desktop/screencapture-flood-doctor-2026-06-18-02_14_24.pdf` with `pdftoppm` into PNG pages for baseline comparison.

Observed evidence:

- Homepage and city pages use the same dark tech/SaaS layout with only city-name token changes.
- Hero collage includes generic stock-like imagery and one visibly broken/blank image card showing `Moisture testing` alt text.
- Main service section uses a large unrelated dashboard/product UI screenshot with labels such as project lists, deployments, and activity feed. This is the most obvious demo/template artifact.
- Lower homepage reference shows a large stock testimonial headshot with a generic testimonial identity (`Sarah Chen`) that does not establish credible restoration proof.
- Request page is cleaner than homepage but still inherits the dark SaaS brand direction and has awkward service-area copy: `Northern Virginia & all of Northern Virginia`.
- Mobile homepage has severe horizontal overflow/clipping. The H1 and service heading are cut off, image cards extend off-screen, and trust badges overflow the viewport.

## Critical Visual Issues

1. Unrelated SaaS dashboard imagery is still present.

   The `Professional Water Damage Restoration` and `Trusted by ... Homeowners` sections show a product dashboard screenshot, not restoration work. This instantly reads as a template/demo artifact and damages credibility.

2. Hero imagery does not look like a real restoration company.

   The current collage uses generic stock-style photos: window cleaning, house keys, business handshake, and an abstract water/phone image. It does not show Flood Doctor trucks, extraction equipment, drying fans, containment, water-damaged rooms, technicians, or before/after cleanup.

3. A hero image card appears broken or placeholder-like.

   The card labeled `Moisture testing` displays alt text and an empty dark rectangle. This is a production-critical visual bug above the fold.

4. Mobile layout is not production-ready.

   At 390px width, the homepage clips horizontally: the H1 extends past the viewport, hero images are off-canvas, trust pills overflow, and the next section heading is cut off. This is a launch blocker because emergency-service users are likely mobile.

5. Brand identity feels generic and tech-oriented.

   The abstract wave icon plus small text lockup and purple CTA treatment feel like a startup/SaaS template. A restoration company needs a stronger local contractor mark, emergency-response contrast, visible phone hierarchy, and practical trust marks.

6. Dark theme works against emergency-service trust.

   The nearly all-dark site can feel sleek, but it does not communicate urgency, cleanliness, local presence, or property restoration confidence. It also makes many sections visually samey and reduces scannability.

7. City pages are visually duplicated.

   Ashburn and Vienna pages only swap city text while keeping identical hero photos, content structure, badges, SaaS screenshots, and proof sections. They do not feel locally specific.

8. Testimonial imagery appears stock/demo.

   The PDF reference shows a polished stock headshot and generic homeowner testimonial. Without real review source, project context, or local proof, this looks fabricated.

9. Spacing and section rhythm are weak.

   The homepage has very large dark gaps between sections and oversized hero height. The page feels unfinished and under-populated rather than intentionally premium.

10. Request page lacks visual reassurance.

   The form is functional, but it needs stronger emergency-response cues near the form: real phone prominence, license/IICRC/insurance badges, privacy reassurance, what happens next, and restoration-specific visuals.

## Recommended Phase 1 Replacements

Priority 0 - launch blockers:

- Remove all SaaS/product dashboard screenshots from homepage and city pages.
- Replace the broken `Moisture testing` image/card with a real image or remove the card entirely.
- Fix mobile horizontal overflow on homepage hero, trust pills, image collage, and section headings.
- Make the emergency phone CTA visible and usable on mobile.

Priority 1 - visual credibility:

- Replace hero collage with restoration-specific visuals: technician at job site, moisture meter close-up, air movers/dehumidifiers, extraction hose, containment, damaged flooring/drywall, branded truck or uniform if available.
- Replace stock testimonial headshot with either real review cards, Google review excerpts, or no-photo testimonials until real customer permission exists.
- Add visible trust assets: IICRC badge, licensed/insured badge, emergency 24/7 badge, insurance coordination badge, service-area map or local county/city list.
- Shift from dark SaaS styling toward a contractor/emergency services palette: high-contrast white/light sections, navy/blue for water, safety orange or red for emergency CTA, and cleaner form surfaces.

Priority 2 - page-specific polish:

- Give city pages local visual proof: city-specific headline support, nearby response area text, local landmarks/counties, and testimonials/reviews labeled by area where truthful.
- Replace the generic `Trusted by ... Homeowners` section with a restoration process/proof section: `Emergency Call`, `Extract Water`, `Dry & Monitor`, `Document for Insurance`, `Rebuild/Restore`.
- Tighten vertical spacing so the first two sections communicate value faster.
- Improve the request page by adding concise trust/support copy beside the form and fixing duplicated service-area language.

## Screenshot Inventory

- `docs/audit/screenshots/home-desktop-1440x4200.png` - live homepage, desktop viewport, https://flood.doctor/
- `docs/audit/screenshots/ashburn-desktop-1440x4200.png` - live Ashburn page, desktop viewport, https://ashburn.flood.doctor/
- `docs/audit/screenshots/vienna-desktop-1440x4200.png` - live Vienna page, desktop viewport, https://vienna.flood.doctor/
- `docs/audit/screenshots/request-desktop-1440x2600.png` - live request page, desktop viewport, https://flood.doctor/request
- `docs/audit/screenshots/home-mobile-390x2200.png` - live homepage, mobile-width viewport, https://flood.doctor/
- `docs/audit/screenshots/reference-pdf-1.png` - rendered page 1 from provided PDF reference
- `docs/audit/screenshots/reference-pdf-2.png` - rendered page 2 from provided PDF reference
- `docs/audit/screenshots/reference-pdf-3.png` - rendered page 3 from provided PDF reference

## Open Risks

- The audit is visual only; source code was not modified per Agent A scope.
- Screenshots were captured from live production using headless Chrome, not a local development build.
- Chrome headless timed out after writing some screenshots, so captures should be treated as usable visual evidence rather than a clean browser-test run.
- Real asset availability is unknown: if no branded trucks, technicians, equipment, certifications, or review permissions exist yet, Phase 1 should use restoration-specific licensed imagery only as a temporary bridge and clearly replace it later.
- City subdomain content may also have SEO/content duplication risks, but this audit only covers visual production-readiness.
