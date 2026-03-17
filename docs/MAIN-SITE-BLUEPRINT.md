# Target Architecture Blueprint for Google AI Studio

## Context

Frank is redesigning the main flood.doctor homepage using Google AI Studio as a UI/UX design tool. The goal is to migrate the main site FROM the current React SPA on GoDaddy TO the same Astro + Cloudflare Pages architecture used by the city pages. This blueprint gives the AI designer everything it needs to produce deployment-ready Astro layouts.

---

## Current State → Target State

| Aspect | Current (fd-google-redesign) | Target (flood-doctor-astro) |
|--------|-----------------------------|-----------------------------|
| Framework | Vite + React 19 SPA | Astro 5.17 SSG + React islands |
| Hosting | GoDaddy (SSH/rsync) | Cloudflare Pages |
| Routing | React Router (client-side) | File-based (src/pages/) |
| Styling | Tailwind CSS v3 | Tailwind CSS v4 |
| Rendering | Client-side hydration | Build-time static HTML |

---

## 1. Franchise Data Injection

**Method: TypeScript data files + build-time environment variable**

Each city has a TypeScript config file at `src/data/cities/{city}.ts` implementing the `CityData` interface:

```typescript
// src/data/cities/types.ts
interface CityData {
  slug: string           // 'mclean'
  name: string           // 'McLean'
  state: string          // 'Virginia'
  stateAbbr: string      // 'VA'
  fullName: string       // 'McLean, Virginia'
  phone: string          // '(703) 285-1108'
  address: string        // local office address
  zipCode: string
  serviceArea: string[]  // neighborhoods served
  googleMapsEmbed: string
  coordinates: { lat: number; lng: number }
  meta: { title: string; description: string }
}
```

**How it flows:**
1. Build command sets env var: `CITY=mclean SITE_URL=https://mclean.flood.doctor astro build`
2. `src/data/cities/index.ts` reads `import.meta.env.CITY`, loads the matching city file, exports `cityData`
3. Every page/component imports `cityData` and uses it as props or inline:

```astro
---
import { cityData } from '../data/cities'
---
<h1>{cityData.name}'s Trusted Water Damage Experts</h1>
<a href={`tel:${cityData.phone}`}>{cityData.phone}</a>
```

**For the main flood.doctor site:** Use `CITY=main SITE_URL=https://flood.doctor`. The `main.ts` city config contains the primary business phone `(877) 497-0007`, headquarters address at 8466D Tyco Rd, Vienna, VA 22182, and covers all 17 Northern Virginia service areas.

**City-specific content layering:**
- Base service data lives in `src/data/services/`
- City overlays in `src/data/city-content/{city}/{service-slug}.ts` provide local narratives, process steps, equipment lists, pricing
- Service page templates conditionally render city content when overlays exist

---

## 2. Component Architecture: Astro + React Islands

**Hybrid approach — static .astro files with selective React islands for interactivity.**

### Static Components (.astro) — no JavaScript shipped:
- `Header.astro`, `Footer.astro`, `Breadcrumbs.astro`
- Section components: `LogoCloud.astro`, `TestimonialSection.astro`, `CTABand.astro`, `StatsSection.astro`, `BlogPreview.astro`

### Interactive Islands (.tsx) — hydrated React components:
| Component | Directive | Why |
|-----------|-----------|-----|
| `MobileMenu.tsx` | `client:load` | Must be interactive immediately |
| `ContactForm.tsx` | `client:load` | Form submission requires JS |
| `RequestForm.tsx` | `client:load` | Form submission requires JS |
| `ThemeToggle.tsx` | `client:load` | Theme switching on page load |
| `BlogBrowser.tsx` | `client:load` | Interactive filtering |
| `FAQAccordion.tsx` | `client:visible` | Lazy — only hydrates when scrolled into view |
| `ReviewsList.tsx` | `client:visible` | Lazy — carousel/list interaction |

### How to use an island in a page:
```astro
---
import ContactForm from '../components/islands/ContactForm.tsx'
import { cityData } from '../data/cities'
---
<ContactForm city={cityData.slug} client:load />
```

**Rule of thumb:** If it needs user interaction (clicks, form input, state), make it a React island. Everything else stays as .astro for zero JS overhead.

**Libraries available for islands:**
- Headless UI (`@headlessui/react ^2.2.9`) — accessible dialogs, menus, disclosure panels
- Heroicons (`@heroicons/react ^2.2.0`) — SVG icon set

---

## 3. Layout Wrapper

**Single layout:** `src/layouts/BaseLayout.astro`

### Props:
```typescript
interface Props {
  title?: string              // Page title (defaults to cityData.meta.title)
  description?: string        // Meta description (defaults to cityData.meta.description)
  structuredData?: object | object[]  // JSON-LD schema
  ogImage?: string            // Open Graph image URL
  noIndex?: boolean           // Block indexing (default false)
}
```

