import type { ServiceData } from './types'

const sewageCleanup: ServiceData = {
  slug: 'sewage-cleanup',
  name: 'Sewage Cleanup',
  tagline: 'Safe, thorough Category 3 black water cleanup that protects your family\'s health.',
  description:
    'Sewage backups introduce dangerous pathogens, bacteria, and viruses into your home. Our hazmat-trained technicians perform complete extraction, decontamination, and antimicrobial treatment following strict IICRC S500 protocols to make your property safe again.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
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
      name: 'Hazmat-Level Extraction',
      description:
        'Our crews wear full PPE including Tyvek suits, respirators, and chemical-resistant gloves while extracting sewage with specialized contaminated-water pumps.',
      icon: 'shield-check',
    },
    {
      name: 'Contaminated Material Removal',
      description:
        'All porous materials that contacted sewage — carpet, padding, drywall, insulation — are removed, bagged, and disposed of per EPA and local health regulations.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Antimicrobial Decontamination',
      description:
        'Hospital-grade, EPA-registered biocides are applied to every affected surface to kill E. coli, Salmonella, hepatitis, and other dangerous pathogens.',
      icon: 'beaker',
    },
    {
      name: 'Air Quality Restoration',
      description:
        'HEPA air scrubbers and negative air machines capture airborne pathogens and sewage particulates while hydroxyl generators neutralize contaminated air.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'Clearance Testing',
      description:
        'Post-cleanup ATP (adenosine triphosphate) testing and air sampling verify that all biological contamination has been eliminated before reoccupation.',
      icon: 'check',
    },
    {
      name: 'Emergency Plumbing Coordination',
      description:
        'We coordinate with licensed plumbers to resolve the backup source — collapsed sewer lines, tree root intrusion, or municipal system failures.',
      icon: 'cog-6-tooth',
    },
  ],
  contentParagraphs: [
    'Sewage backups are the most hazardous type of water damage a homeowner can face. Classified as Category 3 (black water) under IICRC standards, sewage contains human waste, bacteria including E. coli and Salmonella, viruses including hepatitis and rotavirus, parasites, and chemical contaminants. Direct contact or even airborne exposure poses serious health risks, making professional cleanup essential — this is never a DIY situation.',
    'Our sewage cleanup process begins with containment. We establish a perimeter around the affected area, set up negative air pressure to prevent cross-contamination, and restrict access to trained personnel in full protective equipment. Extraction uses specialized pumps designed for contaminated water, and all extracted material is transported to approved disposal facilities.',
    'After extraction, we perform controlled demolition of all contaminated porous materials. This includes carpet, padding, drywall (typically 12-24 inches above the visible waterline), insulation, and any other absorbent materials that contacted sewage. Non-porous surfaces like concrete, metal, and sealed wood are scrubbed with antimicrobial solutions and treated with multiple applications of EPA-registered biocides.',
    'The final phase involves structural drying under containment, followed by clearance testing. We use ATP swab tests on surfaces and air quality sampling to scientifically verify that all biological contamination has been eliminated. Only after test results confirm the space is safe do we release the area for reconstruction and reoccupation. Complete documentation supports your insurance claim throughout the process.',
  ],
  stats: [
    { label: 'Sewage Jobs Completed', value: '1,400+' },
    { label: 'Clearance Test Pass Rate', value: '100%' },
    { label: 'Emergency Response Time', value: '<60 min' },
    { label: 'Insurance Claims Processed', value: '1,200+' },
  ],
  testimonial: {
    quote:
      'Our main sewer line backed up into the basement during a heavy rain. The smell was unbearable and we were terrified about the health risks with young kids in the house. Flood Doctor had a hazmat crew here within the hour, completely gutted and decontaminated the basement, and the clearance tests came back perfect. Worth every penny.',
    author: 'Angela Thornton',
    role: 'Homeowner in Ashburn',
    imageUrl:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Water Damage Restoration',
      description: 'Comprehensive restoration services for all categories of water damage including contaminated water events.',
    },
    {
      name: 'Odor Removal',
      description: 'Advanced deodorization using thermal fogging, ozone, and hydroxyl generators to eliminate sewage odors.',
    },
    {
      name: 'Basement Flooding',
      description: 'Specialized basement cleanup for sewage backups that commonly affect below-grade spaces.',
    },
    {
      name: 'Structural Drying',
      description: 'Commercial drying systems deployed after sewage-contaminated materials are removed and surfaces decontaminated.',
    },
    {
      name: 'Mold Remediation',
      description: 'Mold inspection and removal for fungal growth that develops in sewage-affected areas.',
    },
    {
      name: 'Contents Cleaning',
      description: 'Professional restoration of salvageable belongings contaminated during a sewage backup event.',
    },
  ],
  faqs: [
    {
      question: 'Is sewage backup dangerous?',
      answer:
        'Extremely. Sewage contains bacteria (E. coli, Salmonella), viruses (hepatitis A, rotavirus), parasites, and chemical waste. Exposure through skin contact, ingestion, or inhalation of airborne particles can cause serious illness. Do not attempt cleanup yourself — evacuate the area and call professionals immediately.',
    },
    {
      question: 'Does insurance cover sewage backup?',
      answer:
        'Sewage backup coverage is typically an optional add-on to standard homeowner policies, not included by default. Check your policy for "sewer and drain backup" coverage. If you have it, your claim is usually covered minus your deductible. We help document everything for your insurer.',
    },
    {
      question: 'Can I stay in my home during sewage cleanup?',
      answer:
        'We strongly recommend vacating the affected area and ideally the entire home during active sewage cleanup. Airborne pathogens can spread beyond the visible damage area. Once clearance testing confirms the space is safe, you can return. Cleanup typically takes 3-5 days.',
    },
    {
      question: 'What causes sewage backups?',
      answer:
        'Common causes include tree root intrusion into sewer lines, collapsed or deteriorated pipes, municipal sewer system overload during heavy rain, clogged household drain lines, and failed sump pumps or backflow preventers. We coordinate with plumbers to identify and resolve the root cause.',
    },
    {
      question: 'Why do you remove drywall above the waterline?',
      answer:
        'Sewage water wicks upward through drywall via capillary action, contaminating material well above the visible water level. Industry standard is to remove drywall 12-24 inches above the highest visible watermark to ensure all contaminated material is eliminated. This is not optional — it is a health and safety requirement.',
    },
    {
      question: 'How do you verify the cleanup is complete?',
      answer:
        'We use ATP (adenosine triphosphate) swab testing on decontaminated surfaces and air quality sampling to measure biological contamination levels. These tests provide numerical results that must fall below established safe thresholds before we clear the space for reoccupation. We provide test results documentation for your records.',
    },
  ],
}

export default sewageCleanup
