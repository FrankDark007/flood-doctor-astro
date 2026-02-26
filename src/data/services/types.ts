export interface ServiceFeature {
  name: string
  description: string
  icon: string
}

export interface ServiceStat {
  label: string
  value: string
}

export interface ServiceTestimonial {
  quote: string
  author: string
  role: string
  imageUrl: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceLogo {
  name: string
  src: string
}

export interface ServiceRelatedFeature {
  name: string
  description: string
}

export interface ServiceData {
  slug: string
  name: string
  tagline: string
  description: string
  heroImageUrl: string
  logos: ServiceLogo[]
  features: ServiceFeature[]
  contentParagraphs: string[]
  stats: ServiceStat[]
  testimonial: ServiceTestimonial
  relatedFeatures: ServiceRelatedFeature[]
  faqs: ServiceFAQ[]
}