### How a page uses BaseLayout:
```astro
---
import BaseLayout from '../layouts/BaseLayout.astro'
import { cityData } from '../data/cities'
import { localBusinessSchema } from '../utils/schema'
---

<BaseLayout
  title={`Water Damage Restoration | Flood Doctor ${cityData.name}`}
  description={`24/7 emergency water damage restoration in ${cityData.name}, Virginia.`}
  structuredData={localBusinessSchema()}
>
  <!-- Page content goes here via <slot /> -->
  <section class="py-24 sm:py-32">
    <h1>Your content</h1>
  </section>
</BaseLayout>
```

### What BaseLayout renders:
```
<html lang="en" data-theme="dark">
  <head>
    <!-- Meta, canonical, hreflang, OG tags, structured data, favicon -->
  </head>
  <body class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col">
    <ThemeToggle client:load />
    <Header />
    <Breadcrumbs />
    <main class="flex-1">
      <slot />   ← YOUR PAGE CONTENT
    </main>
    <Footer />
  </body>
</html>
```

**Hreflang:** Automatically generates `<link rel="alternate">` tags for all city variants + x-default (flood.doctor) via `getHreflangUrls()` utility.

---

## 4. Styling & UI Libraries

| Tool | Version | Notes |
|------|---------|-------|
| **Tailwind CSS** | v4.2.1 | Via Vite plugin (`@tailwindcss/vite`), NOT PostCSS |
| **@tailwindcss/typography** | v0.5.19 | For prose/rich-text (blog, guides) |
| **Headless UI** | v2.2.9 | Accessible interactive primitives |
| **Heroicons** | v2.2.0 | SVG icons |
| **React** | v19.2.4 | For island components only |

### Key differences from the current site:
- **Tailwind v4** (no `tailwind.config.js` needed — uses CSS-first config)
- Config lives in `src/styles/global.css`:

```css
@import "tailwindcss";
@plugin "@tailwindcss/typography";

@custom-variant dark (&:where([data-theme="dark"], [data-theme="dark"] *));
```

### Dark mode:
- Manual toggle via `data-theme="dark"` on `<html>` (not `prefers-color-scheme`)
- Use Tailwind `dark:` prefix for dark variants

### No component library — all custom:
- No daisyUI, shadcn, or similar
- Components built with Tailwind utilities + Headless UI for accessibility

---

## 5. Cloudflare Deployment

### Rendering: Static Site Generation (SSG)
```javascript
// astro.config.mjs
export default defineConfig({
  output: 'static',  // Full pre-render, no server needed
  site: process.env.SITE_URL,
  integrations: [react(), sitemap()],
  vite: {
    plugins: [tailwindcss()]
  }
})
```

**No Cloudflare SSR adapter.** Every page is pre-rendered to static HTML at build time.

### Build pipeline:
- `scripts/build-all.mjs` — loops through 18 entries (main + 17 cities)
- For main: `CITY=main SITE_URL=https://flood.doctor astro build`
- For cities: `CITY={city} SITE_URL=https://{city}.flood.doctor astro build`
- `scripts/deploy-all.mjs` — deploys each to Cloudflare Pages (`fd-main`, `fd-{city}`)

### Contact Form handling:
- **External Cloudflare Worker** — forms do NOT use Astro API routes
- Forms POST to: `https://flood-doctor-forms.bluemedia-account.workers.dev/api/contact`
- Payload: `{ first-name, last-name, email, phone-number, message, city }`
- Response: `{ success: boolean, error?: string }`

---

## 6. Main Site vs City Sites

The main site (`CITY=main`) differs from city sites in a few ways:

| Aspect | Main Site | City Sites |
|--------|-----------|------------|
| Brand | "Flood Doctor" | "Flood Doctor {City}" |
| Phone | (877) 497-0007 (toll-free) | Local number per city |
| Service Area | All 17 Northern Virginia cities | Specific neighborhoods |
| Domain | flood.doctor | {city}.flood.doctor |
| Hreflang | x-default | en |

The `cityBaseUrl()` helper in `src/utils/schema.ts` handles URL generation correctly for both cases.

---

## Summary for the Designer

When building new page layouts for flood.doctor:

1. **Use `cityData` props** for all dynamic business info (phone, address, city name) — never hardcode
2. **Wrap every page** in `<BaseLayout title="..." description="...">` with slot content
3. **Static sections** → `.astro` components (zero JS)
4. **Interactive elements** (forms, menus, accordions) → `.tsx` React islands with `client:load` or `client:visible`
5. **Style with Tailwind v4** utility classes + `dark:` variants; use Headless UI for accessibility
6. **Output is static HTML** — no server runtime; forms handled by external Worker
7. **The main site is just another city variant** (`CITY=main`) in the same build pipeline

### Key Business Info (from main.ts)
- **Phone:** (877) 497-0007
- **Address:** 8466D Tyco Rd, Vienna, VA 22182
- **Coverage:** Fairfax, Arlington, Alexandria, McLean, Vienna, Tysons, Reston, Herndon, Ashburn, Springfield, Falls Church, Great Falls, Centreville, Chantilly, Leesburg, Lorton, Sterling
- **Credentials:** VA DPOR #2705155505 (Class-A), IICRC Certified
- **Response:** 60 minutes, 24/7/365
