import type { ServiceData } from './types'

const moistureMappingConsulting: ServiceData = {
  slug: 'moisture-mapping-consulting',
  name: 'Moisture Mapping & Consulting',
  tagline: 'Scientific moisture assessment and expert consulting for complex restoration projects.',
  description: 'Our certified consultants provide detailed moisture mapping, drying plan development, and expert oversight for complex water damage projects using thermal imaging, hygrometers, and scientific drying principles.',
  heroImageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
  features: [
    { name: 'Thermal Imaging', description: 'FLIR thermal cameras reveal moisture patterns invisible to the eye, identifying water migration paths through walls, ceilings, and floors.', icon: 'finger-print' },
    { name: 'Hygrometric Testing', description: 'Precision moisture meters and hygrometers provide quantitative data for materials, ambient conditions, and drying progress.', icon: 'beaker' },
    { name: 'Drying Plan Development', description: 'Scientific drying plans based on psychrometric calculations to optimize equipment placement and achieve target dryness.', icon: 'cog-6-tooth' },
    { name: 'Daily Monitoring', description: 'Systematic daily moisture readings with documented progress tracking to ensure drying meets IICRC S500 standards.', icon: 'clock' },
    { name: 'Expert Testimony', description: 'Certified consultants available for depositions, mediations, and court proceedings in water damage disputes.', icon: 'shield-check' },
    { name: 'Third-Party Verification', description: 'Independent moisture assessments for property owners, insurers, and attorneys seeking objective damage documentation.', icon: 'check' },
  ],
  contentParagraphs: [
    'Effective water damage restoration begins with accurate moisture assessment. Without scientific measurement, restoration contractors risk leaving hidden moisture pockets that lead to mold growth, structural deterioration, and costly callbacks. Our moisture mapping and consulting services provide the objective data needed for proper restoration.',
    'Using FLIR thermal imaging cameras, pin-type and pinless moisture meters, thermo-hygrometers, and psychrometric calculations, our certified consultants create detailed moisture maps that document the exact extent of water intrusion. These maps guide equipment placement, identify areas that need additional attention, and serve as baseline documentation for insurance purposes.',
    'Our consulting services are valuable for complex projects where standard restoration approaches may fall short. Multi-story buildings with interstitial water migration, historic structures with unique construction materials, and large commercial properties with complex HVAC interactions all benefit from expert moisture consulting.',
    'We also provide third-party verification services for property owners, insurance companies, attorneys, and property managers who need independent assessment of water damage extent or restoration adequacy. Our certified consultants provide detailed written reports and are available for expert testimony when disputes arise.',
  ],
  stats: [
    { label: 'Assessments Completed', value: '3,000+' },
    { label: 'Accuracy Rate', value: '99.5%' },
    { label: 'Consulting Experience', value: '15+ yrs' },
    { label: 'Expert Cases', value: '150+' },
  ],
  testimonial: {
    quote: 'We hired Flood Doctor for a third-party moisture assessment after our previous contractor claimed the building was dry. Their thermal imaging revealed significant moisture remaining in two wall cavities that would have caused major mold issues. Their detailed report was exactly what we needed for our insurance supplement.',
    author: 'Marcus Webb',
    role: 'Property Manager, Webb Commercial Holdings',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    { name: 'Psychrometric Analysis', description: 'Scientific calculation of optimal drying conditions including temperature, humidity, and airflow requirements.' },
    { name: 'Scope Writing', description: 'Detailed scope-of-work documents for insurance adjusters using Xactimate line items and industry standards.' },
    { name: 'Pre-Purchase Inspections', description: 'Moisture assessments for commercial property buyers to identify hidden water damage before closing.' },
    { name: 'Quality Assurance', description: 'Independent verification that restoration work has achieved proper dryness standards before reconstruction begins.' },
    { name: 'Historical Data Analysis', description: 'Review of building maintenance records and weather data to determine moisture damage timelines and causation.' },
    { name: 'HVAC Impact Assessment', description: 'Evaluation of how building HVAC systems affect moisture distribution and drying efficiency.' },
  ],
  faqs: [
    { question: 'When do I need moisture mapping vs. standard restoration?', answer: 'Moisture mapping is valuable for any water damage event, but it is especially critical for complex projects involving multi-story buildings, large commercial spaces, historic structures, or situations where insurance disputes are likely. It provides objective documentation that standard visual assessment cannot.' },
    { question: 'What equipment do you use for moisture mapping?', answer: 'We use FLIR thermal imaging cameras, Delmhorst pin-type moisture meters, Tramex pinless meters, Vaisala thermo-hygrometers, and professional psychrometric software. All equipment is regularly calibrated to maintain accuracy.' },
    { question: 'Can you provide expert testimony?', answer: 'Yes. Our certified consultants have provided expert testimony in over 150 water damage cases including depositions, mediations, and court proceedings. We provide detailed written reports that meet evidentiary standards.' },
    { question: 'How long does a moisture assessment take?', answer: 'A standard residential assessment takes 2-4 hours. Commercial assessments vary based on building size — a typical office building takes 4-8 hours. Comprehensive mapping of large commercial properties may require multiple days.' },
    { question: 'Do you offer ongoing monitoring services?', answer: 'Yes. We provide daily moisture monitoring during active drying projects and periodic monitoring for buildings with known moisture management challenges. All readings are documented with time-stamped data and trend analysis.' },
    { question: 'What certifications do your consultants hold?', answer: 'Our consultants hold IICRC certifications in Water Damage Restoration (WRT), Applied Structural Drying (ASD), and Commercial Drying Specialist (CDS). Several also hold ACAC certifications in moisture assessment and indoor environmental consulting.' },
  ],
}

export default moistureMappingConsulting
