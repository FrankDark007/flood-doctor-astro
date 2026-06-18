import type { ServiceData } from './types'

const commercialFloodCleanup: ServiceData = {
  slug: 'commercial-flood-cleanup',
  name: 'Commercial Flood Cleanup',
  tagline: 'Rapid commercial flood response to get your business back online fast.',
  description:
    'When floodwaters impact your commercial property, every hour of delay increases your losses. Our commercial flood team deploys industrial extraction and drying equipment at scale, prioritizing operational recovery alongside thorough restoration.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    {
      name: 'Industrial-Scale Extraction',
      description: 'Truck-mounted extractors remove tens of thousands of gallons from large commercial spaces including warehouses, retail floors, and office complexes.',
      icon: 'bolt',
    },
    {
      name: 'Contamination Assessment',
      description: 'Floodwater entering commercial properties is tested and classified to determine the appropriate safety protocols and cleanup methods.',
      icon: 'beaker',
    },
    {
      name: 'Inventory & Asset Protection',
      description: 'Rapid relocation and protection of inventory, equipment, and critical business assets to prevent further flood damage losses.',
      icon: 'shield-check',
    },
    {
      name: 'Multi-Shift Operations',
      description: 'Our crews work around the clock in shifts to maintain continuous extraction and drying, compressing restoration timelines.',
      icon: 'clock',
    },
    {
      name: 'Environmental Compliance',
      description: 'Flood cleanup waste is handled per EPA and local regulations, with proper documentation for environmental compliance requirements.',
      icon: 'check',
    },
    {
      name: 'Phased Reopening',
      description: 'We restore areas in priority order based on your business needs, allowing phased reopening of your most critical operational spaces.',
      icon: 'arrow-path',
    },
  ],
  contentParagraphs: [
    'Commercial flood damage presents challenges that residential restoration teams are not equipped to handle. The scale of water intrusion, the complexity of commercial building systems, and the financial pressure to resume operations require a restoration partner with industrial capabilities and business acumen. Our commercial flood cleanup division brings both to every project.',
    'Floodwater in commercial settings often carries additional hazards beyond residential floods. Manufacturing facilities may have chemical contamination. Retail environments may have damaged inventory requiring insurance documentation. Office buildings may have compromised electrical and HVAC systems. Our assessment teams identify all hazards before cleanup begins, ensuring worker safety and regulatory compliance throughout the project.',
    'Our phased approach prioritizes your most critical operational areas. We work with your management team to identify which spaces need to come back online first — whether that is customer-facing areas, production floors, or office space — and allocate resources accordingly. Containment barriers isolate active work zones so restored areas can be occupied while cleanup continues elsewhere in the building.',
    'Documentation for commercial flood claims is significantly more detailed than residential claims. We provide daily progress reports, equipment inventories, moisture readings, labor logs, and photo documentation formatted for commercial insurance adjusters. Our estimators are experienced with commercial policy structures including business interruption, extra expense, and ordinance and law coverage.',
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
    { name: 'Commercial Water Damage', description: 'Comprehensive commercial water damage restoration for all types of water intrusion events.' },
    { name: 'Large Loss Restoration', description: 'Enterprise-scale restoration for major flood events affecting large commercial properties.' },
    { name: 'Industrial Facilities', description: 'Specialized flood response for manufacturing and industrial environments with unique hazards.' },
    { name: 'Environmental Testing', description: 'Post-flood environmental assessment to verify safe conditions for employee re-occupancy.' },
    { name: 'Inventory Documentation', description: 'Detailed documentation of damaged inventory and assets for commercial insurance claims.' },
    { name: 'Business Interruption Claims', description: 'Expert support for documenting and processing business interruption insurance claims.' },
  ],
  faqs: [
    { question: 'How quickly can you mobilize for a large commercial flood?', answer: 'We maintain 24/7 dispatch and can have initial crews mobilized based on location, site access, weather, and available resources. For large-loss events requiring multiple crews, we coordinate additional resources through our regional response network. Response planning agreements can help define contacts, access points, and response priorities before an event.' },
    { question: 'Can you handle a 100,000+ square foot facility?', answer: 'Yes. Our commercial division is equipped for large-loss projects. We coordinate with regional and national restoration resources and plan staffing, equipment, and sequencing around the actual size and conditions of the project.' },
    { question: 'What about contaminated floodwater in our facility?', answer: 'We test floodwater to determine contamination levels and classify it per IICRC standards. Category 3 (contaminated) water requires additional safety protocols, PPE, and disposal procedures. For facilities with chemicals, we coordinate with hazmat teams and ensure environmental compliance.' },
    { question: 'How do you handle damaged inventory?', answer: 'We document all damaged inventory with photographs and detailed descriptions for your insurance claim. Salvageable inventory is relocated and protected. Non-salvageable inventory is documented before disposal. We coordinate with your inventory management team to maintain accurate records.' },
    { question: 'Do you handle the insurance claim?', answer: 'We provide complete documentation and work directly with your commercial insurance adjuster. Our estimators are experienced with commercial policy structures and can assist with business interruption, extra expense, and ordinance and law claims in addition to the physical damage claim.' },
    { question: 'Can you provide preventive measures after cleanup?', answer: 'Yes. We offer post-restoration assessments that identify vulnerabilities and recommend flood prevention measures including flood barriers, improved drainage, backflow prevention, sump pump systems, and water detection alarms for critical areas.' },
  ],
}

export default commercialFloodCleanup
