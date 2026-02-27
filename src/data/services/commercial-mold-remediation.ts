import type { ServiceData } from './types'

const commercialMoldRemediation: ServiceData = {
  slug: 'commercial-mold-remediation',
  name: 'Commercial Mold Remediation',
  tagline: 'Large-scale mold removal that protects your building and your people.',
  description:
    'Mold in commercial buildings threatens employee health, triggers regulatory action, and destroys property value. Our commercial mold remediation teams handle large-scale containment, removal, and prevention across office buildings, warehouses, and multi-tenant facilities.',
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
      name: 'Comprehensive Mold Assessment',
      description:
        'Certified industrial hygienists conduct thorough inspections with air and surface sampling to identify mold species, extent of colonization, and moisture sources driving growth.',
      icon: 'beaker',
    },
    {
      name: 'Engineered Containment Systems',
      description:
        'Multi-chamber decontamination units, HEPA-filtered negative air, and sealed containment barriers prevent spore migration during remediation of large commercial spaces.',
      icon: 'shield-check',
    },
    {
      name: 'HVAC Decontamination',
      description:
        'Commercial HVAC systems are primary pathways for mold distribution. We inspect, clean, and treat ductwork, air handlers, and coils to eliminate systemic contamination.',
      icon: 'arrow-path',
    },
    {
      name: 'Source Moisture Elimination',
      description:
        'Mold remediation without addressing the moisture source is temporary. Our teams identify and resolve the root cause — leaks, condensation, or humidity issues — permanently.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Occupied Building Protocols',
      description:
        'Specialized procedures allow remediation in occupied commercial buildings while maintaining safe air quality for employees and tenants in adjacent areas.',
      icon: 'home-modern',
    },
    {
      name: 'Third-Party Clearance Testing',
      description:
        'Independent environmental consultants verify successful remediation with post-work air and surface sampling before containment barriers are removed.',
      icon: 'check',
    },
  ],
  contentParagraphs: [
    'Mold contamination in commercial buildings is fundamentally different from residential mold problems. The scale is larger, the building systems are more complex, and the stakes are higher — employee health complaints can trigger OSHA investigations, tenant lawsuits, and property devaluation. Our commercial mold remediation division handles projects ranging from a single contaminated office suite to facility-wide remediation spanning hundreds of thousands of square feet.',
    'Every commercial mold project begins with a thorough assessment by a certified industrial hygienist. Air and surface samples are collected and analyzed by accredited laboratories to identify mold species, quantify spore concentrations, and map the extent of contamination. Simultaneously, our moisture specialists use thermal imaging, hygrometers, and building pressure diagnostics to identify the water intrusion or humidity conditions that created the mold-favorable environment.',
    'Remediation of large commercial spaces requires engineered containment systems that go far beyond residential plastic sheeting. We construct rigid-frame containment enclosures with HEPA-filtered negative air machines maintaining a minimum -5 Pascal pressure differential. Multi-chamber decontamination corridors allow workers and materials to move in and out without releasing spores. For facilities with sensitive operations, we can implement custom containment solutions that maintain building function during remediation.',
    'The most critical step in commercial mold remediation is one that many contractors skip: permanently resolving the moisture source. Whether the problem is a chronic roof leak, condensation from an undersized HVAC system, or poor building envelope design, our team works with building engineers and property managers to implement lasting solutions. Without source correction, mold will return — and you will pay for remediation twice.',
  ],
  stats: [
    { label: 'Clearance Test Pass Rate', value: '99.8%' },
    { label: 'Commercial Projects Completed', value: '450+' },
    { label: 'Largest Single Remediation', value: '180K sq ft' },
    { label: 'Certified Remediation Technicians', value: '40+' },
  ],
  testimonial: {
    quote:
      'We discovered extensive mold behind the walls of three floors in our office tower after a hidden plumbing leak. Flood Doctor remediated 60,000 square feet without displacing a single tenant from unaffected floors. Their containment protocols were flawless.',
    author: 'Jennifer Hartwell',
    role: 'Property Manager, Summit Commercial Real Estate',
    imageUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Indoor Air Quality Testing',
      description: 'Comprehensive air sampling and analysis to quantify mold spore levels and identify species present in your facility.',
    },
    {
      name: 'Environmental Testing',
      description: 'Full environmental assessments including mold, asbestos, and lead testing for commercial properties.',
    },
    {
      name: 'Commercial Water Damage Restoration',
      description: 'Proper water damage mitigation is the best mold prevention. Our teams address the source before mold can establish.',
    },
    {
      name: 'HVAC Decontamination',
      description: 'Complete inspection and cleaning of commercial HVAC systems that have distributed mold spores throughout a building.',
    },
    {
      name: 'Moisture Mapping & Consulting',
      description: 'Scientific moisture assessment to identify hidden water intrusion driving mold growth in commercial structures.',
    },
    {
      name: 'Healthcare Facility Restoration',
      description: 'Specialized mold remediation protocols for hospitals and clinics with immunocompromised patient populations.',
    },
    {
      name: 'Reconstruction Services',
      description: 'Rebuild of demolished materials including drywall, insulation, flooring, and finishes after mold removal.',
    },
  ],
  faqs: [
    {
      question: 'How do you remediate mold in a building that must remain occupied?',
      answer:
        'We use engineered containment systems with HEPA-filtered negative air to completely isolate work areas from occupied spaces. Air monitoring in adjacent areas runs continuously during remediation to verify safe conditions. Work schedules can be adjusted to minimize disruption during peak business hours.',
    },
    {
      question: 'Do we need a separate environmental consultant, or do you handle testing?',
      answer:
        'Best practice — and many state regulations — require that the company performing remediation be different from the company performing assessment and clearance testing. We can recommend qualified independent industrial hygienists, or work with your existing environmental consultant to ensure proper separation of roles.',
    },
    {
      question: 'What causes mold in commercial buildings?',
      answer:
        'The most common causes are chronic roof leaks, plumbing failures behind walls, inadequate HVAC dehumidification, poor building envelope sealing, and condensation on cold surfaces. Any condition that maintains relative humidity above 60% or introduces liquid water to building materials can trigger mold growth within 48-72 hours.',
    },
    {
      question: 'How long does commercial mold remediation take?',
      answer:
        'Timeline varies with project scope. A single contaminated office suite may take 3-5 days. Multi-floor or facility-wide remediation projects can take 2-8 weeks depending on the extent of contamination, accessibility of affected areas, and whether the building remains occupied during work.',
    },
    {
      question: 'Is commercial mold remediation covered by insurance?',
      answer:
        'Coverage depends on your policy and the cause of the mold. Mold resulting from a sudden, covered water loss (like a burst pipe) is typically covered. Mold from long-term maintenance issues or humidity problems is often excluded or subject to sub-limits. We can help you review your policy language and document the loss to maximize coverage.',
    },
    {
      question: 'What happens if mold has entered the HVAC system?',
      answer:
        'If mold has colonized HVAC components, spores can be distributed throughout the entire building every time the system runs. We inspect all accessible ductwork, air handlers, coils, and drain pans. Contaminated components are cleaned using NADCA-approved methods or replaced if cleaning is not feasible. The system is treated with antimicrobial agents before being returned to service.',
    },
  ],
}

export default commercialMoldRemediation
