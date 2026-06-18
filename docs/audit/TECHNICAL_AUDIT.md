# Technical Audit

Audit date: 2026-06-18 02:30 ET  
Scope: Phase 0 live verification for `https://flood.doctor` and selected city subdomains.  
Repo: `/Users/ghost/flood-doctor/flood-doctor-astro`

## Summary

PASS overall for Phase 0 baseline.

- Live required URLs return `200`.
- Apex, Ashburn, Vienna, request, reviews, and one service page have titles, descriptions, canonicals, OG URLs, and Astro generator metadata.
- JSON-LD parses cleanly on checked pages.
- No wrong canonical hosts, malformed hreflang tags, old `703` phone numbers, or old GoDaddy/parked-domain content found in the live sitemap crawl sample.
- Form worker endpoint is discoverable from the live JS bundle and CORS preflight passes for apex and checked city subdomains.
- Local build checks passed from a temp copy; the repo working tree was not used for build output.

Main technical risk: the checked service page JSON-LD `Service.url` points to `https://flood.doctor/services/water-damage-restoration`, while the live canonical URL is `https://flood.doctor/services/residential/restoration-services/water-damage-restoration/`.

## Live URL Checks

| URL | Status | Final URL | Content-Type | Result | Notes |
| --- | ---: | --- | --- | --- | --- |
| `https://flood.doctor/` | 200 | `https://flood.doctor/` | `text/html; charset=utf-8` | PASS | Apex home loads from Cloudflare. |
| `https://flood.doctor/robots.txt` | 200 | `https://flood.doctor/robots.txt` | `text/plain; charset=utf-8` | PASS | Allows `/`, disallows `/api/`, lists apex and city sitemap indexes. |
| `https://flood.doctor/sitemap-index.xml` | 200 | `https://flood.doctor/sitemap-index.xml` | `application/xml` | PASS | Points to `https://flood.doctor/sitemap-0.xml`. |
| `https://flood.doctor/llms.txt` | 200 | `https://flood.doctor/llms.txt` | `text/plain; charset=utf-8` | PASS | Present and contains Flood Doctor service/context summary. |
| `https://ashburn.flood.doctor/` | 200 | `https://ashburn.flood.doctor/` | `text/html; charset=utf-8` | PASS | City subdomain home loads. |
| `https://vienna.flood.doctor/` | 200 | `https://vienna.flood.doctor/` | `text/html; charset=utf-8` | PASS | City subdomain home loads. |

Additional sitemap host checks:

- `https://flood.doctor/sitemap-0.xml`: 65 URLs, host set is `flood.doctor` only.
- `https://ashburn.flood.doctor/sitemap-index.xml`: 200, points to `https://ashburn.flood.doctor/sitemap-0.xml`; sitemap host set is `ashburn.flood.doctor` only.
- `https://vienna.flood.doctor/sitemap-index.xml`: 200, points to `https://vienna.flood.doctor/sitemap-0.xml`; sitemap host set is `vienna.flood.doctor` only.

## Metadata Checks

| Page | Status | Title | Description | Canonical | OG URL | Generator | Hreflang |
| --- | ---: | --- | --- | --- | --- | --- | --- |
| Apex `https://flood.doctor/` | 200 | `Flood Doctor | 24/7 Water Damage Restoration in Northern Virginia` | Present | `https://flood.doctor/` | `https://flood.doctor/` | `Astro v5.18.0` | None present |
| Ashburn `https://ashburn.flood.doctor/` | 200 | `Flood Doctor Ashburn | 24/7 Water Damage Restoration` | Present | `https://ashburn.flood.doctor/` | `https://ashburn.flood.doctor/` | `Astro v5.18.0` | None present |
| Vienna `https://vienna.flood.doctor/` | 200 | `Flood Doctor Vienna | 24/7 Water Damage Restoration` | Present | `https://vienna.flood.doctor/` | `https://vienna.flood.doctor/` | `Astro v5.18.0` | None present |
| Request `https://flood.doctor/request/` | 200 | `Request a Free Estimate | Flood Doctor Northern Virginia` | Present | `https://flood.doctor/request/` | `https://flood.doctor/request/` | `Astro v5.18.0` | None present |
| Reviews `https://flood.doctor/reviews/` | 200 | `Customer Reviews | Flood Doctor Northern Virginia` | Present | `https://flood.doctor/reviews/` | `https://flood.doctor/reviews/` | `Astro v5.18.0` | None present |
| Service `https://flood.doctor/services/residential/restoration-services/water-damage-restoration/` | 200 | `Water Damage Restoration in Northern Virginia, VA | Flood Doctor` | Present | `https://flood.doctor/services/residential/restoration-services/water-damage-restoration/` | Same as canonical | `Astro v5.18.0` | None present |

Known metadata risk checks:

