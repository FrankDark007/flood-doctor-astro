import type { ServiceData } from './types'

const healthcareFacilities: ServiceData = {
  slug: 'healthcare-facilities',
  name: 'Healthcare Facilities',
  tagline: 'HIPAA-compliant restoration for hospitals, clinics, and medical offices.',
  description:
    'Healthcare facility restoration requires specialized protocols for infection control, HIPAA compliance, patient safety, and regulatory requirements. Our healthcare restoration team understands Joint Commission standards, CMS requirements, and the critical importance of maintaining operations during restoration.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    { name: 'HIPAA-Compliant Operations', description: 'All personnel are HIPAA-trained. We maintain strict protocols for handling patient records, medical equipment, and protected health information during restoration.', icon: 'lock-closed' },
    { name: 'Infection Control Barriers', description: 'ICRA (Infection Control Risk Assessment) protocols guide our containment strategies, preventing airborne pathogen spread during construction and remediation.', icon: 'shield-check' },
    { name: 'Medical Equipment Protection', description: 'Specialized handling of diagnostic equipment, surgical instruments, and sensitive medical devices with manufacturer-approved cleaning protocols.', icon: 'beaker' },
    { name: 'Continuous Operations Support', description: 'We design restoration plans that maintain critical healthcare operations, coordinating patient relocations and service diversions with your clinical team.', icon: 'clock' },
    { name: 'Regulatory Compliance', description: 'Joint Commission, CMS, and state health department requirements are integrated into every restoration plan to maintain your facility certifications.', icon: 'check' },
    { name: 'Pharmaceutical Protection', description: 'Temperature-controlled medication storage, chain-of-custody documentation for controlled substances, and proper disposal of compromised pharmaceuticals.', icon: 'finger-print' },
  ],
  contentParagraphs: [
    'Healthcare facilities present the most complex restoration environment in the industry. Patient safety, infection control, HIPAA compliance, and regulatory requirements add layers of complexity that general commercial restoration companies are not equipped to handle. A water damage event in a hospital operating suite or pharmacy requires fundamentally different protocols than the same event in an office building.',
    'Our healthcare restoration team includes personnel specifically trained in ICRA (Infection Control Risk Assessment) protocols. Before any work begins, we conduct a risk assessment with your infection control department to classify the project area and determine the appropriate containment and air handling measures. This ensures our restoration work does not introduce infection risks to vulnerable patient populations.',
    'HIPAA compliance is woven into every aspect of our healthcare restoration operations. Our technicians are trained to recognize and protect patient health information. Medical records, whether physical or on damaged electronic media, are handled under strict chain-of-custody protocols. Equipment containing PHI is restored on-site when possible, and any off-site work is performed under business associate agreements.',
    'We understand that healthcare facilities cannot simply close during restoration. Our project plans are designed to maintain critical services by working in phases, installing containment barriers that meet ICRA standards, and scheduling disruptive work during off-peak hours. We coordinate directly with your facilities management, infection control, and clinical operations teams to minimize impact on patient care.',
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
    { name: 'Commercial Water Damage', description: 'Large-scale water damage restoration adapted for healthcare facility requirements.' },
    { name: 'Indoor Air Quality', description: 'Critical air quality testing and monitoring for healthcare environments during and after restoration.' },
    { name: 'Environmental Testing', description: 'Environmental testing for healthcare facilities with strict regulatory requirements.' },
    { name: 'Commercial Mold Remediation', description: 'Mold remediation meeting the elevated standards required for healthcare environments.' },
    { name: 'HVAC Decontamination', description: 'HVAC system cleaning critical for maintaining healthcare facility air quality standards.' },
    { name: 'Emergency Planning', description: 'documented emergency response planning for healthcare facilities to minimize patient impact.' },
  ],
  faqs: [
    { question: 'Are your crews HIPAA trained?', answer: 'Yes. All personnel assigned to healthcare projects complete HIPAA training and sign confidentiality agreements before entering your facility. We maintain strict protocols for handling any materials that may contain protected health information.' },
    { question: 'Can you work in active patient care areas?', answer: 'Yes, with appropriate ICRA containment. We assess each area for infection control risk class and install containment systems that meet or exceed the requirements for that classification. Work in critical areas like operating rooms and ICUs requires the highest level of containment and air handling.' },
    { question: 'How do you handle medical equipment?', answer: 'We follow manufacturer guidelines for cleaning and restoration. Equipment with sensitive electronics receives anti-corrosion treatment and controlled drying. For equipment under warranty or service contracts, we coordinate with your equipment vendors to ensure warranty-compliant restoration.' },
    { question: 'What about our Joint Commission accreditation?', answer: 'We understand Joint Commission requirements and design our restoration work to maintain your accreditation standards. Our documentation includes all elements needed for regulatory compliance, and we can participate in any survey-related discussions about the restoration event.' },
    { question: 'Can you maintain negative pressure during remediation?', answer: 'Yes. Our ICRA containment systems include HEPA-filtered negative air machines that maintain required pressure differentials between work zones and adjacent patient areas. We monitor and document pressure differentials continuously throughout the project.' },
    { question: 'Do you handle pharmaceutical areas?', answer: 'Yes. We understand the requirements for pharmaceutical storage areas including temperature monitoring, chain-of-custody for controlled substances, and proper disposal of compromised medications. We coordinate with your pharmacy team and can assist with state pharmacy board notifications if required.' },
  ],
}

export default healthcareFacilities
