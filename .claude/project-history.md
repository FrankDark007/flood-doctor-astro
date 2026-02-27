# Project History — Flood Doctor Astro

## 2026-02-26 — Session 1: Foundation (Phases 1-4)

### Work Completed
- Scaffolded Astro 5 project with React, Tailwind v4, Sitemap integrations
- Created 13 city config files (ashburn through vienna) with contact info, service areas
- Built city data resolver that reads `CITY` env var at build time
- Copied all shared data from city-page-layouts-v2 (blog, FAQ, guides, reviews, services, navigation)
- Built no-flash theme system with cookie persistence and 3-state toggle (dark/light/system)
- Configured Tailwind dark variant to use `[data-theme="dark"]` instead of prefers-color-scheme
- Built BaseLayout with full SEO meta, OG tags, structured data slot
- Consolidated HeaderDark + HeaderLight → single Header.astro with `dark:` variants
- Consolidated FooterDark + FooterLight → single Footer.astro with `dark:` variants
- Built Breadcrumbs.astro with auto-generation from URL path
- Built MobileMenu.tsx React island with HeadlessUI Dialog

### Key Decisions
- **No Cloudflare adapter**: Pure static output (`output: 'static'`) — no SSR needed
- **Tailwind v4 via Vite plugin**: Using `@tailwindcss/vite` instead of `@astrojs/tailwind` (Tailwind 4 compatibility)
- **Cookie-based theme**: Not localStorage — cookies are readable in inline script before hydration
- **Dark as default**: `data-theme="dark"` on `<html>` — matches original v2 project default

### 4 Commits on main
1. b766c0d — Scaffold Astro project
2. b905005 — City data architecture
3. 519c3b6 — Theme system
4. f4e2360 — Layout, header, footer, breadcrumbs

## 2026-02-26 — Session 2: Phase 5a — Page Migration (Home, ServiceDetail, Services)

### Work Completed
- **Icon.astro**: Created static SVG icon component mapping string names to heroicon paths (replaces React component icons)
- **FAQAccordion.tsx**: React island using HeadlessUI Disclosure for interactive FAQ accordion with dark: variants
- **ServiceData types**: Changed `icon: React.ComponentType` → `icon: string` for Astro compatibility
- **ServiceDetail page** (`services/[slug].astro`): Full migration of 10 section components from v2
  - Hero, LogoCloud, Features (with Icon.astro), Content (sticky image), Timeline, Key Metrics (bg image), Workflow/CTA, Testimonial, Blog Preview, Related Services (check icons), FAQ (React island)
  - Uses `getStaticPaths` for dynamic route generation from service data
  - Includes JSON-LD structured data (Service + LocalBusiness)
- **Home page** (`index.astro`): Full migration from HomeDark.tsx
  - Hero (image tiles with Flood Doctor imagery), Logo Cloud, Features (screenshot), Stats (bg image), Services Bento Grid (4 service cards), Testimonial, Blog Preview, FAQ
  - Includes JSON-LD structured data (LocalBusiness)
  - All content customized for Flood Doctor (no lorem ipsum)
- **Services index** (`services/index.astro`): Full migration from ServicesDark.tsx
  - Hero (image tiles), Logo Cloud, Content (sticky image with icon list), Service Categories (6 cards), Stats + About (2-column), Bento Grid (5-step process), Testimonial, FAQ
  - Includes JSON-LD structured data (ItemList)

### Pattern Established: Dark/Light Consolidation
Every component uses a consistent pattern:
- Dark mode (primary): `dark:bg-gray-900 dark:text-white`
- Light mode: `bg-white text-gray-900`
- Accent: `dark:text-indigo-400 text-indigo-600`
- Muted: `dark:text-gray-400 text-gray-600`
- Borders: `dark:border-white/10 border-gray-200`
- Backgrounds: `dark:bg-gray-800 bg-gray-50` (for cards/alternating sections)

### Key Decisions
- **Inline SVGs for icons**: String-based icon names mapped to SVG paths in Icon.astro — no React dependency for static content
- **Content customized, not lorem ipsum**: Replaced placeholder text with real Flood Doctor water damage restoration content
- **FAQ as React island**: `client:visible` for deferred hydration — only loads when user scrolls to it
- **Alternating section backgrounds**: Sections alternate between `bg-white/dark:bg-gray-900` and `bg-gray-50/dark:bg-gray-900` for visual rhythm

### 3 Commits on main
1. ad2691c — ServiceDetail page + infrastructure (Icon, FAQAccordion, updated types)
2. b230915 — Home page
3. 9e76328 — Services index page

