import type { ServiceData } from './types'

const industrialFacilities: ServiceData = {
  slug: 'industrial-facilities',
  name: 'Industrial Facilities',
  tagline: 'Heavy-duty restoration for warehouses, manufacturing plants, and industrial sites.',
  description:
    'Industrial facilities present unique restoration challenges — hazardous materials, heavy machinery, high-bay structures, and complex operations. Our industrial team has the equipment, safety training, and operational understanding to restore your facility efficiently.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1513828583688-c52646db42da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
  features: [
    { name: 'HAZWOPER-Certified Crews', description: 'Our industrial teams hold 40-hour HAZWOPER certifications for work in environments with potential chemical, biological, or radiological hazards.', icon: 'shield-check' },
    { name: 'Heavy Machinery Restoration', description: 'Specialized cleaning, anti-corrosion treatment, and restoration of CNC machines, presses, conveyors, and other industrial equipment.', icon: 'cog-6-tooth' },
    { name: 'High-Bay Drying', description: 'Industrial drying solutions for warehouses and manufacturing floors with ceilings exceeding 30 feet, requiring specialized equipment placement strategies.', icon: 'cloud-arrow-up' },
    { name: 'Chemical Spill Response', description: 'Containment and cleanup of water-activated chemical releases that can occur during flooding in manufacturing and storage facilities.', icon: 'beaker' },
    { name: 'Production Line Recovery', description: 'We prioritize the restoration of production areas to minimize manufacturing downtime and supply chain disruption.', icon: 'bolt' },
    { name: 'EPA & OSHA Compliance', description: 'Full environmental and workplace safety compliance including waste characterization, manifesting, and regulatory reporting.', icon: 'check' },
  ],
  contentParagraphs: [
    'Industrial facilities — manufacturing plants, warehouses, distribution centers, and processing facilities — face restoration challenges that standard commercial restoration companies cannot adequately address. These environments often involve hazardous materials, high-value machinery, specialized building systems, and operational complexity that requires both technical restoration expertise and industrial operational understanding.',
    'Water damage in industrial settings can trigger secondary hazards that do not exist in commercial office environments. Floodwater can react with stored chemicals, damage electrical systems operating at industrial voltages, compromise clean room environments, and contaminate food-grade or pharmaceutical production areas. Our HAZWOPER-certified crews assess and mitigate these secondary hazards as part of every industrial response.',
    'Industrial machinery represents millions of dollars in capital investment and often has lead times of months or years for replacement. Our equipment restoration protocol begins with immediate anti-corrosion treatment to stop oxidation damage, followed by cleaning, lubrication, and testing in coordination with your maintenance team and equipment manufacturers. In many cases, we can restore equipment to operational condition at a fraction of replacement cost.',
    'Drying industrial spaces presents unique challenges due to their scale. Warehouse facilities with 100,000+ square feet of floor space and 30-40 foot ceilings require different drying strategies than standard commercial spaces. We deploy trailer-mounted desiccant dehumidifiers with high-volume ductwork systems designed specifically for large open industrial environments.',
  ],
  stats: [
    { label: 'Industrial Projects', value: '100+' },
    { label: 'Equipment Items Restored', value: '10,000+' },
    { label: 'Largest Facility', value: '750,000 sq ft' },
    { label: 'Production Line Recovery', value: '<5 days avg' },
  ],
  testimonial: {
    quote: 'A roof collapse during a storm flooded our 200,000 square foot manufacturing plant and soaked millions of dollars of CNC equipment. Flood Doctor had anti-corrosion treatments on every machine within 12 hours, saving equipment that would have taken 18 months to replace. Their industrial expertise was the difference between a temporary setback and a business-ending disaster.',
    author: 'Frank Kowalczyk',
    role: 'VP Operations, Advanced Manufacturing Corp.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    { name: 'Commercial Flood Cleanup', description: 'Industrial-scale flood cleanup for large manufacturing and warehouse facilities.' },
    { name: 'Large Loss Restoration', description: 'Project management for complex, multi-million dollar industrial restoration projects.' },
    { name: 'Environmental Testing', description: 'Environmental assessment for industrial sites with potential chemical contamination.' },
    { name: 'Commercial Fire Restoration', description: 'Fire damage restoration for industrial facilities with specialized equipment and materials.' },
    { name: 'Equipment Restoration', description: 'Cleaning, treatment, and restoration of industrial machinery and production equipment.' },
    { name: 'Hazardous Material Response', description: 'Containment and cleanup of hazardous materials released during water or fire events.' },
  ],
  faqs: [
    { question: 'Can you work in hazardous material environments?', answer: 'Yes. Our industrial crews hold 40-hour HAZWOPER certifications and are trained in hazardous material identification, containment, and cleanup. We work with your facility safety team to identify all potential hazards and establish appropriate safety protocols before work begins.' },
    { question: 'How do you handle heavy industrial equipment?', answer: 'We apply anti-corrosion treatments within hours to prevent oxidation damage. Our equipment restoration team cleans, lubricates, and tests machinery in coordination with your maintenance staff and OEM specifications. We have experience with CNC machines, hydraulic presses, conveyor systems, and other industrial equipment.' },
    { question: 'Can you work around production schedules?', answer: 'Yes. We develop restoration plans that prioritize your most critical production areas and work around ongoing operations when possible. For 24/7 facilities, we coordinate shift schedules with your operations team to minimize production impact.' },
    { question: 'What about food-grade or pharmaceutical facilities?', answer: 'We understand the additional regulatory requirements for food processing (FDA, USDA) and pharmaceutical manufacturing (GMP) facilities. Our restoration protocols are adapted to maintain compliance with these regulations, and we coordinate with your quality assurance team throughout the project.' },
    { question: 'How do you dry a large warehouse space?', answer: 'We use trailer-mounted desiccant dehumidifiers with high-volume ductwork systems designed for large open spaces. These units can process thousands of cubic feet of air per minute and are effective in the high-ceiling, high-volume environments typical of warehouses and manufacturing floors.' },
    { question: 'Do you handle environmental compliance and reporting?', answer: 'Yes. For events involving potential environmental contamination, we perform waste characterization, maintain proper manifesting and chain-of-custody documentation, coordinate with licensed disposal facilities, and assist with any required regulatory reporting to EPA or state environmental agencies.' },
  ],
}

export default industrialFacilities
