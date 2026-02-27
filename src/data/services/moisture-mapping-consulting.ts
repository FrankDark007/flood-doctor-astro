import type { ServiceData } from './types'

const moistureMappingConsulting: ServiceData = {
  slug: 'moisture-mapping-consulting',
  name: 'Moisture Mapping & Consulting',
  tagline: 'Scientific moisture assessment and expert consulting for complex projects.',
  description:
    'Our moisture mapping service uses thermal imaging, calibrated meters, and psychrometric analysis to create detailed moisture profiles of your building. We provide expert consulting on drying strategies, moisture source identification, and litigation support for complex water damage claims.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
  features: [
    { name: 'FLIR Thermal Imaging', description: 'High-resolution infrared cameras detect temperature differentials that reveal hidden moisture behind walls, under floors, and above ceilings.', icon: 'finger-print' },
    { name: 'Calibrated Moisture Meters', description: 'NIST-traceable pin-type and capacitance meters provide accurate moisture content readings for all building materials.', icon: 'beaker' },
    { name: 'Digital Moisture Maps', description: 'Grid-based digital moisture maps document moisture levels at specific locations, creating a visual representation of the full moisture profile.', icon: 'cloud-arrow-up' },
    { name: 'Psychrometric Analysis', description: 'Scientific analysis of temperature, humidity, and dew point conditions guides optimal drying strategies for complex environments.', icon: 'cog-6-tooth' },
    { name: 'Drying Strategy Consulting', description: 'Expert recommendations on equipment selection, placement, and duration based on building construction, materials, and environmental conditions.', icon: 'wrench-screwdriver' },
    { name: 'Expert Witness Services', description: 'Our certified moisture consultants provide expert testimony and litigation support for water damage disputes and insurance claim negotiations.', icon: 'shield-check' },
  ],
  contentParagraphs: [
    'Moisture mapping is the foundation of effective water damage restoration. Without accurate, comprehensive moisture data, restoration teams are making decisions based on guesswork. Our moisture mapping service provides the scientific data needed to develop targeted drying strategies, verify restoration completeness, and document conditions for insurance claims and legal proceedings.',
    'Our moisture mapping protocol begins with a thermal imaging survey of the entire affected area. FLIR cameras detect temperature differentials as small as 0.05 degrees Celsius, revealing moisture patterns invisible to the naked eye. This non-invasive scan quickly identifies the boundaries of water intrusion and highlights areas where invasive testing with pin-type meters should be performed.',
    'We document moisture readings on a grid-based digital map, creating a visual representation that shows moisture levels at specific locations throughout the structure. This map serves as both a restoration planning tool and a legal document. Daily updates to the moisture map during drying operations provide objective proof of progress and help optimize equipment placement for maximum drying efficiency.',
    'Beyond data collection, we provide expert consulting on complex moisture issues. This includes determining the cause and origin of water intrusion, evaluating whether previous restoration work was adequate, assessing long-term moisture conditions in building envelopes, and providing expert witness testimony in litigation. Our consultants hold IICRC, ACAC, and thermography certifications recognized by courts and insurance carriers.',
  ],
  stats: [
    { label: 'Moisture Assessments', value: '2,500+' },
    { label: 'Expert Reports Prepared', value: '400+' },
    { label: 'Court Testimonies', value: '50+' },
    { label: 'Data Points per Project', value: '200+' },
  ],
  testimonial: {
    quote: 'We hired Flood Doctor to assess a water damage claim that our insurance company was disputing. Their moisture mapping revealed extensive hidden damage the adjuster had missed. Their expert report and the moisture maps were compelling enough that the insurance company approved the full claim without going to arbitration.',
    author: 'Attorney Rachel Simmons',
    role: 'Partner, Simmons & Associates Law Firm',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    { name: 'Structural Drying', description: 'Data-driven drying operations guided by comprehensive moisture mapping and analysis.' },
    { name: 'Environmental Testing', description: 'Complete environmental assessment including moisture, mold, and air quality testing.' },
    { name: 'Indoor Air Quality', description: 'IAQ testing often performed alongside moisture assessments to identify mold-related contamination.' },
    { name: 'Water Damage Restoration', description: 'Full restoration services informed by detailed moisture assessment and drying strategy.' },
    { name: 'Expert Testimony', description: 'Certified moisture experts available for depositions, mediations, and court testimony.' },
    { name: 'Insurance Claim Support', description: 'Detailed documentation and expert opinions to support disputed or complex insurance claims.' },
  ],
  faqs: [
    { question: 'What is moisture mapping?', answer: 'Moisture mapping is the process of systematically measuring and documenting moisture levels throughout a structure using calibrated instruments. Readings are plotted on a grid-based map that provides a visual representation of where moisture is present, how severe it is, and how it is changing over time during drying operations.' },
    { question: 'Why is thermal imaging important?', answer: 'Thermal cameras detect temperature differences caused by evaporative cooling from wet surfaces. This allows us to quickly scan large areas and identify hidden moisture behind walls, under floors, and in ceilings without destructive investigation. It is the fastest way to determine the full extent of water intrusion.' },
    { question: 'Can your moisture maps be used in court?', answer: 'Yes. Our moisture maps are prepared by certified thermographers and moisture consultants using calibrated, NIST-traceable instruments. They are accepted as expert evidence in court proceedings, insurance arbitration, and mediation. Our consultants have testified in over 50 cases.' },
    { question: 'How accurate are moisture meters?', answer: 'Our pin-type meters measure wood moisture content to within +/- 0.5%. Non-invasive capacitance meters provide relative readings that accurately identify wet versus dry areas. All meters are calibrated regularly with NIST-traceable standards and calibration records are maintained for evidentiary purposes.' },
    { question: 'Do you provide consulting without performing restoration?', answer: 'Yes. We offer standalone consulting services including moisture assessments, drying strategy development, quality assurance reviews of other contractors work, and expert witness services. Many insurance adjusters, attorneys, and property managers engage us purely for our assessment and consulting expertise.' },
    { question: 'What certifications do your consultants hold?', answer: 'Our moisture consultants hold certifications including IICRC WRT and ASD, ACAC CMC (Certified Moisture Consultant), Level II Thermography certification, and various manufacturer-specific instrument certifications. These credentials are recognized by courts, insurance carriers, and industry professionals.' },
  ],
}

export default moistureMappingConsulting
