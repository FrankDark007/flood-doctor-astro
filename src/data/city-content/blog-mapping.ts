/**
 * Maps service slugs to related blog post slugs for cross-linking.
 * Blog slugs must match entries in src/data/blog.ts
 */
export const serviceBlogMapping: Record<string, string[]> = {
  // Residential - Restoration
  'water-damage-restoration': [
    'first-24-hours-after-water-damage',
    'water-damage-insurance-claim-guide',
    'water-damage-restoration-process',
  ],
  'flood-cleanup': [
    'first-24-hours-after-water-damage',
    'emergency-flood-response-ashburn',
    'water-damage-insurance-claim-guide',
  ],
  'storm-damage-restoration': [
    'first-24-hours-after-water-damage',
    'water-damage-insurance-claim-guide',
    'prevent-water-damage-winter',
  ],
  'burst-pipe-cleanup': [
    'first-24-hours-after-water-damage',
    'prevent-water-damage-winter',
    'water-damage-restoration-process',
  ],
  'structural-drying': [
    'water-damage-restoration-process',
    'signs-of-hidden-mold',
  ],

  // Residential - Cleanup
  'sewage-cleanup': [
    'first-24-hours-after-water-damage',
    'water-damage-insurance-claim-guide',
  ],
  'mold-remediation': [
    'signs-of-hidden-mold',
    'black-mold-vs-regular-mold',
  ],
  'fire-smoke-cleanup': [
    'water-damage-insurance-claim-guide',
    'first-24-hours-after-water-damage',
  ],
  'odor-removal': [
    'signs-of-hidden-mold',
    'black-mold-vs-regular-mold',
  ],
  'contents-cleaning-packout': [
    'water-damage-insurance-claim-guide',
    'first-24-hours-after-water-damage',
  ],

  // Residential - Specialty
  'basement-flooding': [
    'sump-pump-maintenance-guide',
    'first-24-hours-after-water-damage',
    'prevent-water-damage-winter',
  ],
  'crawl-space-drying': [
    'signs-of-hidden-mold',
    'water-damage-restoration-process',
  ],
  'hardwood-floor-drying': [
    'first-24-hours-after-water-damage',
    'water-damage-restoration-process',
  ],
  'roof-leak-water-damage': [
    'prevent-water-damage-winter',
    'first-24-hours-after-water-damage',
    'water-damage-insurance-claim-guide',
  ],

  // Commercial - Restoration
  'commercial-water-damage': [
    'water-damage-restoration-process',
    'water-damage-insurance-claim-guide',
  ],
  'commercial-flood-cleanup': [
    'emergency-flood-response-ashburn',
    'first-24-hours-after-water-damage',
  ],
  'large-loss-restoration': [
    'water-damage-insurance-claim-guide',
    'water-damage-restoration-process',
  ],

  // Commercial - Cleanup
  'commercial-sewage-cleanup': [
    'water-damage-insurance-claim-guide',
  ],
  'commercial-mold-remediation': [
    'signs-of-hidden-mold',
    'black-mold-vs-regular-mold',
  ],
  'commercial-fire-smoke-cleanup': [
    'water-damage-insurance-claim-guide',
  ],

  // Commercial - Specialty
  'healthcare-facilities': [
    'water-damage-insurance-claim-guide',
  ],
  'hospitality-multifamily': [
    'water-damage-restoration-process',
    'water-damage-insurance-claim-guide',
  ],
  'municipal-education': [
    'water-damage-insurance-claim-guide',
  ],
  'industrial-facilities': [
    'water-damage-insurance-claim-guide',
  ],

  // Commercial - Technical
  'moisture-mapping-consulting': [
    'water-damage-restoration-process',
    'signs-of-hidden-mold',
  ],
  'indoor-air-quality': [
    'signs-of-hidden-mold',
    'black-mold-vs-regular-mold',
  ],
  'environmental-testing': [
    'signs-of-hidden-mold',
    'black-mold-vs-regular-mold',
  ],
}

export function getRelatedBlogSlugs(serviceSlug: string): string[] {
  return serviceBlogMapping[serviceSlug] || []
}