## 2026-02-26 — Session 3: Phase 5b-5c — Remaining Page Migrations

### Work Completed
- **Phase 5b**: Contact, Request, About, Reviews pages (commit bad3936)
  - ReviewsList.tsx, ContactForm.tsx, RequestForm.tsx React islands
  - reviews.ts data (103 real Google Places reviews, 4.9 stars)
- **Phase 5c**: Blog, FAQ, Guides, 404 pages (commit 7174781)
  - BlogBrowser.tsx React island (search, filter, pagination)
  - blog/index, blog/[slug], faq, guides/index, guides/[slug], 404 pages
  - Added `@tailwindcss/typography` for prose styling
  - All 13 page types now migrated, 22 pages building

## 2026-02-26 — Session 4: Phase 6-7 — SEO + Multi-City Build Pipeline (commit 6f41fc2)

### Work Completed
- `public/robots.txt` — All 13 city sitemaps + /api/ disallow
- `src/utils/schema.ts` — 7 JSON-LD helpers (LocalBusiness, WebSite, BlogPosting, Service, FAQPage, BreadcrumbList, hreflang)
- `scripts/build-all.mjs` — Sequential multi-city build → dist-all/{city}/
- Hreflang tags on every page (13 cities + x-default)
- Refactored all pages to use centralized schema helpers

### Bugs Fixed
- **Double-title bug**: BaseLayout was wrapping title with `| Flood Doctor {city}` but pages already included it. Fix: `pageTitle = title || cityData.meta.title` — pages own their full title.

### Key Decisions
- Title ownership: Pages own full `<title>` text; BaseLayout passes through
- Schema: Centralized helpers in utils/schema.ts (DRY)
- Multi-city build: Sequential not parallel (memory safety)
- Hreflang: All pages get all 13 city alternates

## 2026-02-26 — Session 5: Wrangler + Cloudflare Auth Setup

### Work Completed
- Updated Wrangler 4.67.0 → 4.69.0 (global npm install)
- Obtained Cloudflare Workers-scoped API token for BlueMedia Account
- Verified token works with `wrangler whoami` (BlueMedia Account, a6e32c7b5d77c4d75e82bba2d4238356)
- Saved token to ~/.claude/credentials.local as CLOUDFLARE_API_TOKEN
- Renamed old DNS-only token to CLOUDFLARE_API_TOKEN_DNS to avoid conflicts

### Key Decisions
- Workers token is the default CLOUDFLARE_API_TOKEN (wrangler auto-reads it)
- DNS-only token preserved as CLOUDFLARE_API_TOKEN_DNS for future use

## 2026-02-26 — Session 6: Phase 8 — Form Worker Deployed + E2E Verified

### Work Completed
- Created Cloudflare Worker project at `workers/form-handler/`
- Worker handles `POST /api/contact` and `POST /api/request` with CORS for all 13 city subdomains
- HTML email templates: contact messages + service requests with emergency 🚨 flagging
- Updated ContactForm.tsx and RequestForm.tsx with real `fetch()` calls, `city` prop, error state UI
- Updated contact.astro and request.astro to pass `city={cityData.slug}`
- Deployed Worker to `https://flood-doctor-forms.bluemedia-account.workers.dev`
- Set `RESEND_API_KEY` as Worker secret
- Fixed sender domain: `noreply@mail.flood.doctor` (verified in Resend, `flood.doctor` root not verified)
- E2E tested both endpoints — emails delivered to info@flood.doctor

### Bugs Fixed
- **DNS-only token couldn't deploy Workers**: Original CLOUDFLARE_API_TOKEN was scoped to DNS only. Created new Workers-scoped token.
- **Wrangler /memberships auth error**: Even with correct token, wrangler couldn't list memberships. Fix: Added `account_id` to wrangler.toml to skip membership lookup.
- **Resend 403 on flood.doctor**: Root domain not verified in Resend. Fix: Changed sender to `noreply@mail.flood.doctor` (verified subdomain).

### Key Decisions
- Worker URL: `flood-doctor-forms.bluemedia-account.workers.dev` (can add custom domain `forms.flood.doctor` later)
- Resend sender: `mail.flood.doctor` subdomain (root domain not verified)
- Account ID hardcoded in wrangler.toml to avoid auth issues
- Worker .env with Cloudflare API token is gitignored + chmod 600

