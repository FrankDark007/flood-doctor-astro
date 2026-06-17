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
    'water-damage-restoration-cost-northern-virginia',
    'does-homeowners-insurance-cover-water-damage-virginia',
    'get-insurance-to-pay-water-damage-restoration',
  ],
  'flood-cleanup': [
    'first-24-hours-after-water-damage',
    'emergency-flood-response-ashburn',
    'water-damage-insurance-claim-guide',
    'does-homeowners-insurance-cover-water-damage-virginia',
    'water-damage-restoration-cost-northern-virginia',
  ],
  'storm-damage-restoration': [
    'first-24-hours-after-water-damage',
    'water-damage-insurance-claim-guide',
    'prevent-water-damage-winter',
    'does-homeowners-insurance-cover-water-damage-virginia',
  ],
  'burst-pipe-cleanup': [
    'first-24-hours-after-water-damage',
    'prevent-water-damage-winter',
    'water-damage-restoration-process',
    'burst-pipe-what-to-do-first-hour',
    'water-damage-restoration-cost-northern-virginia',
  ],
  'structural-drying': [
    'water-damage-restoration-process',
    'signs-of-hidden-mold',
  ],

  // Residential - Cleanup
  'sewage-cleanup': [
    'first-24-hours-after-water-damage',
    'water-damage-insurance-claim-guide',
    'sewage-backup-cleanup-cost-nova',
    'does-homeowners-insurance-cover-water-damage-virginia',
  ],
  'mold-remediation': [
    'signs-of-hidden-mold',
    'black-mold-vs-regular-mold',
  ],
  'fire-smoke-cleanup': [
    'water-damage-insurance-claim-guide',
    'first-24-hours-after-water-damage',
    'get-insurance-to-pay-water-damage-restoration',
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
    'sewage-backup-cleanup-cost-nova',
    'water-damage-restoration-cost-northern-virginia',
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
    'does-homeowners-insurance-cover-water-damage-virginia',
  ],

  // Commercial - Restoration
  'commercial-water-damage': [
    'water-damage-restoration-process',
    'water-damage-insurance-claim-guide',
    'commercial-water-damage-fairfax-arlington-property-manager-guide',
    'water-damage-restoration-cost-northern-virginia',
    'get-insurance-to-pay-water-damage-restoration',
  ],
  'commercial-flood-cleanup': [
    'emergency-flood-response-ashburn',
    'first-24-hours-after-water-damage',
    'commercial-water-damage-fairfax-arlington-property-manager-guide',
  ],
  'large-loss-restoration': [
    'water-damage-insurance-claim-guide',
    'water-damage-restoration-process',
    'commercial-water-damage-fairfax-arlington-property-manager-guide',
    'get-insurance-to-pay-water-damage-restoration',
  ],

  // Commercial - Cleanup
  'commercial-sewage-cleanup': [
    'water-damage-insurance-claim-guide',
    'sewage-backup-cleanup-cost-nova',
    'commercial-water-damage-fairfax-arlington-property-manager-guide',
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
    'commercial-water-damage-fairfax-arlington-property-manager-guide',
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
