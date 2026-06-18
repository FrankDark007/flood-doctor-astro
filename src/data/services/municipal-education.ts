import type { ServiceData } from './types'

const municipalEducation: ServiceData = {
  slug: 'municipal-education',
  name: 'Municipal & Education',
  tagline: 'Restoration services for government buildings, schools, and public facilities.',
  description:
    'Government buildings, schools, and public facilities serve critical community functions that cannot be interrupted for long. Our municipal restoration team understands procurement requirements, public safety obligations, and the urgency of restoring essential community services.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    { name: 'Emergency Procurement Compliance', description: 'We understand government emergency procurement procedures and can provide documentation for emergency declarations that bypass standard bidding requirements.', icon: 'check' },
    { name: 'Student & Staff Safety', description: 'School restoration follows EPA, OSHA, and state education department guidelines for safe learning environments, including lead, asbestos, and air quality protocols.', icon: 'shield-check' },
    { name: 'Accelerated Summer Scheduling', description: 'School restoration projects are designed to complete during summer breaks, minimizing impact on academic schedules and student displacement.', icon: 'clock' },
    { name: 'Public Meeting Support', description: 'We provide clear, non-technical presentations and documentation for school board meetings, city council sessions, and community updates.', icon: 'arrow-path' },
    { name: 'Grant & FEMA Documentation', description: 'Detailed documentation formatted for FEMA Public Assistance applications, state emergency management grants, and municipal insurance claims.', icon: 'finger-print' },
    { name: 'ADA Compliance', description: 'All reconstruction meets current ADA accessibility standards, with upgrades where required by building codes triggered by the restoration scope.', icon: 'home-modern' },
  ],
  contentParagraphs: [
    'Municipal buildings and schools serve essential community functions — from public safety and administration to education and recreation. When water damage, fire, or mold impacts these facilities, the community feels the disruption immediately. Our municipal and education restoration team combines technical restoration expertise with an understanding of government operations, procurement requirements, and public accountability.',
    'School restoration presents particular urgency and sensitivity. Parents and community members expect rapid, thorough restoration that ensures student safety. Older school buildings may contain lead paint and asbestos that must be managed during any renovation work. Our teams include certified lead and asbestos inspectors who assess these hazards before restoration begins, ensuring all work complies with EPA AHERA requirements and state education department standards.',
    'We understand that government procurement operates differently than private sector purchasing. For emergency situations, we provide the documentation needed for emergency declarations that allow municipalities to engage restoration services without lengthy bidding processes. For non-emergency work, we can participate in competitive bidding and have experience with prevailing wage requirements, certified payroll, and bonding obligations.',
    'Documentation for municipal projects goes beyond standard insurance claims. We provide reports suitable for city council and school board presentations, FEMA Public Assistance applications, state emergency management grant requests, and public records requirements. Our project documentation is designed to withstand public scrutiny and audit, protecting both the facility and the officials responsible for restoration decisions.',
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
    { name: 'Commercial Water Damage', description: 'Water damage restoration scaled for large public buildings and school campuses.' },
    { name: 'Environmental Testing', description: 'Lead, asbestos, and air quality testing required for older public buildings and schools.' },
    { name: 'Commercial Fire Restoration', description: 'Fire damage restoration meeting the urgency requirements of public facility schedules.' },
    { name: 'Indoor Air Quality', description: 'Air quality testing and remediation for educational environments with vulnerable populations.' },
    { name: 'Large Loss Restoration', description: 'Complex project management for major municipal and school facility restoration projects.' },
    { name: 'ADA Compliance Upgrades', description: 'Accessibility improvements required during restoration of public and educational facilities.' },
  ],
  faqs: [
    { question: 'Do you work with government procurement requirements?', answer: 'Yes. We understand emergency procurement procedures, competitive bidding processes, prevailing wage requirements, certified payroll, and performance bonding. We can provide the documentation needed for emergency declarations and support standard procurement processes for non-emergency work.' },
    { question: 'Can you complete school restoration before the academic year starts?', answer: 'We prioritize school projects to meet academic calendars. We have a 100% track record of completing school restorations on time. For large projects, we bring in additional crews and work extended hours to meet deadlines. We provide weekly progress reports to superintendents and school boards.' },
    { question: 'How do you handle asbestos and lead in older buildings?', answer: 'Our teams include certified asbestos and lead inspectors. We assess for these hazards before any demolition or disturbance work begins. If hazardous materials are found, we engage licensed abatement contractors and ensure full compliance with EPA, OSHA, and state regulations.' },
    { question: 'Can you help with FEMA documentation?', answer: 'Yes. We have extensive experience with FEMA Public Assistance applications. We document damage, restoration work, and costs in the format FEMA requires, including project worksheets and supporting documentation. We can also assist with state emergency management grant applications.' },
    { question: 'What about air quality in schools?', answer: 'Student health is paramount. We conduct pre and post-restoration air quality testing and follow EPA guidelines for safe school environments. For mold-related projects, we perform clearance testing before any students or staff return to restored areas.' },
    { question: 'Do you provide prevailing wage documentation?', answer: 'Yes. For projects subject to prevailing wage requirements, we maintain certified payroll records and provide all required documentation for labor compliance. Our pricing structures can accommodate Davis-Bacon and state prevailing wage requirements.' },
  ],
}

export default municipalEducation
