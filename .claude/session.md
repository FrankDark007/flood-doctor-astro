# Session State — Flood Doctor Astro Migration

## Current Task
Migrating city-page-layouts-v2 (Vite + React SPA) → Astro static site for Cloudflare Pages

## Status: Phase 5 Next (Page Migration)

### Completed
- **Phase 1** ✅ Astro project scaffolded (commit b766c0d)
- **Phase 2** ✅ City data architecture — 13 cities, shared data copied (commit b905005)
- **Phase 3** ✅ Theme system — no-flash script, cookie, 3-state toggle (commit 519c3b6)
- **Phase 4** ✅ Layout system — BaseLayout, Header, Footer, Breadcrumbs, MobileMenu island (commit f4e2360)

### Next Steps (Priority Order)
1. **Phase 5a**: Migrate Home, ServiceDetail, Services pages (highest SEO value)
2. **Phase 5b**: Migrate Contact, Request, About, Reviews pages
3. **Phase 5c**: Migrate Blog, FAQ, Guides, 404 pages
4. **Phase 6-7**: SEO infrastructure (sitemap, robots.txt, JSON-LD helpers) + build pipeline
5. **Phase 8**: Forms backend (Cloudflare Worker)

## Architecture Decisions
- **Dark/light consolidation**: Single components using Tailwind `dark:` variant with `[data-theme="dark"]` selector (NOT prefers-color-scheme)
- **Theme**: Cookie-based, 3-state (dark/light/system), inline script prevents flash
- **React islands**: Only for interactive components (MobileMenu, ThemeToggle, FAQAccordion, forms, search)
- **City data**: `import.meta.env.CITY` at build time, defaults to 'ashburn'
- **Static output**: No SSR adapter needed, pure SSG for Cloudflare Pages

## Key Files
- `astro.config.mjs` — Astro config with React + Tailwind v4 via @tailwindcss/vite
- `src/layouts/BaseLayout.astro` — Main layout with SEO meta, OG tags, structured data
- `src/data/cities/index.ts` — City data resolver (reads CITY env var)
- `src/styles/global.css` — Tailwind v4 with custom dark variant
- `src/components/ThemeScript.astro` — No-flash inline script
- `src/components/islands/ThemeToggle.tsx` — Theme toggle React island

## Source Project
- Location: `~/city-page-layouts-v2/`
- Pattern: Each page has `PageDark.tsx` + `PageLight.tsx` + `Page.tsx` (theme switcher)
- Port the Dark variants as primary, consolidate with `dark:` classes for light mode
