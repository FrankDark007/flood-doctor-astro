# Session State — Flood Doctor Astro Migration

## Current Task
Migrating city-page-layouts-v2 (Vite + React SPA) → Astro static site for Cloudflare Pages

## Status: Phase 5b Next (Contact, Request, About, Reviews)

### Completed
- **Phase 1** ✅ Astro project scaffolded (commit b766c0d)
- **Phase 2** ✅ City data architecture — 13 cities, shared data copied (commit b905005)
- **Phase 3** ✅ Theme system — no-flash script, cookie, 3-state toggle (commit 519c3b6)
- **Phase 4** ✅ Layout system — BaseLayout, Header, Footer, Breadcrumbs, MobileMenu island (commit f4e2360)
- **Phase 5a** ✅ Home, ServiceDetail, Services pages migrated (commits ad2691c, b230915, 9e76328)

### Next Steps (Priority Order)
1. **Phase 5b**: Migrate Contact, Request, About, Reviews pages
   - Contact and Request need form React islands
   - About is mostly static (team section)
   - Reviews is static content
2. **Phase 5c**: Migrate Blog index/article, FAQ, Guides index/article, 404 pages
3. **Phase 6-7**: SEO infrastructure (sitemap, robots.txt, JSON-LD helpers) + build pipeline
4. **Phase 8**: Forms backend (Cloudflare Worker)

## Architecture Decisions
- **Dark/light consolidation**: Single components using Tailwind `dark:` variant with `[data-theme="dark"]` selector
- **Theme**: Cookie-based, 3-state (dark/light/system), inline script prevents flash
- **React islands**: Only for interactive components (MobileMenu, ThemeToggle, FAQAccordion, forms, search)
- **City data**: `import.meta.env.CITY` at build time, defaults to 'ashburn'
- **Static output**: No SSR adapter needed, pure SSG for Cloudflare Pages
- **Icons**: String-based identifiers mapped to SVG paths in Icon.astro (no React dependency)

## Key Files
- `astro.config.mjs` — Astro config with React + Tailwind v4 via @tailwindcss/vite
- `src/layouts/BaseLayout.astro` — Main layout with SEO meta, OG tags, structured data
- `src/data/cities/index.ts` — City data resolver (reads CITY env var)
- `src/styles/global.css` — Tailwind v4 with custom dark variant
- `src/components/Icon.astro` — Static SVG icon renderer (heroicon paths)
- `src/components/islands/FAQAccordion.tsx` — FAQ React island
- `src/pages/index.astro` — Home page (10 sections)
- `src/pages/services/index.astro` — Services listing (9 sections)
- `src/pages/services/[slug].astro` — Service detail (11 sections, dynamic routes)

## Source Project
- Location: `~/city-page-layouts-v2/`
- Pattern: Each page has `PageDark.tsx` + `PageLight.tsx` + `Page.tsx` (theme switcher)
- Port the Dark variants as primary, consolidate with `dark:` classes for light mode

## Build Status
- 3 pages building (/, /services, /services/water-damage-restoration)
- Clean build, no errors
- sitemap-index.xml auto-generated