### 3 Commits on main
1. ba32673 — Phase 8: Cloudflare Worker for form submissions via Resend
2. 5633597 — Update Worker URL to deployed endpoint and add account_id
3. 093f580 — Fix Resend sender to use verified mail.flood.doctor subdomain

## 2026-02-26 — Session 9+: Phase 9 — Site Restructure (commit 630e49c)

### Work Completed
- Created `src/data/services/service-tree.ts` — hierarchical ServiceNode tree (hub/category/service)
- Created 26 new service data files (27 total with existing water-damage-restoration):
  - Residential (14): water-damage-restoration, flood-cleanup, storm-damage-restoration, burst-pipe-cleanup, structural-drying, sewage-cleanup, mold-remediation, fire-smoke-cleanup, odor-removal, contents-cleaning-packout, basement-flooding, crawl-space-drying, hardwood-floor-drying, roof-leak-water-damage
  - Commercial (13): commercial-water-damage, commercial-flood-cleanup, large-loss-restoration, commercial-sewage-cleanup, commercial-mold-remediation, commercial-fire-smoke-cleanup, healthcare-facilities, hospitality-multifamily, municipal-education, industrial-facilities, moisture-mapping-consulting, indoor-air-quality, environmental-testing
- Rewrote `src/data/services/index.ts` to import all 27 services + re-export tree utilities
- Created nested service routes with catch-all (`[...slug].astro`) for residential and commercial
- Created hub pages: `/services/`, `/services/residential/`, `/services/commercial/`
- Created resources section: hub, FAQ, homeowner guides, insurance guide, emergency checklists
- Added 301 redirects: `/faq` → `/resources/faq`, `/guides` → `/resources/homeowner-guides`
- Updated navigation.ts with new menu structure
- Excluded redirect pages from sitemap via filter in astro.config.mjs
- Deleted old flat `services/[slug].astro` route
- 65 pages building in 1.56s, 45 files changed (+4978/-997)

### Key Decisions
- Catch-all routes handle both category pages (1 segment) and service detail pages (2 segments)
- `var` declarations in Astro frontmatter for conditional page type variables
- Redirects use `Astro.redirect()` which generates meta-refresh HTML in SSG mode
- Sitemap filter excludes redirect-only pages to avoid duplicate URLs

## 2026-02-26 — Session 10: Phase 10A — City-Specific Content Overlay (commit ab447d5)

### Work Completed
- Created `src/data/city-content/types.ts` — CityServiceContent interface (intro, process, challenges, equipment, pricing, service area, FAQs, blog links, CTA)
- Created `src/data/city-content/matrix.ts` — Content differentiation matrix for all 17 cities (13 ported + 4 new: centreville, chantilly, leesburg, sterling)
- Created `src/data/city-content/blog-mapping.ts` — Service→blog cross-link mapping for all 27 services
- Created `src/data/city-content/index.ts` — Barrel export with `getCityServiceContent()` using Vite `import.meta.glob`
- Created `scripts/port-city-content.ts` — Migration script that reads fd-google-redesign service files and transforms to CityServiceContent format
- Ported 104 city content files (13 cities × 8 services) from fd-google-redesign
- Updated `src/pages/services/residential/[...slug].astro` — City content overlay with 9 conditional UI blocks
- Updated `src/pages/services/commercial/[...slug].astro` — Same city content overlay logic
- 111 files changed, +18,295 lines

### New UI Blocks (render only when cityContent exists)
1. City-specific intro section (headline + paragraphs + local context)
2. Process steps timeline (numbered, with timeframe badges)
3. Local challenges cards (title + description + solution)
4. Equipment grid (name, brand, purpose)
5. Pricing section (intro + factors checklist + CTA)
6. Service area (neighborhood chips + response time)
7. Related blog articles (card links from blog mapping)
8. City-specific FAQs (replace generic when available)
9. Final CTA banner (indigo background, city-specific headline)

### Key Decisions
- **Layer system**: Generic ServiceData (always present) + CityServiceContent (overlay, nullable)
- **Graceful fallback**: `getCityServiceContent()` returns null → template renders generic sections
- **Eager glob loading**: `import.meta.glob('./*/*.ts', { eager: true })` for zero-cost runtime lookup
- **Port not rewrite**: 104 files faithfully transformed from fd-google-redesign, preserving all city-specific content
- **Blog cross-links**: Mapped by service slug, not city — same blog posts relevant regardless of city

### Coverage After Phase 10A
- 104/459 service pages have unique city content (23%)
- 355 still use generic ServiceData (77%) — addressed in Phases 10B + 10C
