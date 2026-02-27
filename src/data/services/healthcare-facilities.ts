import type { ServiceData } from './types'

const healthcareFacilities: ServiceData = {
  slug: 'healthcare-facilities',
  name: 'Healthcare Facility Restoration',
  tagline: 'HIPAA-compliant restoration for hospitals, clinics, and medical offices.',
  description:
    'Healthcare facilities require restoration protocols that protect patient safety, maintain regulatory compliance, and minimize disruption to critical medical services. Our healthcare division is trained in HIPAA, ICRA, and infection control procedures specific to medical environments.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
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
      name: 'HIPAA-Compliant Protocols',
      description:
        'All technicians are HIPAA-trained and follow strict protocols for handling patient records, medical equipment, and protected health information during restoration work.',
      icon: 'lock-closed',
    },
    {
      name: 'ICRA Compliance',
      description:
        'Infection Control Risk Assessment procedures guide every project, with containment strategies designed to prevent airborne contamination in clinical areas.',
      icon: 'shield-check',
    },
    {
      name: 'Critical Systems Protection',
      description:
        'Specialized safeguards for medical gas lines, emergency power systems, nurse call systems, and life-safety infrastructure during restoration activities.',
      icon: 'server',
    },
    {
      name: 'Sterile Environment Maintenance',
      description:
        'HEPA-filtered containment and positive/negative pressure differentials maintain sterile conditions in operating rooms, labs, and patient care areas adjacent to work zones.',
      icon: 'beaker',
    },
    {
      name: 'Minimal Disruption Scheduling',
      description:
        'Flexible scheduling around patient care operations, surgical schedules, and staff shifts to minimize impact on healthcare delivery.',
      icon: 'clock',
    },
    {
      name: 'Regulatory Documentation',
      description:
        'Comprehensive documentation packages that satisfy Joint Commission, state health department, and CMS survey requirements for restoration activities in licensed facilities.',
      icon: 'check',
    },
  ],
  contentParagraphs: [
    'Restoration work in healthcare facilities operates under a completely different set of rules than standard commercial restoration. Patients with compromised immune systems, sterile surgical suites, pharmaceutical storage areas, and sensitive medical equipment all demand protocols that go far beyond conventional water damage or fire restoration. Our healthcare facility division employs technicians trained in ICRA procedures, HIPAA compliance, and the unique operational requirements of hospitals, surgical centers, and clinical environments.',
    'Infection Control Risk Assessment is the foundation of every healthcare restoration project we undertake. Before any work begins, we collaborate with the facility\'s infection control team to classify the project risk level, identify adjacent patient populations, and design containment strategies that maintain the required air quality and pressure relationships. HEPA-filtered barriers, anteroom construction, and continuous particulate monitoring protect immunocompromised patients and sterile areas throughout the restoration process.',
    'HIPAA compliance during restoration adds another layer of complexity that most restoration companies are not equipped to handle. Our crews are trained to recognize and protect patient health information in any form — paper records, computer screens, whiteboard notes, and labeled specimens. We implement secure handling, chain-of-custody documentation, and supervised disposal procedures for any PHI encountered during demolition or content manipulation.',
    'Healthcare facilities cannot simply shut down during restoration. Emergency departments, ICUs, and inpatient units must continue operating regardless of the damage event. Our project managers work closely with hospital administration, facilities engineering, and nursing leadership to develop restoration plans that maintain life-safety systems, preserve critical care pathways, and accommodate patient census fluctuations throughout the project duration.',
  ],
  stats: [
    { label: 'Healthcare Projects Completed', value: '200+' },
    { label: 'HIPAA Violations During Restoration', value: 'Zero' },
    { label: 'ICRA Compliance Rate', value: '100%' },
    { label: 'Avg Patient Care Disruption', value: '<4 hrs' },
  ],
  testimonial: {
    quote:
      'When a water main break flooded the radiology wing of our hospital, Flood Doctor had ICRA-compliant containment up within hours and coordinated every step with our infection control and facilities teams. They understand healthcare environments in a way no other restoration company we have worked with does.',
    author: 'Patricia Langston, RN',
    role: 'Director of Facilities, St. Andrew Regional Medical Center',
    imageUrl:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Indoor Air Quality Testing',
      description: 'Particulate counting and microbial air sampling to verify safe conditions in patient care areas during and after restoration.',
    },
    {
      name: 'Commercial Mold Remediation',
      description: 'Healthcare-grade mold remediation with ICRA containment protocols for hospitals and clinical environments.',
    },
    {
      name: 'Commercial Sewage Cleanup',
      description: 'Biohazard remediation in healthcare settings with heightened infection control requirements.',
    },
    {
      name: 'Environmental Testing',
      description: 'Pre-renovation hazardous materials surveys required before disturbing building materials in older healthcare facilities.',
    },
    {
      name: 'Commercial Water Damage Restoration',
      description: 'Rapid water extraction and drying with containment to protect sensitive medical equipment and patient areas.',
    },
    {
      name: 'Moisture Mapping & Consulting',
      description: 'Detailed moisture profiling behind walls and above ceilings where hidden water damage threatens healthcare environments.',
    },
    {
      name: 'Commercial Fire & Smoke Cleanup',
      description: 'Fire and smoke restoration in healthcare facilities with additional protocols for medical gas systems and life safety.',
    },
  ],
  faqs: [
    {
      question: 'Are your technicians HIPAA trained?',
      answer:
        'Yes. Every technician assigned to healthcare projects completes HIPAA privacy and security awareness training, with annual refresher courses. We maintain training records and can provide documentation to your compliance officer upon request.',
    },
    {
      question: 'How do you maintain infection control during restoration work?',
      answer:
        'We follow ICRA protocols that match the risk level of adjacent patient areas. This includes HEPA-filtered containment barriers, negative air pressure in work zones, anteroom construction for worker entry/exit, continuous particulate monitoring, and daily inspections by our ICRA-trained project manager.',
    },
    {
      question: 'Can you work in occupied patient care areas?',
      answer:
        'Yes, with appropriate controls. For low-risk work adjacent to general patient areas, standard containment is sufficient. For work near immunocompromised populations (oncology, NICU, transplant units), we implement Class IV ICRA containment with continuous monitoring and facility infection control team oversight.',
    },
    {
      question: 'How do you protect sensitive medical equipment during restoration?',
      answer:
        'Medical equipment in the work zone is inventoried, disconnected by authorized personnel, and either relocated or protected in place with sealed coverings. We coordinate with biomedical engineering to ensure proper disconnection and reconnection procedures, and all equipment is tested before being returned to clinical service.',
    },
    {
      question: 'What documentation do you provide for Joint Commission surveys?',
      answer:
        'We provide a complete project file including ICRA classification, containment specifications, daily air monitoring logs, infection control barrier inspection records, worker training certifications, and project completion reports. This documentation satisfies Joint Commission EC and IC chapter requirements for construction and renovation activities.',
    },
    {
      question: 'Can you handle emergency restoration without disrupting the emergency department?',
      answer:
        'Yes. Our healthcare team has extensive experience working around active emergency departments. We establish isolated containment pathways, schedule noisy work during lower-census periods, and maintain constant communication with ED charge nurses and facilities staff to adapt our work plan in real-time to patient care needs.',
    },
  ],
}

export default healthcareFacilities
