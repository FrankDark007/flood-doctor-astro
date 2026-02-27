import type { ServiceData } from './types'

const environmentalTesting: ServiceData = {
  slug: 'environmental-testing',
  name: 'Environmental Testing Services',
  tagline: 'Accredited testing for asbestos, lead, mold, and hazardous materials.',
  description:
    'Before restoration work begins — and after it ends — environmental testing provides the data needed to protect workers, occupants, and your liability exposure. Our accredited testing services cover asbestos, lead paint, mold, bacteria, VOCs, and other regulated hazardous materials.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
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
      name: 'Asbestos Surveys & Testing',
      description:
        'AHERA-accredited inspectors collect bulk samples of suspect materials analyzed by NVLAP-accredited laboratories using PLM and TEM methods for definitive asbestos identification.',
      icon: 'beaker',
    },
    {
      name: 'Lead Paint Assessment',
      description:
        'EPA RRP-certified lead inspectors use XRF analyzers and laboratory analysis to identify lead-based paint in pre-1978 structures before renovation or restoration activities.',
      icon: 'shield-check',
    },
    {
      name: 'Mold Sampling & Analysis',
      description:
        'Air, surface, and bulk sampling for mold species identification and quantification, analyzed by AIHA-accredited laboratories with interpretation by certified industrial hygienists.',
      icon: 'finger-print',
    },
    {
      name: 'Hazardous Materials Surveys',
      description:
        'Comprehensive pre-renovation and pre-demolition surveys identify all regulated materials — asbestos, lead, PCBs, mercury, and others — before work begins.',
      icon: 'lock-closed',
    },
    {
      name: 'Post-Abatement Clearance',
      description:
        'Independent clearance testing after asbestos abatement, lead remediation, or mold removal verifies that contaminant levels meet regulatory standards for re-occupancy.',
      icon: 'check',
    },
    {
      name: 'Rapid Turnaround Results',
      description:
        'Same-day and next-day laboratory analysis available for time-sensitive projects where waiting for standard turnaround would delay critical restoration decisions.',
      icon: 'clock',
    },
  ],
  contentParagraphs: [
    'Environmental testing is not optional — it is a legal and ethical necessity that protects workers, building occupants, and property owners from exposure to hazardous materials. Before any restoration project that involves demolition, cutting, or disturbing building materials, federal and state regulations require testing for asbestos-containing materials, lead-based paint, and other regulated substances. Failure to test exposes contractors and building owners to EPA enforcement, OSHA citations, and personal injury litigation.',
    'Our environmental testing team includes AHERA-accredited asbestos inspectors, EPA-certified lead inspectors, and certified industrial hygienists who specialize in building-related environmental hazards. We collect samples using EPA and NIOSH-approved methodologies and submit them to NVLAP and AIHA-accredited laboratories for analysis. Results are delivered with clear, actionable interpretations — not just raw data — so you know exactly what the findings mean for your project.',
    'Timing is critical in restoration environments. A standard asbestos analysis can take 5-7 business days, but a restoration project cannot wait a week for test results while water-damaged materials continue to deteriorate. Our laboratory partnerships include same-day and next-day turnaround options that provide reliable results in hours rather than days. This rapid turnaround keeps restoration projects on schedule without bypassing required environmental testing.',
    'We also provide post-remediation clearance testing — the independent verification that abatement or remediation work has been successful. Whether the project involved asbestos abatement, lead paint removal, or mold remediation, clearance testing by a party independent of the remediation contractor is often required by regulation and always recommended as a matter of due diligence. Our clearance reports provide the documentation you need for regulatory compliance, insurance closure, and occupant peace of mind.',
  ],
  stats: [
    { label: 'Environmental Tests Performed', value: '12,000+' },
    { label: 'Accredited Lab Partners', value: '8' },
    { label: 'Same-Day Results Available', value: 'Yes' },
    { label: 'Certified Environmental Inspectors', value: '20+' },
  ],
  testimonial: {
    quote:
      'During a water damage restoration in our 1960s office building, Flood Doctor flagged potential asbestos in the floor tiles and had lab results back in 18 hours. Their environmental testing caught what could have been a serious exposure incident and regulatory violation. Absolutely essential service.',
    author: 'David Greenwald',
    role: 'Property Manager, Heritage Commercial Partners',
    imageUrl:
      'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Indoor Air Quality Testing',
      description: 'Comprehensive air sampling for mold, bacteria, VOCs, and particulates to assess building health.',
    },
    {
      name: 'Moisture Mapping & Consulting',
      description: 'Scientific moisture assessment that often reveals conditions requiring environmental testing.',
    },
    {
      name: 'Commercial Mold Remediation',
      description: 'Professional mold removal following positive mold sampling results, with post-remediation clearance.',
    },
    {
      name: 'Healthcare Facility Restoration',
      description: 'Environmental testing for healthcare facilities where hazardous material exposure has heightened consequences.',
    },
    {
      name: 'Municipal & Education Restoration',
      description: 'Pre-renovation hazardous materials surveys required for schools and government buildings.',
    },
    {
      name: 'Large Loss Restoration',
      description: 'Environmental testing and monitoring for large-scale projects involving demolition of older building materials.',
    },
    {
      name: 'Commercial Sewage Cleanup',
      description: 'Biological and chemical testing of sewage contamination to guide appropriate remediation protocols.',
    },
  ],
  faqs: [
    {
      question: 'When is asbestos testing required before restoration work?',
      answer:
        'Federal NESHAP regulations require asbestos testing before any renovation or demolition that will disturb building materials in structures built before 1981. Many states have stricter cutoff dates. Any suspect material — floor tiles, pipe insulation, joint compound, roofing, texture coats — must be tested before it can be disturbed.',
    },
    {
      question: 'How quickly can you get test results?',
      answer:
        'Standard turnaround is 3-5 business days. Rush service provides results in 24 hours. For emergency situations, same-day results are available for asbestos PLM analysis and mold spore trap analysis. We maintain standing accounts with multiple accredited laboratories to ensure rapid turnaround even during high-demand periods.',
    },
    {
      question: 'What happens if asbestos or lead is found during a restoration project?',
      answer:
        'Work in the affected area must stop immediately. The area is isolated to prevent fiber or dust release, and a licensed abatement contractor removes the regulated material before restoration work can resume. We can coordinate abatement services and provide clearance testing afterward. Early testing prevents these costly mid-project shutdowns.',
    },
    {
      question: 'Do we need environmental testing for a building built after 2000?',
      answer:
        'For asbestos and lead, buildings constructed after the late 1990s are generally low risk. However, mold testing may be warranted regardless of building age if water damage or occupant health complaints are present. Additionally, some newer construction materials may contain other regulated substances that require testing in specific circumstances.',
    },
    {
      question: 'Who should perform the clearance testing after remediation?',
      answer:
        'Best practice and most state regulations require that clearance testing be performed by a party independent of the contractor who performed the remediation. This separation ensures objective results. Our environmental consultants regularly provide clearance testing for projects performed by other contractors.',
    },
    {
      question: 'What laboratory accreditations should I look for?',
      answer:
        'For asbestos analysis, laboratories should hold NVLAP accreditation. For mold and bacteria, AIHA EMPAT accreditation is the standard. For lead, NLLAP recognition is required. All of our partner laboratories maintain the applicable accreditations, and we can provide accreditation documentation upon request.',
    },
  ],
}

export default environmentalTesting