- AggregateRating: no JSON-LD `aggregateRating` object found on checked pages. Reviews page includes visible copy saying the site does not mark up reviews with AggregateRating schema.
- Old `703` phone: no `703-xxx-xxxx` or `(703) xxx-xxxx` pattern found across the 65 apex sitemap URLs plus Ashburn/Vienna home pages. Current phone detected as `(877) 497-0007` / `+18774970007`.
- Malformed hreflang: no hreflang tags are present on checked pages, so no malformed hreflang detected.
- Wrong canonical host: none found on checked pages or the 67-URL crawl sample.
- Old GoDaddy content: no `GoDaddy`, `go daddy`, `website builder`, or `parked domain` text found in the checked live pages/sitemaps.
- Missing Astro generator: not missing; checked HTML pages include `meta name="generator" content="Astro v5.18.0"`.
- Sitemap wrong host: not found for apex, Ashburn, or Vienna sitemap checks.

## Schema Checks

| Page | JSON-LD Blocks | Parse | Schema Types | Result | Notes |
| --- | ---: | --- | --- | --- | --- |
| Apex | 2 | PASS | `LocalBusiness`, `PostalAddress`, `City`, `OpeningHoursSpecification`, `WebSite`, `SearchAction`, `EntryPoint` | PASS | Schema URL host is `flood.doctor`. |
| Ashburn | 2 | PASS | `LocalBusiness`, `PostalAddress`, `City`, `OpeningHoursSpecification`, `WebSite`, `SearchAction`, `EntryPoint` | PASS | Schema URL host is `ashburn.flood.doctor`. |
| Vienna | 2 | PASS | `LocalBusiness`, `PostalAddress`, `City`, `OpeningHoursSpecification`, `WebSite`, `SearchAction`, `EntryPoint` | PASS | Schema URL host is `vienna.flood.doctor`. |
| Request | 1 | PASS | `Service`, `LocalBusiness`, `City` | PASS | No parse errors. |
| Reviews | 1 | PASS | `WebPage` | PASS | No `aggregateRating` JSON-LD object. |
| Service | 3 | PASS | `Service`, `LocalBusiness`, `PostalAddress`, `City`, `FAQPage`, `Question`, `Answer`, `BreadcrumbList`, `ListItem` | WARN | `Service.url` does not match canonical path. |

Service schema mismatch detail:

- Canonical: `https://flood.doctor/services/residential/restoration-services/water-damage-restoration/`
- JSON-LD `url`: `https://flood.doctor/services/water-damage-restoration`

## Build Checks

Builds were run from a temp copy at `/tmp/flood-doctor-buildcheck.ixHZPn` with repo `node_modules` symlinked. This avoided writing build output into the repo, preserving the requested ownership/write scope.

| Command | Result | Evidence |
| --- | --- | --- |
| `npm run build:main` | PASS | Astro static build completed; 71 pages built; `sitemap-index.xml` created in temp `dist`. |
| `npm run build:all` | PASS | `18/18 cities built in 49.6s`; output written to temp `dist-all`. |

## Form Endpoint Checks

Live request form bundle path checked:

- Request page island: `/_astro/RequestForm.Cb-5DPIX.js`
- Forms config bundle: `/_astro/forms.CpcCP-k9.js`
- Exported endpoint: `https://flood-doctor-forms.bluemedia-account.workers.dev`
- Request form POST target: `${FORM_WORKER_URL}/api/request`

CORS and method checks:

| Check | Result | Evidence |
| --- | --- | --- |
| `OPTIONS /api/request` with `Origin: https://flood.doctor` | PASS | HTTP `204`; `access-control-allow-origin: https://flood.doctor`; methods `POST, OPTIONS`; headers `Content-Type`. |
| `OPTIONS /api/request` with `Origin: https://ashburn.flood.doctor` | PASS | HTTP `204`; `access-control-allow-origin: https://ashburn.flood.doctor`. |
| `OPTIONS /api/request` with `Origin: https://vienna.flood.doctor` | PASS | HTTP `204`; `access-control-allow-origin: https://vienna.flood.doctor`. |
| `GET /api/request` with `Origin: https://flood.doctor` | PASS | HTTP `405` JSON response: `Method not allowed`, with CORS headers. |

No live POST submission was sent to avoid generating a test lead/email.

## Technical Blockers

None found that block Phase 0 continuation.

## Non-Blocking Risks

- Service page JSON-LD `Service.url` should be updated to match the canonical route hierarchy before scaling SEO QA across all service pages.
- Reviews page contains the literal string `AggregateRating` in explanatory visible text. This is not schema markup, but simple text scanners will flag it unless they parse JSON-LD specifically.
- No hreflang is present. That is acceptable for this local English-only rollout, but if future city/subdomain alternates are intended to be reciprocal alternates, hreflang rules should be designed deliberately rather than added ad hoc.
- Common shortcut URL `https://flood.doctor/services/residential/water-damage-restoration/` returned `404` during discovery. The valid live route is `https://flood.doctor/services/residential/restoration-services/water-damage-restoration/`. Consider redirects only if analytics/search data shows users or crawlers hitting shortcut paths.
