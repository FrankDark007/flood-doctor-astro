# Session State — Flood Doctor Astro Migration

## Current Task
Migrating city-page-layouts-v2 (Vite + React SPA) → Astro static site for Cloudflare Pages

## Status: Phase 6-7 COMPLETE — Phase 8 Next (Forms Backend)

### Completed
- **Phase 1** ✅ Astro project scaffolded (commit b766c0d)
- **Phase 2** ✅ City data architecture — 13 cities, shared data copied (commit b905005)
- **Phase 3** ✅ Theme system — no-flash script, cookie, 3-state toggle (commit 519c3b6)
- **Phase 4** ✅ Layout system — BaseLayout, Header, Footer, Breadcrumbs, MobileMenu island (commit f4e2360)
- **Phase 5a** ✅ Home, ServiceDetail, Services pages migrated (commits ad2691c, b230915, 9e76328)
- **Phase 5b** ✅ Contact, Request, About, Reviews pages migrated (commit bad3936)
- **Phase 5c** ✅ Blog, FAQ, Guides, 404 pages migrated (commit 7174781)
- **Phase 6-7** ✅ SEO infrastructure + multi-city build pipeline (commit 6f41fc2)

### Next Steps (Priority Order)
1. **Phase 8**: Forms backend (Cloudflare Worker for ContactForm + RequestForm)
2. **Deployment**: Set up Cloudflare Pages with multi-city builds

## Build Status
- **22 pages** building successfully, 1.49s build time
- Clean build, no errors
- sitemap-index.xml auto-generated

## Phase 6-7 Deliverables
- `public/robots.txt` — All 13 city sitemaps, Disallow /api/
- `src/utils/schema.ts` — JSON-LD helpers: localBusinessSchema, webSiteSchema, blogPostingSchema, serviceSchema, faqPageSchema, breadcrumbSchema, getHreflangUrls
- `scripts/build-all.mjs` — Sequential build of 13 cities → dist-all/{city}/
- Hreflang tags on every page (13 cities + x-default)
- Fixed double-title bug (BaseLayout now uses title as-is)
- All pages refactored to use centralized schema helpers

## Architecture Decisions
- **Dark/light consolidation**: Tailwind `dark:` variant with `[data-theme="dark"]` selector
- **Theme**: Cookie-based, 3-state (dark/light/system), inline script prevents flash
- **React islands**: MobileMenu, ThemeToggle, FAQAccordion, ContactForm, RequestForm, ReviewsList, BlogBrowser
- **City data**: `import.meta.env.CITY` at build time, defaults to 'ashburn'
- **Static output**: Pure SSG for Cloudflare Pages
- **Typography**: @tailwindcss/typography for prose styling in blog/guide articles
- **Forms**: React islands with simulated success (Phase 8 connects to Cloudflare Worker)
- **SEO**: Centralized schema helpers, hreflang for multi-city, robots.txt with all sitemaps
- **Multi-city build**: `npm run build:all` → `scripts/build-all.mjs` → dist-all/{city}/

## Key Files
- `src/utils/schema.ts` — JSON-LD structured data builders
- `scripts/build-all.mjs` — Multi-city build pipeline
- `public/robots.txt` — Search engine directives
- `src/data/blog.ts` — 8 blog posts with full content
- `src/data/faqs.ts` — 12 FAQ items
- `src/data/guides.ts` — 3 in-depth guide articles
- `src/data/reviews.ts` — Real Google Places data (103 reviews, 4.9 stars)

## Source Project
- Location: `~/city-page-layouts-v2/`
- All 13 page types migrated: Home, Services, ServiceDetail, Contact, Request, About, Reviews, Blog, BlogArticle, FAQ, Guides, GuideArticle, 404
