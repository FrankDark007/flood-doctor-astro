import type { ServiceData } from './types'

const commercialSewageCleanup: ServiceData = {
  slug: 'commercial-sewage-cleanup',
  name: 'Commercial Sewage Cleanup',
  tagline: 'OSHA-compliant industrial sewage remediation for commercial facilities.',
  description:
    'Sewage contamination in a commercial environment demands immediate, regulated response. Our hazmat-certified crews handle Category 3 black water remediation with full OSHA compliance, protecting your employees, tenants, and business from biological hazards.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
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
      name: 'Hazmat-Certified Response',
      description:
        'OSHA 40-hour HAZWOPER-certified technicians handle all sewage remediation with proper PPE, containment, and biohazard disposal protocols.',
      icon: 'shield-check',
    },
    {
      name: 'Biological Decontamination',
      description:
        'Hospital-grade antimicrobial treatments and ATP testing verify complete elimination of bacteria, viruses, and pathogens from all affected surfaces.',
      icon: 'beaker',
    },
    {
      name: 'Emergency Containment',
      description:
        'Immediate isolation of contaminated areas with physical barriers and negative air pressure prevents cross-contamination to clean zones of your facility.',
      icon: 'bolt',
    },
    {
      name: 'Regulated Waste Disposal',
      description:
        'Licensed transport and disposal of biohazardous waste materials in full compliance with EPA, state, and local environmental regulations.',
      icon: 'lock-closed',
    },
    {
      name: 'Air Quality Restoration',
      description:
        'HEPA-filtered air scrubbers and hydroxyl generators eliminate airborne pathogens and odors, restoring safe breathing conditions throughout your facility.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'Post-Remediation Verification',
      description:
        'Independent third-party testing confirms contaminant levels are below established thresholds before your facility is cleared for re-occupancy.',
      icon: 'check',
    },
  ],
  contentParagraphs: [
    'Commercial sewage contamination is one of the most hazardous events a facility can experience. Whether caused by a municipal sewer backup, septic system failure, or industrial waste overflow, Category 3 black water contains dangerous pathogens including E. coli, hepatitis, and other biological agents that pose serious health risks. OSHA regulations require specialized training, equipment, and protocols for any personnel working in sewage-contaminated environments — and failure to comply exposes your business to significant liability.',
    'Our commercial sewage cleanup teams are HAZWOPER-certified and equipped with Level B personal protective equipment, self-contained breathing apparatus for confined spaces, and medical monitoring protocols. Upon arrival, we establish hot, warm, and cold zones around the contamination area, erect physical containment barriers, and deploy negative air machines to prevent cross-contamination. No unauthorized personnel are permitted in the work zone until remediation is verified complete.',
    'The remediation process involves complete removal of all porous materials that contacted sewage — including carpet, pad, drywall, insulation, and ceiling tiles. Hard surfaces are cleaned, sanitized, and treated with EPA-registered antimicrobial agents. We use ATP bioluminescence testing throughout the process to verify pathogen elimination, and all waste materials are manifested and transported to licensed disposal facilities in accordance with environmental regulations.',
    'Beyond the physical remediation, we understand the regulatory and liability landscape surrounding commercial sewage events. Our documentation package includes chain-of-custody waste manifests, air monitoring results, surface sampling data, and third-party clearance testing reports. This comprehensive record protects your organization from future liability claims and satisfies the requirements of insurers, regulators, and occupational health authorities.',
  ],
  stats: [
    { label: 'HAZWOPER-Certified Technicians', value: '35+' },
    { label: 'Commercial Sewage Projects', value: '300+' },
    { label: 'Post-Remediation Pass Rate', value: '100%' },
    { label: 'Average Clearance Time', value: '48 hrs' },
  ],
  testimonial: {
    quote:
      'A sewer main backup flooded our ground-floor medical office with raw sewage. Flood Doctor had the area contained within an hour and handled everything — decontamination, waste disposal, even coordinating with the health department. We were back in operation in three days.',
    author: 'Dr. Amara Okafor',
    role: 'Practice Administrator, Valley Medical Associates',
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Commercial Flood Cleanup',
      description: 'Rapid extraction and decontamination for flood-affected commercial spaces, including contaminated floodwater.',
    },
    {
      name: 'Environmental Testing',
      description: 'Pre- and post-remediation sampling for biological contaminants, mold spores, and hazardous materials.',
    },
    {
      name: 'Indoor Air Quality Testing',
      description: 'Comprehensive air sampling to verify safe breathing conditions after sewage contamination events.',
    },
    {
      name: 'Commercial Mold Remediation',
      description: 'Sewage events often trigger rapid mold growth. Our teams address both contamination and mold simultaneously.',
    },
    {
      name: 'Healthcare Facility Restoration',
      description: 'HIPAA-compliant sewage remediation protocols specifically designed for medical and healthcare environments.',
    },
    {
      name: 'Odor Elimination',
      description: 'Advanced hydroxyl and ozone treatments that permanently eliminate sewage odors rather than masking them.',
    },
  ],
  faqs: [
    {
      question: 'Is commercial sewage cleanup regulated by OSHA?',
      answer:
        'Yes. OSHA requires that any workers exposed to sewage contamination have 40-hour HAZWOPER training, appropriate PPE, and medical monitoring. Our technicians maintain current HAZWOPER certification and follow a written health and safety plan for every sewage remediation project.',
    },
    {
      question: 'How do you verify that sewage contamination has been fully eliminated?',
      answer:
        'We use ATP bioluminescence testing on remediated surfaces to measure biological activity in real-time during the cleanup process. After remediation is complete, we engage independent third-party laboratories to collect surface and air samples that confirm contaminant levels are below established health thresholds.',
    },
    {
      question: 'What materials need to be removed after sewage contamination?',
      answer:
        'All porous materials that contacted sewage must be removed and disposed of as biohazardous waste. This includes carpet, carpet pad, drywall (typically cut 24 inches above the visible water line), insulation, ceiling tiles, and any absorbent contents. Non-porous hard surfaces can be cleaned and disinfected in place.',
    },
    {
      question: 'How do you prevent sewage contamination from spreading to other areas?',
      answer:
        'We immediately establish containment barriers using 6-mil polyethylene sheeting and create negative air pressure in the contaminated zone using HEPA-filtered air machines. This prevents airborne pathogens and odors from migrating to unaffected areas. All access points are sealed and marked with biohazard signage.',
    },
    {
      question: 'Can employees remain in unaffected areas of the building during cleanup?',
      answer:
        'In most cases, yes, provided proper containment is established and maintained. However, if sewage has entered the HVAC system or if air monitoring detects elevated pathogen levels in adjacent areas, we may recommend temporary evacuation of additional zones until air quality is restored.',
    },
    {
      question: 'How is sewage waste disposed of?',
      answer:
        'All sewage-contaminated materials are double-bagged in biohazard-rated containers, manifested as regulated waste, and transported by licensed haulers to approved disposal facilities. We provide complete chain-of-custody documentation for your records and regulatory compliance.',
    },
  ],
}

export default commercialSewageCleanup
