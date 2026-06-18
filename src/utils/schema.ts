/**
 * JSON-LD Schema Helpers
 * DRY structured data builders for SEO
 */

import { cityData, allCities } from '../data/cities'
import type { CityData } from '../data/cities'

const HEADQUARTERS = {
  streetAddress: '8466D Tyco Rd',
  addressLocality: 'Vienna',
  addressRegion: 'VA',
  postalCode: '22182',
  addressCountry: 'US',
}

/** Returns the canonical base URL for a city (main → flood.doctor, others → {slug}.flood.doctor) */
export function cityBaseUrl(slug: string = cityData.slug): string {
  return slug === 'main' ? 'https://flood.doctor' : `https://${slug}.flood.doctor`
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
    geo: {
      '@type': 'GeoCoordinates',
      latitude: city.coordinates.lat,
      longitude: city.coordinates.lng,
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: `${cityBaseUrl()}/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${cityBaseUrl()}/#business`,
      name: cityData.slug === 'main' ? 'Flood Doctor' : `Flood Doctor ${cityData.name}`,
      telephone: cityData.phone,
      address: {
        '@type': 'PostalAddress',
        addressLocality: cityData.name,
        addressRegion: cityData.stateAbbr,
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

export function getHreflangUrls(pathname: string): { href: string; hreflang: string }[] {
  const urls: { href: string; hreflang: string }[] = []

  for (const [slug] of Object.entries(allCities)) {
    if (slug === 'main') continue // main is added as x-default below
    urls.push({
      href: `https://${slug}.flood.doctor${pathname}`,
      hreflang: 'en',
    })
  }

  // x-default points to main domain (flood.doctor)
  urls.push({
    href: `https://flood.doctor${pathname}`,
    hreflang: 'x-default',
  })

  return urls
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
