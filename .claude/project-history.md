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
