import type { ServiceData } from './types'

const commercialSewageCleanup: ServiceData = {
  slug: 'commercial-sewage-cleanup',
  name: 'Commercial Sewage Cleanup',
  tagline: 'OSHA-compliant sewage remediation for commercial and institutional facilities.',
  description:
    'Sewage contamination in a commercial facility creates health hazards for employees and customers, regulatory exposure, and potential liability. Our commercial sewage team provides rapid, compliant remediation that protects your people and your business.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    { name: 'OSHA-Compliant Protocols', description: 'All work follows OSHA bloodborne pathogen standards and HAZWOPER requirements, with full documentation for regulatory compliance.', icon: 'shield-check' },
    { name: 'Employee Safety Coordination', description: 'We coordinate employee evacuation, restricted access zones, and re-occupancy clearance with your HR and safety teams.', icon: 'lock-closed' },
    { name: 'Industrial Extraction', description: 'Commercial-grade pumps and vacuum systems handle large-volume sewage extraction from expansive commercial spaces.', icon: 'bolt' },
    { name: 'Biomedical Waste Disposal', description: 'All contaminated materials are manifested, transported, and disposed of through licensed biomedical waste contractors per EPA regulations.', icon: 'wrench-screwdriver' },
    { name: 'Clearance Testing', description: 'ATP surface testing and air quality sampling verify decontamination meets OSHA workplace exposure limits before re-occupancy.', icon: 'beaker' },
    { name: 'Liability Documentation', description: 'Complete chain-of-custody documentation, clearance certificates, and compliance records protect you from future liability claims.', icon: 'check' },
  ],
  contentParagraphs: [
    'Sewage contamination in commercial facilities creates a convergence of health risks, regulatory requirements, and business disruption that demands specialized expertise. OSHA workplace standards, EPA waste disposal regulations, and local health department requirements all apply — and non-compliance can result in fines, lawsuits, and reputational damage far exceeding the cost of proper remediation.',
    'Our commercial sewage cleanup protocol begins with immediate area isolation and employee notification. We establish restricted access zones, deploy containment barriers, and set up negative air pressure to prevent cross-contamination. All technicians wear Level B or C PPE depending on contamination levels, and our safety officer monitors conditions throughout the project.',
    'Extraction and demolition proceed under strict protocols. Contaminated water is extracted using enclosed vacuum systems that prevent aerosolization of pathogens. All porous materials that contacted sewage are removed, double-bagged in biohazard containers, and transported to licensed disposal facilities with proper manifesting and chain-of-custody documentation.',
    'Before re-occupancy, we perform comprehensive clearance testing. ATP swab tests verify surface decontamination levels, air sampling confirms safe airborne pathogen levels, and all results are documented in a clearance report. This documentation protects your organization from worker compensation claims, tenant disputes, and regulatory enforcement actions.',
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
    { name: 'Commercial Water Damage', description: 'Comprehensive commercial water damage restoration including sewage-related water intrusion.' },
    { name: 'Commercial Mold Remediation', description: 'Mold remediation following sewage events in commercial environments.' },
    { name: 'Environmental Testing', description: 'Pre and post-remediation environmental testing for regulatory compliance.' },
    { name: 'Odor Removal', description: 'Commercial-scale deodorization to eliminate sewage odors from large facilities.' },
    { name: 'OSHA Compliance', description: 'Full regulatory compliance documentation for workplace sewage contamination events.' },
    { name: 'Health Department Coordination', description: 'Liaison with local health departments for food service and healthcare facility sewage events.' },
  ],
  faqs: [
    { question: 'What are the OSHA requirements for commercial sewage cleanup?', answer: 'OSHA requires employers to protect workers from bloodborne pathogens and biological hazards. This includes proper PPE, HAZWOPER training for cleanup workers, exposure control plans, and post-incident medical monitoring options. We handle all of this and provide compliance documentation.' },
    { question: 'Do we need to close our business during cleanup?', answer: 'The affected area must be closed until clearance testing confirms safe conditions. However, we establish containment that often allows unaffected areas to remain operational. For restaurants and food service, the health department may require a full closure and re-inspection before reopening.' },
    { question: 'Who notifies the health department?', answer: 'For food service, healthcare, and childcare facilities, health department notification is typically required. We can coordinate this notification and work with inspectors to ensure all requirements are met for reopening.' },
    { question: 'What documentation do we receive?', answer: 'You receive a complete package including the scope of work, waste manifests, clearance test results, compliance certifications, and a detailed project summary. This documentation protects you from liability claims and satisfies insurance, regulatory, and tenant requirements.' },
    { question: 'Can employees file workers comp for sewage exposure?', answer: 'Employees exposed to sewage before containment and cleanup may be eligible for workers compensation medical monitoring. Our documentation helps establish the timeline and extent of exposure. Prompt, professional cleanup reduces both exposure risk and potential claims.' },
    { question: 'How do you dispose of contaminated materials?', answer: 'All contaminated materials are classified as regulated medical waste and disposed of through licensed biomedical waste contractors. Materials are double-bagged in biohazard containers, manifested with chain-of-custody documentation, and transported to licensed treatment and disposal facilities.' },
  ],
}

export default commercialSewageCleanup
