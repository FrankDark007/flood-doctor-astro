/**
 * JSON-LD Schema Helpers
 * DRY structured data builders for SEO
 */

import { cityData } from '../data/cities'
import type { CityData } from '../data/cities'
import { getServiceBySlug } from '../data/services/service-tree'

export const HEADQUARTERS = {
  streetAddress: '8466D Tyco Rd',
  addressLocality: 'Vienna',
  addressRegion: 'VA',
  postalCode: '22182',
  addressCountry: 'US',
}

/** Returns the canonical base URL for a city (main → flood.doctor, others → {slug}.flood.doctor) */
export function cityBaseUrl(slug: string = cityData.slug): string {
  if (slug === cityData.slug && import.meta.env.SITE_URL) {
    return import.meta.env.SITE_URL.replace(/\/$/, '')
  }
  return slug === 'main' ? 'https://flood.doctor' : `https://${slug}.flood.doctor`
}

function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//.test(pathOrUrl)) {
    return pathOrUrl
  }

  return `${cityBaseUrl()}${pathOrUrl.startsWith('/') ? '' : '/'}${pathOrUrl}`
}

function canonicalUrl(pathOrUrl: string): string {
  const url = absoluteUrl(pathOrUrl)
  return url.includes('?') || url.endsWith('/') ? url : `${url}/`
}

// ── LocalBusiness (home page) ──────────────────────────────────────────

export function localBusinessSchema(city: CityData = cityData) {
  const baseUrl = cityBaseUrl(city.slug)
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#business`,
    name: city.slug === 'main' ? 'Flood Doctor' : `Flood Doctor ${city.name}`,
    description: city.meta.description,
    telephone: city.phone,
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      ...HEADQUARTERS,
    },
    areaServed: city.serviceArea.map((area: string) => ({
      '@type': 'City',
      name: area,
    })),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday', 'Tuesday', 'Wednesday', 'Thursday',
        'Friday', 'Saturday', 'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    priceRange: '$$',
    image: 'https://flood.doctor/og-image.jpg',
    sameAs: [],
  }
}

// ── BreadcrumbList ──────────────────────────────────────────────────────

export interface BreadcrumbItem {
  name: string
  url: string
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// ── Service ─────────────────────────────────────────────────────────────

export function serviceSchema(service: {
  name: string
  description: string
  slug: string
  url?: string
  path?: string
}) {
  const serviceRoute = service.url ?? service.path ?? getServiceBySlug(service.slug)?.path

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    ...(serviceRoute ? { url: canonicalUrl(serviceRoute) } : {}),
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${cityBaseUrl()}/#business`,
      name: cityData.slug === 'main' ? 'Flood Doctor' : `Flood Doctor ${cityData.name}`,
      telephone: cityData.phone,
      address: {
        '@type': 'PostalAddress',
        ...HEADQUARTERS,
      },
    },
    areaServed: {
      '@type': 'City',
      name: cityData.name,
    },
  }
}

// ── BlogPosting ─────────────────────────────────────────────────────────

export function blogPostingSchema(post: {
  title: string
  description: string
  imageUrl?: string
  datetime: string
  slug: string
  author: { name: string; role: string }
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    image: post.imageUrl,
    datePublished: post.datetime,
    url: `${cityBaseUrl()}/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: cityData.slug === 'main' ? 'Flood Doctor' : `Flood Doctor ${cityData.name}`,
      url: cityBaseUrl(),
    },
  }
}

// ── FAQPage ─────────────────────────────────────────────────────────────

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ── Hreflang helpers ────────────────────────────────────────────────────

export function getHreflangUrls(_pathname: string): { href: string; hreflang: string }[] {
  // City subdomains are geo-targeted variants, not language alternates.
  return []
}

// ── WebSite schema (for sitelinks search) ───────────────────────────────

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: cityData.slug === 'main' ? 'Flood Doctor' : `Flood Doctor ${cityData.name}`,
    url: cityBaseUrl(),
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${cityBaseUrl()}/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
