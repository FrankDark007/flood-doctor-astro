/**
 * JSON-LD Schema Helpers
 * DRY structured data builders for SEO
 */

import { cityData, allCities } from '../data/cities'
import type { CityData } from '../data/cities'

// ── LocalBusiness (home page) ──────────────────────────────────────────

export function localBusinessSchema(city: CityData = cityData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `https://${city.slug}.flood.doctor/#business`,
    name: `Flood Doctor ${city.name}`,
    description: city.meta.description,
    telephone: city.phone,
    url: `https://${city.slug}.flood.doctor`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: city.address.split(',')[0]?.trim(),
      addressLocality: city.name,
      addressRegion: city.stateAbbr,
      postalCode: city.zipCode,
      addressCountry: 'US',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '103',
      bestRating: '5',
    },
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
    url: `https://${cityData.slug}.flood.doctor/services/${service.slug}`,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `https://${cityData.slug}.flood.doctor/#business`,
      name: `Flood Doctor ${cityData.name}`,
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
    url: `https://${cityData.slug}.flood.doctor/blog/${post.slug}`,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@type': 'Organization',
      name: `Flood Doctor ${cityData.name}`,
      url: `https://${cityData.slug}.flood.doctor`,
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
    urls.push({
      href: `https://${slug}.flood.doctor${pathname}`,
      hreflang: 'en',
    })
  }

  // x-default points to main domain
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
    name: `Flood Doctor ${cityData.name}`,
    url: `https://${cityData.slug}.flood.doctor`,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://${cityData.slug}.flood.doctor/blog?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
