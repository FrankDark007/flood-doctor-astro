# Flood Doctor Website Master Plan

**Goal:** Ship `https://flood.doctor` and all city subdomains as credible, production-ready restoration websites, not just technically deployed pages.

**Current Status:** Astro site is deployed to Cloudflare Pages. Apex and city domains are live, but the design/content still contain stock imagery, placeholder-style sections, and generic claims that are not production-ready.

**Operating Rule:** A phase is not complete until it passes its verification checklist. Deployment alone never means the website is finished.

---

## Phase 0 - Baseline Lock

**Objective:** Establish exactly what is live and what is unacceptable before changing more code.

**Work:**
- Capture screenshots of apex homepage and representative city pages.
- Audit homepage, service hub, request page, reviews page, and 3 city pages.
- Create a punch list of stock images, fake-looking content, weak CTAs, trust gaps, and technical regressions.

**Verification:**
- `npm run build:main` passes.
- `npm run build:all` passes.
- Live `https://flood.doctor`, `https://ashburn.flood.doctor`, and `https://vienna.flood.doctor` return `200`.
- Audit notes exist in `docs/PRODUCTION_AUDIT.md`.

**Exit Criteria:** We know what must be replaced, not just what technically renders.

---

## Phase 1 - Brand And Visual Credibility

**Objective:** Replace the generic SaaS/Tailwind look with a real emergency restoration brand experience.

**Work:**
- Replace stock hero image collage with custom restoration-focused graphics or owned/approved assets.
- Replace generic logo mark with a Flood Doctor-specific wordmark/mark system.
- Remove fake dashboard/product UI imagery.
- Establish visual direction: emergency-ready, clean, local, professional, blue-forward, high contrast.
- Define reusable visual components for hero, service cards, trust bars, process sections, and CTA blocks.

**Files Likely Touched:**
- `src/pages/index.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/components/Icon.astro`
- `src/styles/global.css`
- `public/graphics/*`

**Verification:**
- No Tailwind placeholder logo remains.
- No SaaS dashboard screenshots remain.
- No unrelated stock testimonial headshots remain.
- Mobile and desktop homepage screenshots reviewed.

**Exit Criteria:** The homepage looks like a credible restoration company, not a template demo.

---

## Phase 2 - Homepage Production Rewrite

**Objective:** Make the homepage conversion-ready and specific to Flood Doctor.

**Work:**
- Rewrite hero around urgent water damage response, scope, and service area.
- Add clear primary CTA: `Request Service`.
- Add strong secondary CTA: `Call (877) 497-0007`.
- Replace generic trust badges with substantiated, safe claims.
- Add sections for emergency process, services, insurance help, service area, FAQs, and request form entry.
- Remove fabricated testimonials unless real source is documented.

**Files Likely Touched:**
- `src/pages/index.astro`
- `src/data/services/*`
- `src/data/faqs.ts`
- `src/data/reviews.ts`

**Verification:**
- Homepage has one H1.
- CTA links work on desktop and mobile.
- No fake reviews, fake stats, or unverified awards.
- Lighthouse best-effort: SEO and Accessibility remain strong.

**Exit Criteria:** Homepage can be shown to a customer without caveats.

---

## Phase 3 - Conversion System

**Objective:** Make request/call actions obvious and trustworthy across the site.

**Work:**
- Improve `/request` page copy, layout, and form reassurance.
- Add emergency call strip or sticky mobile bar if missing/weak.
- Verify form Worker submission end-to-end.
- Confirm Resend email delivery path.
- Add fallback copy: emergency users should call immediately.

**Files Likely Touched:**
- `src/pages/request.astro`
- `src/components/islands/RequestForm.tsx`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `workers/form-handler/src/index.ts`

**Verification:**
- Request form submits successfully from live domain.
- Required fields validate.
- Worker returns success.
- Lead notification is received or logged.
- Mobile CTA bar is usable and not intrusive.

**Exit Criteria:** A real emergency visitor can call or request service in under 10 seconds.

---

## Phase 4 - Service Page Quality Pass

**Objective:** Turn generated service pages into useful SEO/conversion pages instead of repetitive content.

**Work:**
- Audit all residential and commercial service templates.
- Improve first-screen definition paragraphs.
- Ensure each service page has scope, process, when to call, what to expect, FAQs, and related links.
- Remove unsafe guarantees and unsupported certification claims.
- Improve Service schema and breadcrumbs if needed.

**Files Likely Touched:**
- `src/pages/services/residential/[...slug].astro`
- `src/pages/services/commercial/[...slug].astro`
- `src/data/services/*`
- `src/data/service-tree*`
- `src/utils/schema.ts`

**Verification:**
- All service routes render.
- No duplicate H1 issues.
- FAQ schema exists where FAQs exist.
- No broken internal links.
- `npm run build:all` passes.

