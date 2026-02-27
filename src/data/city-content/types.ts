export interface CityServiceContent {
  meta: { title: string; description: string }
  h1: string
  introSection: {
    headline: string
    paragraphs: string[]
    localContext: string
  }
  processSteps: Array<{
    title: string
    description: string
    timeframe: string
  }>
  localChallenges: Array<{
    title: string
    description: string
    solution: string
  }>
  equipmentSection?: {
    headline: string
    equipment: Array<{ name: string; purpose: string; brand?: string }>
    localNote: string
  }
  pricingSection: {
    headline: string
    intro: string
    factors: string[]
    cta: string
  }
  serviceAreaSection: {
    neighborhoods: string[]
    responseTime: string
  }
  faqs: Array<{ question: string; answer: string }>
  relatedBlogSlugs: string[]
  finalCTA: { headline: string; paragraph: string }
}
