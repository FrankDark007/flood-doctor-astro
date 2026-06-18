import type { ServiceData } from './types'

const commercialMoldRemediation: ServiceData = {
  slug: 'commercial-mold-remediation',
  name: 'Commercial Mold Remediation',
  tagline: 'Large-scale mold remediation meeting EPA, OSHA, and industry standards.',
  description:
    'Mold in commercial buildings affects employee health, triggers regulatory requirements, and can lead to significant liability. Our commercial mold team handles large-scale remediation with minimal business disruption, full regulatory compliance, and independent verification testing.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    { name: 'Industrial Hygienist Coordination', description: 'We work with certified industrial hygienists (CIH) for assessment, protocol development, and independent post-remediation verification.', icon: 'beaker' },
    { name: 'HVAC Mold Remediation', description: 'Commercial HVAC systems spread mold throughout buildings. We remediate ductwork, air handlers, coils, and plenums to stop systemic contamination.', icon: 'cog-6-tooth' },
    { name: 'Multi-Zone Containment', description: 'Engineered containment systems isolate remediation zones while allowing adjacent spaces to remain operational and occupied.', icon: 'lock-closed' },
    { name: 'Large-Area Remediation', description: 'Our teams are equipped for large-scale mold removal from commercial spaces including office buildings, warehouses, and institutional facilities.', icon: 'wrench-screwdriver' },
    { name: 'OSHA Compliance', description: 'All work complies with OSHA workplace safety requirements including employee notification, air monitoring, and exposure documentation.', icon: 'shield-check' },
    { name: 'Clearance Verification', description: 'Independent third-party air and surface testing by a certified industrial hygienist verifies successful remediation before containment removal.', icon: 'check' },
  ],
  contentParagraphs: [
    'Mold contamination in commercial buildings presents unique challenges compared to residential settings. Larger HVAC systems can distribute spores throughout multi-story buildings. Open floor plans and shared air spaces increase exposure risk for employees. Regulatory requirements including OSHA, EPA, and sometimes state-specific mold regulations add compliance complexity.',
    'Commercial mold remediation always begins with a professional assessment by a certified industrial hygienist (CIH). The CIH conducts visual inspection, moisture mapping, and air sampling to determine the extent and species of mold contamination. Based on these findings, they develop a remediation protocol that our team follows precisely.',
    'Our remediation teams work within engineered containment that maintains negative air pressure relative to surrounding spaces. HEPA air scrubbers run continuously to capture spores disturbed during removal. Contaminated materials are removed, surfaces are cleaned and treated, and the HVAC system serving the affected area is thoroughly cleaned to prevent recontamination.',
    'Post-remediation verification is performed by the same independent CIH who wrote the protocol. This third-party clearance testing compares post-remediation air samples to baseline samples from unaffected areas. Only after the CIH issues a clearance report do we remove containment and release the space for re-occupancy.',
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
    { name: 'Indoor Air Quality', description: 'Comprehensive IAQ testing and monitoring for commercial buildings with mold concerns.' },
    { name: 'Commercial Water Damage', description: 'Addressing the water damage that causes mold growth in commercial properties.' },
    { name: 'HVAC Cleaning', description: 'Complete commercial HVAC system cleaning to eliminate mold from air distribution systems.' },
    { name: 'Environmental Testing', description: 'Pre and post-remediation environmental testing by certified industrial hygienists.' },
    { name: 'Moisture Mapping', description: 'Scientific moisture assessment to identify the water sources feeding commercial mold growth.' },
    { name: 'Tenant Communication', description: 'Professional documentation and communication support for tenant notification requirements.' },
  ],
  faqs: [
    { question: 'Do we need an industrial hygienist?', answer: 'For commercial mold remediation, engaging a certified industrial hygienist is best practice and required by regulation in many states. The CIH provides independent assessment, develops the remediation protocol, and performs post-remediation clearance testing.' },
    { question: 'Can employees work during mold remediation?', answer: 'Employees cannot occupy areas under active remediation. However, our containment systems allow unaffected areas of the building to remain operational. We schedule noisy work after business hours when possible.' },
    { question: 'What are our legal obligations regarding employee mold exposure?', answer: 'OSHA requires employers to provide a safe workplace. If employees report health symptoms potentially related to mold, employers should investigate promptly, remediate any contamination found, and document their response.' },
    { question: 'How long does commercial mold remediation take?', answer: 'A single office suite may take 3-5 days. Multiple floors may take 2-4 weeks. Projects involving extensive HVAC remediation may take longer. We work in phases to restore areas progressively.' },
    { question: 'Does commercial insurance cover mold?', answer: 'Coverage varies significantly by policy. Many commercial policies exclude mold or limit coverage. Mold resulting from a covered water damage event has better coverage prospects. We help document the connection between water events and mold growth.' },
    { question: 'What about tenant complaints and liability?', answer: 'We provide clearance reports and documentation suitable for tenant communications, demonstrating that the building has been professionally remediated and independently verified as safe.' },
  ],
}

export default commercialMoldRemediation
