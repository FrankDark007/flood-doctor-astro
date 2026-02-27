import type { ServiceData } from './types'

const hospitalityMultifamily: ServiceData = {
  slug: 'hospitality-multifamily',
  name: 'Hospitality & Multifamily',
  tagline: 'Restoration for hotels, apartments, and multi-unit residential properties.',
  description:
    'Hotels, apartment complexes, and multifamily properties face unique restoration challenges — multiple affected units, displaced residents, ongoing revenue loss, and complex liability considerations. Our hospitality team minimizes displacement and gets units back online fast.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
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
    { label: 'Multi-Unit Projects', value: '200+' },
    { label: 'Hotel Rooms Restored', value: '5,000+' },
    { label: 'Avg. Unit Turnaround', value: '5-7 days' },
    { label: 'Tenant Satisfaction', value: '96%' },
  ],
  testimonial: {
    quote: 'A water heater on the 8th floor of our 200-unit luxury apartment community failed and water cascaded down through seven floors, affecting 35 units. Flood Doctor restored all units in parallel, communicated with each resident individually, and had every unit back online in 12 days. Our property management company was incredibly impressed.',
    author: 'Diane Hartwell',
    role: 'Regional Director, Premier Living Communities',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
    { question: 'How do you manage insurance with multiple policies involved?', answer: 'Multi-unit events often involve the property owner\'s policy plus individual tenant/renter policies. We work with all parties, providing documentation customized for each claim. Our estimators understand the interplay between property and tenant coverage and help coordinate to avoid gaps or duplications.' },
  ],
}

export default hospitalityMultifamily
