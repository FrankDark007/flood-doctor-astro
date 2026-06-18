import type { ServiceData } from './types'

const hospitalityMultifamily: ServiceData = {
  slug: 'hospitality-multifamily',
  name: 'Hospitality & Multifamily',
  tagline: 'Restoration for hotels, apartments, and multi-unit residential properties.',
  description:
    'Hotels, apartment complexes, and multifamily properties face unique restoration challenges — multiple affected units, displaced residents, ongoing revenue loss, and complex liability considerations. Our hospitality team minimizes displacement and gets units back online fast.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    { name: 'Multi-Unit Coordination', description: 'Simultaneous restoration of multiple affected units with individual tracking, allowing phased re-occupancy as units are completed.', icon: 'arrow-path' },
    { name: 'Guest & Tenant Communication', description: 'Professional communication support including notification templates, status updates, and relocation coordination for displaced occupants.', icon: 'check' },
    { name: 'Revenue Recovery Focus', description: 'Our phased approach prioritizes returning revenue-generating units to service as quickly as possible, minimizing financial impact.', icon: 'bolt' },
    { name: 'Discreet Operations', description: 'We understand the hospitality brand. Our crews maintain professional appearance, use service entrances, and minimize visible disruption to guests.', icon: 'shield-check' },
    { name: 'Common Area Priority', description: 'Lobbies, hallways, and amenity spaces are prioritized to maintain the guest and resident experience during restoration.', icon: 'home-modern' },
    { name: 'Liability Documentation', description: 'Detailed documentation protects property owners from tenant and guest claims, including timeline records, scope photos, and clearance testing.', icon: 'finger-print' },
  ],
  contentParagraphs: [
    'Water damage in hospitality and multifamily properties creates a cascade of challenges that single-unit properties do not face. A burst pipe on the fourth floor of a hotel or apartment building can damage every unit below it, displacing dozens of guests or residents simultaneously. Revenue loss compounds daily, tenant relations become strained, and liability exposure grows with each day of displacement.',
    'Our hospitality and multifamily team understands these pressures. We deploy multi-unit restoration strategies that address all affected spaces simultaneously rather than sequentially. Each unit receives its own moisture map, equipment allocation, and daily monitoring, while our project manager tracks the overall project with a master schedule that shows estimated completion dates for every unit.',
    'For hotels, we prioritize revenue-generating rooms and public spaces. Our crews work discreetly — using service corridors, freight elevators, and branded equipment covers to minimize visible disruption to guests in unaffected areas. We coordinate check-in and check-out schedules with your front desk to avoid guest-facing equipment movement during peak times.',
    'For apartment communities, we prioritize tenant communication and temporary housing coordination. We provide property managers with notification templates, daily status updates by unit, and estimated re-occupancy dates. When applicable, we coordinate with resident insurance policies as well as the property owner\'s policy to ensure all affected parties receive proper claim support.',
  ],
  stats: [
    { label: 'Emergency Dispatch', value: '24/7' },
    { label: 'Documentation', value: 'Photos + readings' },
    { label: 'Scope Review', value: 'On site' },
    { label: 'Follow-Up', value: 'Included' },
  ],
  testimonial: {
    quote:
      'The team explained the scope clearly, documented the affected areas, and kept the restoration process organized from emergency response through follow-up.',
    author: 'Property Owner',
    role: 'Restoration Customer',
    imageUrl: '/graphics/flood-doctor-mark.svg',
  },
  relatedFeatures: [
    { name: 'Commercial Water Damage', description: 'Large-scale water damage restoration for multi-story commercial and residential properties.' },
    { name: 'Large Loss Restoration', description: 'Enterprise-scale project management for multi-unit damage events.' },
    { name: 'Commercial Mold Remediation', description: 'Mold remediation for common areas and individual units in multifamily properties.' },
    { name: 'Contents Restoration', description: 'Pack-out and restoration services for guest and tenant belongings in affected units.' },
    { name: 'Structural Drying', description: 'Multi-unit drying operations with individual moisture tracking per unit.' },
    { name: 'Reconstruction', description: 'Coordinated rebuild of multiple units to consistent finish standards.' },
  ],
  faqs: [
    { question: 'How do you handle multiple affected units?', answer: 'Each unit receives individual attention with its own moisture map, equipment setup, and daily monitoring. Our project manager tracks all units on a master schedule, prioritizing based on displacement impact and restoration efficiency. Units are cleared for re-occupancy individually as they reach dry standards.' },
    { question: 'Can you work around hotel guests?', answer: 'Yes. We use service entrances, freight elevators, and schedule disruptive work during low-occupancy periods. Our crews maintain professional appearance and equipment is covered or concealed when possible. We coordinate with your front desk to avoid guest-facing activities during check-in and check-out.' },
    { question: 'Who handles tenant communication?', answer: 'We provide property managers with professional communication templates and daily unit-by-unit status updates. Our project manager is available for tenant meetings if needed. We find that transparent, proactive communication significantly reduces tenant complaints and legal disputes.' },
    { question: 'How do you handle tenant belongings?', answer: 'We offer pack-out services for tenant belongings in affected units, with detailed inventory and secure storage. For hotel rooms, we coordinate with housekeeping for guest property. All items are documented and insured during our custody.' },
    { question: 'What about temporary housing for displaced residents?', answer: 'We coordinate with property management on temporary housing arrangements. Depending on insurance coverage, costs may be covered under the property policy or individual renter policies. We document displacement dates for each unit to support insurance claims.' },
    { question: 'How do you manage insurance with multiple policies involved?', answer: 'Multi-unit events often involve the property owner\'s policy plus individual tenant/renter policies. We provide documentation customized for each claim and coordinate communication among involved parties. Our estimators understand the interplay between property and tenant coverage and help coordinate to avoid gaps or duplications.' },
  ],
}

export default hospitalityMultifamily