**Exit Criteria:** Service pages are publishable and useful, not thin generated pages.

---

## Phase 5 - City Page System

**Objective:** Make each city subdomain locally credible without fake offices or spammy duplication.

**Work:**
- Audit city data for unsupported addresses, response guarantees, and local claims.
- Standardize NAP around verified HQ and service-area language.
- Add unique local context only where useful and defensible.
- Improve city homepage sections and city/service overlays.
- Prioritize top cities first: Vienna, Ashburn, McLean, Arlington, Alexandria, Fairfax.

**Files Likely Touched:**
- `src/data/cities/*`
- `src/data/city-content/*`
- `src/pages/index.astro`
- `src/utils/schema.ts`

**Verification:**
- `npm run build:all` passes.
- Representative city pages visually reviewed.
- No fake local office address displayed.
- Canonicals point to correct city domains.
- Sitemap URLs use correct hostnames.

**Exit Criteria:** City pages read like legitimate local service-area pages, not doorway pages.

---

## Phase 6 - Reviews, Trust, And Proof

**Objective:** Add trust without inventing reviews, stats, or credentials.

**Work:**
- Keep AggregateRating disabled unless data is current, sourced, and policy-safe.
- Replace fake testimonial content with verified Google review excerpts or neutral trust copy.
- Add review CTA to Google profile.
- Add licenses/certifications only if documentation exists.
- Add insurance/process proof that does not require unsupported numbers.

**Files Likely Touched:**
- `src/pages/reviews.astro`
- `src/data/reviews.ts`
- `src/pages/about.astro`
- `src/components/Footer.astro`

**Verification:**
- No invented review schema.
- No unsourced numeric claims.
- Reviews page clearly links to Google for current review data.

**Exit Criteria:** Trust content is defensible and production-safe.

---

## Phase 7 - Technical SEO And AEO Pass

**Objective:** Keep the technical SEO advantages while cleaning content quality.

**Work:**
- Verify titles, descriptions, canonicals, OpenGraph, Twitter cards.
- Verify sitemap indexes and robots files for apex and city domains.
- Verify JSON-LD: LocalBusiness, WebSite, Service, FAQ, Breadcrumb.
- Verify `llms.txt` and AEO files are live and accurate.
- Remove malformed alternate/hreflang usage.

**Files Likely Touched:**
- `astro.config.mjs`
- `src/layouts/BaseLayout.astro`
- `src/utils/schema.ts`
- `public/llms.txt`
- `public/robots.txt`

**Verification:**
- `npm run build:main` passes.
- `npm run build:all` passes.
- `https://flood.doctor/sitemap-index.xml` returns `200`.
- `https://flood.doctor/robots.txt` returns `200`.
- `https://flood.doctor/llms.txt` returns `200`.

**Exit Criteria:** Technical SEO is strong and matches the live content.

---

## Phase 8 - Performance And Accessibility

**Objective:** Keep the site fast and usable while improving visuals.

**Work:**
- Replace heavy remote stock images with optimized local assets where possible.
- Use responsive images and lazy loading.
- Review color contrast, focus states, labels, and keyboard navigation.
- Reduce unnecessary client JS and hydration.
- Check mobile layout on core pages.

**Files Likely Touched:**
- `src/pages/index.astro`
- `src/components/*`
- `src/styles/global.css`
- `public/graphics/*`

**Verification:**
- No major accessibility violations in sampled pages.
- Mobile layout reviewed.
- No avoidable layout shifts in hero.
- Build output remains static and lightweight.

**Exit Criteria:** Visual improvements do not damage speed or accessibility.

---

## Phase 9 - Full Deployment And Live QA

**Objective:** Deploy and verify the entire system live.

**Work:**
- Build all variants.
- Deploy all Cloudflare Pages projects.
- Confirm apex and city custom domains serve latest build.
- Smoke-test request form and key CTAs.
- Capture final screenshots.

**Commands:**
```bash
npm run build:main
npm run build:all
npm run deploy:all:skip-build
```

**Verification:**
- `18/18` builds pass.
- `18/18` deployments pass.
- Apex and priority city pages return `200`.
- Homepage screenshot is approved.
- Request flow works live.

**Exit Criteria:** Site is production-ready by visual, content, conversion, technical, and live QA standards.

---

## Definition Of Done

The project is not done until all are true:
- Apex `https://flood.doctor` is live on Astro.
- All city subdomains are live on Astro.
- Homepage has no stock/template/demo feel.
- No fake reviews, fake stats, fake offices, or unsupported claims remain.
- Core service pages are useful and internally linked.
- Request form works live.
- Technical SEO files and schema are live and valid.
- Mobile experience is reviewed.
- Final screenshots are captured and accepted.
- `npm run build:main` and `npm run build:all` pass.
- Final deployment passes.

