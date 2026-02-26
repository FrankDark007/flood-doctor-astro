import type { ServiceData } from './types'
import waterDamageRestoration from './water-damage-restoration'

export type { ServiceData }
export { type ServiceFeature, type ServiceStat, type ServiceTestimonial, type ServiceFAQ, type ServiceLogo, type ServiceRelatedFeature } from './types'

const services: Record<string, ServiceData> = {
  [waterDamageRestoration.slug]: waterDamageRestoration,
}

export const allServices = Object.values(services)
export const getService = (slug: string): ServiceData | undefined => services[slug]
export default services
