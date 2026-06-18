import type { ServiceData } from './types'

const commercialWaterDamage: ServiceData = {
  slug: 'commercial-water-damage',
  name: 'Commercial Water Damage',
  tagline: 'Large-scale water damage restoration that minimizes business downtime.',
  description:
    'Commercial water damage impacts your revenue, your employees, and your customers. Our commercial division deploys large-loss teams with industrial equipment to extract water, dry structures, and restore operations as quickly as possible.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    {
      name: 'Rapid Large-Loss Deployment',
      description:
        'Multiple crews with truck-mounted extractors and industrial drying equipment deploy simultaneously to minimize business interruption.',
      icon: 'bolt',
    },
    {
      name: 'Business Continuity Planning',
      description:
        'We work around your operational schedule, performing noisy work after hours and isolating affected areas so unaffected spaces stay operational.',
      icon: 'clock',
    },
    {
      name: 'Server Room Protection',
      description:
        'Priority response for data centers, server rooms, and IT infrastructure with anti-corrosion treatments and controlled-environment drying.',
      icon: 'server',
    },
    {
      name: 'Commercial-Grade Drying',
      description:
        'Fleet of 500+ commercial dehumidifiers and air movers designed for large open floor plans, warehouses, and multi-story buildings.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'Dedicated Project Management',
      description:
        'A single project manager serves as your point of contact, coordinating all crews, subcontractors, and insurance communications.',
      icon: 'check',
    },
    {
      name: 'Documentation & Compliance',
      description:
        'Detailed moisture logs, OSHA compliance documentation, and claim documentation formatted for commercial insurance carriers.',
      icon: 'shield-check',
    },
  ],
  contentParagraphs: [
    'Commercial water damage costs businesses more than just repair expenses — every hour of downtime means lost revenue, displaced employees, and disrupted customer relationships. Whether caused by sprinkler system malfunctions, roof leaks, plumbing failures, or natural flooding, commercial water damage demands a response team equipped for scale, speed, and minimal operational disruption.',
    'Our commercial water damage division operates differently from residential crews. We maintain a fleet of truck-mounted extractors that can remove thousands of gallons per hour, warehouse quantities of commercial drying equipment, and trained crews that can operate around the clock in shifts. For multi-story office buildings, we deploy elevator-compatible equipment and maintain containment to allow adjacent floors and suites to remain operational.',
    'Protecting your business assets is paramount. We prioritize server rooms, document storage, inventory, and specialized equipment. Anti-corrosion treatments are applied to electronics and machinery within hours to prevent oxidation damage. Our content management team can relocate inventory and equipment to dry areas while restoration proceeds, minimizing the impact on your supply chain and operations.',
    'Our project managers coordinate directly with your facilities team, property management, and insurance carrier. We provide daily progress reports with moisture readings, equipment counts, and projected completion dates. For businesses with lease obligations, we document the timeline and scope to support any business interruption claims or tenant-landlord communications.',
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
    {
      name: 'Commercial Flood Cleanup',
      description: 'Large-scale flood response for commercial properties affected by natural or infrastructure flooding.',
    },
    {
      name: 'Large Loss Restoration',
      description: 'Multi-million dollar restoration projects with dedicated project management and enterprise resources.',
    },
    {
      name: 'Server Room Recovery',
      description: 'Specialized protection and drying for IT infrastructure, data centers, and network equipment.',
    },
    {
      name: 'Commercial Mold Remediation',
      description: 'OSHA-compliant mold remediation for commercial and institutional environments.',
    },
    {
      name: 'Moisture Mapping',
      description: 'Scientific moisture assessment for large commercial spaces using thermal imaging and digital mapping.',
    },
    {
      name: 'Business Interruption Support',
      description: 'Documentation and coordination to support your business interruption insurance claim.',
    },
  ],
  faqs: [
    {
      question: 'Can you work after hours to minimize disruption?',
      answer:
        'Absolutely. We routinely perform noisy work (extraction, demolition) during evenings and weekends, with quieter drying equipment running during business hours. We coordinate closely with your facilities team to schedule work around your most critical operational periods.',
    },
    {
      question: 'How do you handle multi-tenant buildings?',
      answer:
        'We establish containment to isolate affected areas, allowing unaffected tenants to continue operating. We coordinate with property management to communicate timelines and access requirements. Our crews use dedicated entrances and freight elevators to minimize disruption to common areas.',
    },
    {
      question: 'What about our IT equipment and servers?',
      answer:
        'IT infrastructure is our top priority after life safety. We apply anti-corrosion treatments within hours, set up controlled drying environments, and can relocate equipment to temporary spaces if needed. We coordinate with your IT team and can work with your equipment vendors on warranty-compliant restoration.',
    },
    {
      question: 'Do you work with commercial insurance carriers?',
      answer:
        'We understand commercial claim documentation and provide estimates, photos, moisture readings, and progress notes. We can participate in adjuster meetings as requested to explain the restoration scope.',
    },
    {
      question: 'How fast can you respond to a commercial emergency?',
      answer:
        'We maintain 24/7 commercial dispatch and mobilize crews based on location, site access, weather, and available resources. For large-loss events, we can coordinate additional crews through our response network.',
    },
    {
      question: 'Can you help with business continuity planning?',
      answer:
        'Yes. We offer documented planning services including facility assessments, emergency response plans, and priority response agreements. Having a plan in place before an emergency reduces response time and helps maintain business operations during unexpected water damage events.',
    },
  ],
}

export default commercialWaterDamage
