import type { CityServiceContent } from './types'

export type { CityServiceContent }
export { getRelatedBlogSlugs } from './blog-mapping'
export { getCityDifferentiation } from './matrix'
export type { CityDifferentiation } from './matrix'

/**
 * Dynamically loads city-specific service content.
 * Returns null if no city content exists for this city/service combo
 * (graceful fallback to generic ServiceData).
 */
export function getCityServiceContent(
  citySlug: string,
  serviceSlug: string
): CityServiceContent | null {
  try {
    // Use Vite's import.meta.glob for static analysis at build time
    const modules = import.meta.glob<{ content: CityServiceContent }>(
      './*/*.ts',
      { eager: true }
    )

    const key = `./${citySlug}/${serviceSlug}.ts`
    const mod = modules[key]
    return mod?.content ?? null
  } catch {
    return null
  }
}
