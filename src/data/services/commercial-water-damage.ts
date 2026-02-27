import type { ServiceData } from './types'

const commercialWaterDamage: ServiceData = {
  slug: 'commercial-water-damage',
  name: 'Commercial Water Damage',
  tagline: 'Large-scale water damage restoration that minimizes business downtime.',
  description:
    'Commercial water damage impacts your revenue, your employees, and your customers. Our commercial division deploys large-loss teams with industrial equipment to extract water, dry structures, and restore operations as quickly as possible.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
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
        'Detailed moisture logs, OSHA compliance documentation, and Xactimate estimates formatted for commercial insurance carriers.',
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
    { label: 'Commercial Projects', value: '600+' },
    { label: 'Avg. Business Downtime', value: '<48 hrs' },
    { label: 'Sq Ft Restored Annually', value: '2M+' },
    { label: 'Commercial Clients Retained', value: '92%' },
  ],
  testimonial: {
    quote:
      'A sprinkler head malfunctioned on a Saturday night and flooded three floors of our office building. Flood Doctor had crews on site by midnight and worked through the weekend. By Monday morning, two of the three floors were operational and the third was back online by Wednesday. They saved us hundreds of thousands in business interruption losses.',
    author: 'Daniel Park',
    role: 'Facilities Director, Midwest Financial Group',
    imageUrl:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
        'Yes, we work with all major commercial insurance carriers and understand the differences between commercial and residential claims. We provide Xactimate estimates, detailed documentation, and can participate in insurance adjuster meetings to support your claim.',
    },
    {
      question: 'How fast can you respond to a commercial emergency?',
      answer:
        'We maintain 24/7 commercial dispatch with crews that can mobilize within 60-90 minutes. For large-loss events, we can scale to multiple crews within hours. We also offer priority response agreements for businesses that want guaranteed response times.',
    },
    {
      question: 'Can you help with business continuity planning?',
      answer:
        'Yes. We offer pre-loss planning services including facility assessments, emergency response plans, and priority response agreements. Having a plan in place before an emergency reduces response time and helps maintain business operations during unexpected water damage events.',
    },
  ],
}

export default commercialWaterDamage
