import type { ServiceData } from './types'

const hospitalityMultifamily: ServiceData = {
  slug: 'hospitality-multifamily',
  name: 'Hospitality & Multifamily Restoration',
  tagline: 'Minimize vacancy and coordinate tenant communication across every unit.',
  description:
    'Hotels, apartment complexes, and condominiums present unique restoration challenges — multiple affected units, displaced residents, and revenue loss per vacant night. Our hospitality and multifamily division specializes in rapid, coordinated restoration that minimizes displacement and protects your bottom line.',
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
    {
      name: 'Multi-Unit Coordination',
      description:
        'Simultaneous restoration across dozens of units with individual unit tracking, key management, and staggered crew scheduling for maximum efficiency.',
      icon: 'cog-6-tooth',
    },
    {
      name: 'Tenant Communication Management',
      description:
        'Dedicated liaison handles all resident and guest communication including displacement coordination, timeline updates, and re-entry scheduling.',
      icon: 'shield-check',
    },
    {
      name: 'Revenue Loss Minimization',
      description:
        'Phased restoration strategies prioritize returning the highest-revenue units to service first, reducing vacancy costs for hotels and rental properties.',
      icon: 'bolt',
    },
    {
      name: 'Quiet Hours Operations',
      description:
        'Noise-sensitive scheduling respects occupied units, with equipment selection and work timing designed to minimize disturbance to remaining guests and residents.',
      icon: 'clock',
    },
    {
      name: 'Common Area Restoration',
      description:
        'Lobbies, hallways, fitness centers, pools, and shared amenities restored to brand standards with minimal closure periods.',
      icon: 'home-modern',
    },
    {
      name: 'FF&E Replacement Coordination',
      description:
        'Furniture, fixtures, and equipment procurement and installation managed alongside structural restoration to accelerate unit turnover.',
      icon: 'wrench-screwdriver',
    },
  ],
  contentParagraphs: [
    'Water damage in a hotel or apartment complex is not a single restoration project — it is dozens of simultaneous projects with interconnected timelines, shared building systems, and a population of affected occupants who need to be managed with care and professionalism. A burst pipe on the fifth floor of a hotel can cascade down to affect 30 or more rooms, displacing guests, shutting down revenue-generating inventory, and creating a logistical nightmare that standard restoration companies are not equipped to handle.',
    'Our hospitality and multifamily division brings hotel and property management experience to the restoration process. We assign a dedicated tenant and guest liaison who manages all occupant communication — from initial displacement notifications and temporary housing coordination to progress updates and return-to-unit scheduling. For hotels, we coordinate directly with front desk operations and revenue management to prioritize unit restoration based on demand forecasting and booking calendars.',
    'The physical restoration of multi-unit properties requires military-grade logistics. Each unit must be individually scoped, tracked, and quality-inspected. Shared systems — plumbing risers, fire sprinkler lines, HVAC, and electrical panels — must be assessed and repaired as part of the whole-building picture, not just within individual unit boundaries. Our project management platform tracks every unit in real-time, providing property managers with dashboard visibility into the status, timeline, and cost of each space.',
    'We understand that the guest and resident experience during restoration shapes their long-term perception of the property. Containment barriers are clean and professional, not haphazard. Equipment noise is scheduled around occupant routines. Common areas are maintained as presentable as possible throughout the project. These details matter to our hotel and property management clients, and they are built into our standard multifamily restoration protocols.',
  ],
  stats: [
    { label: 'Units Restored Annually', value: '3,000+' },
    { label: 'Average Unit Turnaround', value: '5 days' },
    { label: 'Guest Satisfaction During Restoration', value: '94%' },
    { label: 'Hotel & Apartment Partners', value: '75+' },
  ],
  testimonial: {
    quote:
      'A sprinkler malfunction on our 8th floor affected 45 hotel rooms across four floors. Flood Doctor returned 80% of the rooms to service within one week and handled all guest relocation. Their communication with our front desk team was seamless throughout the entire process.',
    author: 'Kendra Williams',
    role: 'General Manager, The Grand Pacific Hotel',
    imageUrl:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Commercial Water Damage Restoration',
      description: 'Large-scale water extraction and drying for multi-story hospitality and residential buildings.',
    },
    {
      name: 'Commercial Mold Remediation',
      description: 'Multi-unit mold remediation with containment protocols that protect occupied adjacent units.',
    },
    {
      name: 'Commercial Fire & Smoke Cleanup',
      description: 'Fire and smoke damage restoration across multiple hotel rooms or apartment units with coordinated reconstruction.',
    },
    {
      name: 'Indoor Air Quality Testing',
      description: 'Unit-by-unit air quality verification to ensure safe conditions before returning guests and residents.',
    },
    {
      name: 'Commercial Sewage Cleanup',
      description: 'Sewage backup remediation in multi-unit buildings with occupant safety and containment protocols.',
    },
    {
      name: 'Reconstruction Services',
      description: 'Unit-by-unit reconstruction including flooring, paint, fixtures, and FF&E to match property brand standards.',
    },
  ],
  faqs: [
    {
      question: 'How do you handle communication with displaced hotel guests?',
      answer:
        'We assign a dedicated liaison who coordinates directly with your front desk and guest services team. They manage relocation logistics, provide daily progress updates to property management, and coordinate unit-by-unit return scheduling. For apartment residents, we provide written notices, direct phone contact, and regular email updates.',
    },
    {
      question: 'Can you prioritize specific units to minimize revenue loss?',
      answer:
        'Absolutely. We work with your revenue management team to identify high-demand room types, upcoming group blocks, and seasonal considerations. Restoration sequencing is then optimized to return the highest-impact inventory first, reducing vacancy costs and protecting future bookings.',
    },
    {
      question: 'How do you manage noise and disruption for remaining guests?',
      answer:
        'We establish quiet hours aligned with your property schedule, use noise-dampening equipment where available, and schedule demolition and loud work during low-occupancy periods. Containment barriers include sound-dampening materials, and our crews are trained to maintain professional, low-profile presence in guest and resident areas.',
    },
    {
      question: 'Do you handle the FF&E replacement for hotel rooms?',
      answer:
        'Yes. We coordinate furniture, fixtures, and equipment procurement alongside structural restoration. For branded properties, we source brand-standard materials and can work with your approved vendor list. For apartments, we match existing finishes or coordinate upgrades with property ownership.',
    },
    {
      question: 'How do you prevent water from a damaged unit from affecting units below?',
      answer:
        'Immediate containment includes extracting water from the source unit, deploying drying equipment in the cavity space between floors, and conducting moisture inspections in all potentially affected units below. We use thermal imaging to trace water migration paths through floor assemblies and wall cavities.',
    },
    {
      question: 'Can you work with our property management software for unit tracking?',
      answer:
        'We provide real-time unit status tracking through our project portal and can integrate reporting with your property management system. Daily status reports include unit-by-unit progress, estimated completion dates, and cost tracking that aligns with your internal reporting requirements.',
    },
  ],
}

export default hospitalityMultifamily
