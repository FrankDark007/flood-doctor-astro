import type { ServiceData } from './types'

const environmentalTesting: ServiceData = {
  slug: 'environmental-testing',
  name: 'Environmental Testing',
  tagline: 'Certified environmental testing for asbestos, lead, mold, and hazardous materials.',
  description:
    'Before any renovation or restoration project in older buildings, environmental testing is essential. Our certified inspectors test for asbestos, lead paint, mold, radon, and other hazardous materials, providing the documentation needed for safe work practices and regulatory compliance.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1581093458791-9d42e3c2fd45?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
  features: [
    { name: 'Asbestos Inspection', description: 'Certified inspectors identify and sample suspect asbestos-containing materials (ACM) in buildings constructed before 1980, with laboratory analysis by accredited labs.', icon: 'beaker' },
    { name: 'Lead Paint Testing', description: 'XRF analyzers and laboratory analysis identify lead-based paint in pre-1978 buildings, essential for compliance with EPA RRP Rule and HUD requirements.', icon: 'shield-check' },
    { name: 'Mold Assessment', description: 'Air and surface sampling identifies mold species and quantifies contamination levels, with reports from AIHA-accredited laboratories.', icon: 'cloud-arrow-up' },
    { name: 'Water Quality Testing', description: 'Testing for bacteria, chemicals, heavy metals, and other contaminants in water affected by flooding, plumbing failures, or contamination events.', icon: 'wrench-screwdriver' },
    { name: 'Soil & Material Testing', description: 'Environmental sampling of soil, building materials, and settled dust for contamination assessment during restoration and demolition projects.', icon: 'finger-print' },
    { name: 'Accredited Laboratory Analysis', description: 'All samples are analyzed by AIHA, NVLAP, or NIST-accredited laboratories with results documented in professional reports.', icon: 'check' },
  ],
  contentParagraphs: [
    'Environmental testing is a critical first step in any restoration or renovation project, particularly in buildings constructed before 1980. Disturbing asbestos-containing materials, lead-based paint, or other hazardous substances without proper testing and protocols can create serious health hazards for workers and occupants, and expose property owners to significant regulatory liability.',
    'Our environmental testing services cover the full range of hazardous materials commonly found in buildings. Asbestos was widely used in insulation, floor tiles, joint compound, roofing, and pipe wrap until the late 1970s. Lead-based paint was standard until 1978. Both materials are safe when undisturbed but become hazardous when disturbed during renovation, restoration, or demolition work. Testing identifies these materials before work begins.',
    'We use state-of-the-art testing methods including XRF (X-ray fluorescence) analyzers for real-time lead paint screening, PLM (polarized light microscopy) and TEM (transmission electron microscopy) for asbestos fiber identification, and both viable and non-viable methods for mold sampling. All analytical work is performed by laboratories accredited by AIHA, NVLAP, or other recognized accrediting bodies.',
    'Our testing reports include clear identification of hazardous materials found, their location and condition, regulatory requirements for safe handling, and recommendations for abatement or management. For restoration projects, we can develop a comprehensive hazardous materials management plan that ensures all work is performed safely and in compliance with federal, state, and local regulations.',
  ],
  stats: [
    { label: 'Environmental Assessments', value: '3,000+' },
    { label: 'Samples Analyzed', value: '50,000+' },
    { label: 'Certified Inspectors', value: '12' },
    { label: 'Regulatory Compliance', value: '100%' },
  ],
  testimonial: {
    quote: 'Before renovating our 1960s office building, Flood Doctor performed a complete environmental survey. They found asbestos in the floor tiles and pipe insulation, and lead paint in the stairwells. Their clear report allowed us to budget accurately for abatement and avoid costly regulatory violations. Essential service for any older building project.',
    author: 'Mark Johannsen',
    role: 'Development Manager, Heritage Properties LLC',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    { name: 'Indoor Air Quality', description: 'Comprehensive air quality testing for mold, VOCs, particulates, and other airborne contaminants.' },
    { name: 'Mold Remediation', description: 'Professional mold removal following positive environmental testing results.' },
    { name: 'Moisture Mapping', description: 'Moisture assessment to identify water intrusion sources that contribute to environmental hazards.' },
    { name: 'Asbestos Abatement Coordination', description: 'Coordination with licensed asbestos abatement contractors for safe removal of identified materials.' },
    { name: 'Lead Abatement Coordination', description: 'RRP-certified lead paint removal and management for pre-1978 buildings.' },
    { name: 'Regulatory Compliance', description: 'Documentation and protocols ensuring compliance with EPA, OSHA, and state environmental regulations.' },
  ],
  faqs: [
    { question: 'When is environmental testing required?', answer: 'Testing is required before any renovation, restoration, or demolition in buildings constructed before 1980 (for asbestos) or 1978 (for lead paint). Many states also require testing before real estate transactions, school renovations, and commercial building modifications. Testing is always recommended after water damage or fire events in older buildings.' },
    { question: 'How long do test results take?', answer: 'Standard turnaround for most environmental samples is 3-5 business days. Rush service (24-48 hours) is available at additional cost. XRF lead paint readings are available immediately on site. We coordinate testing timelines with your project schedule to avoid delays.' },
    { question: 'What happens if asbestos or lead is found?', answer: 'Finding these materials does not necessarily mean they must be removed. If they are in good condition and will not be disturbed, management in place is often acceptable. If they will be disturbed by your project, licensed abatement contractors must remove them following specific protocols. We help you understand your options and obligations.' },
    { question: 'Are your inspectors certified?', answer: 'Yes. Our environmental inspectors hold state-issued certifications for asbestos inspection and management planning, EPA-recognized lead paint inspection certifications, and ACAC or equivalent credentials for mold assessment. Certifications are maintained through continuing education as required by state regulations.' },
    { question: 'Do you provide abatement services?', answer: 'We provide testing and consulting services. For abatement (physical removal of hazardous materials), we coordinate with licensed abatement contractors who specialize in this work. This separation between testing and abatement ensures objectivity and is considered best practice by regulatory agencies.' },
    { question: 'What about newer buildings?', answer: 'While asbestos and lead paint are primarily concerns in pre-1980 buildings, newer buildings can still have mold, radon, VOC, and other environmental issues. We provide comprehensive testing for buildings of any age, adapting our testing protocols to the specific building and concerns involved.' },
  ],
}

export default environmentalTesting
