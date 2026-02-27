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
