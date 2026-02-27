import type { ServiceData } from './types'

const industrialFacilities: ServiceData = {
  slug: 'industrial-facilities',
  name: 'Industrial Facilities',
  tagline: 'Heavy-duty restoration for manufacturing plants, warehouses, and industrial complexes.',
  description: 'Industrial-grade restoration services for manufacturing facilities, distribution centers, and industrial complexes. We deploy commercial-scale equipment and specialized teams to handle large-volume water events and get your operations running again.',
  heroImageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
  features: [
    { name: 'Large-Volume Extraction', description: 'Truck-mounted extraction systems capable of removing thousands of gallons per hour from industrial spaces.', icon: 'bolt' },
    { name: 'Equipment Salvage', description: 'Assessment and restoration of industrial machinery, production equipment, and control systems affected by water damage.', icon: 'cog-6-tooth' },
    { name: 'Hazmat Coordination', description: 'Coordination with hazmat teams for facilities with chemical storage, fuel systems, or industrial waste concerns.', icon: 'shield-check' },
    { name: 'Concrete Floor Drying', description: 'Specialized drying systems for industrial concrete floors, including sub-slab moisture extraction.', icon: 'home-modern' },
    { name: 'Production Line Recovery', description: 'Priority restoration of critical production areas to minimize manufacturing downtime and revenue loss.', icon: 'arrow-path' },
    { name: 'OSHA Compliance', description: 'All restoration work meets OSHA workplace safety standards with proper PPE, lockout/tagout, and confined space protocols.', icon: 'lock-closed' },
  ],
  contentParagraphs: [
    'Industrial water damage events present unique challenges that require specialized equipment and expertise. Whether it is a sprinkler system malfunction flooding a 100,000-square-foot warehouse or a storm surge overwhelming a manufacturing plant, the scale of these events demands an industrial-grade response.',
    'Our industrial restoration teams deploy truck-mounted extraction systems, industrial dehumidification units, and high-volume air movers capable of handling the enormous air volumes in warehouses and manufacturing facilities. We understand that every hour of downtime translates directly to lost production and revenue.',
    'Industrial facilities often contain expensive equipment, raw materials, and finished goods that require careful assessment and salvage. Our teams work with facility engineers to prioritize critical production areas, protect sensitive equipment, and develop restoration plans that get your most important operations running first.',
    'Safety is paramount in industrial restoration. Our technicians are trained in OSHA confined space entry, lockout/tagout procedures, and hazardous materials awareness. We coordinate with your safety team and comply with all facility-specific protocols, including clean room standards and controlled environment requirements.',
  ],
  stats: [
    { label: 'Industrial Projects', value: '200+' },
    { label: 'Max Sq Ft Restored', value: '500K+' },
    { label: 'Equipment Saved', value: '$50M+' },
    { label: 'Avg Downtime Reduction', value: '60%' },
  ],
  testimonial: {
    quote: 'A sprinkler malfunction flooded 80,000 square feet of our distribution center. Flood Doctor had truck-mounted extractors on-site within two hours and prioritized our shipping lanes so we could resume order fulfillment within 36 hours. Their industrial expertise saved us hundreds of thousands in lost revenue.',
    author: 'Robert Kang',
    role: 'VP Operations, Sterling Distribution',
    imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    { name: 'Warehouse Restoration', description: 'Large-scale drying and restoration of warehouse spaces including racking systems and inventory salvage.' },
    { name: 'Clean Room Recovery', description: 'Specialized restoration protocols for pharmaceutical, electronics, and food processing clean rooms.' },
    { name: 'Cold Storage Restoration', description: 'Restoration of refrigerated and frozen storage facilities with temperature-sensitive product protection.' },
    { name: 'Loading Dock Repair', description: 'Restoration of loading docks, drive-in doors, and dock levelers affected by flooding.' },
    { name: 'Inventory Salvage', description: 'Assessment, sorting, and restoration of damaged inventory including documentation for insurance claims.' },
    { name: 'Fire Suppression System Repair', description: 'Assessment and coordination of repairs to sprinkler systems and fire suppression equipment after accidental discharge.' },
  ],
  faqs: [
    { question: 'How quickly can you respond to an industrial water damage event?', answer: 'We have dedicated industrial response teams available 24/7. For large-loss events, we can have truck-mounted equipment on-site within 2 hours and scale up crews as needed to match the scope of the event.' },
    { question: 'Can you work around active production schedules?', answer: 'Yes. We develop phased restoration plans that prioritize critical production areas and work around your operating schedule to minimize business disruption. We can run crews on multiple shifts to accelerate the timeline.' },
    { question: 'Do you handle hazardous materials?', answer: 'We coordinate with certified hazmat teams for facilities with chemical, fuel, or industrial waste concerns. Our technicians have hazmat awareness training and follow all applicable EPA and OSHA regulations during restoration work.' },
    { question: 'What about equipment and machinery restoration?', answer: 'We work with your facility engineers and equipment manufacturers to assess water-damaged machinery. We can coordinate equipment decontamination, motor drying, and electrical testing to salvage equipment whenever possible.' },
    { question: 'How do you handle insurance for large industrial losses?', answer: 'We have extensive experience with large-loss commercial claims. Our team provides detailed documentation including time-stamped photos, moisture data, equipment inventories, and scope-of-work breakdowns that insurance adjusters require.' },
    { question: 'Can you restore concrete warehouse floors?', answer: 'Yes. We use specialized sub-slab drying systems and industrial dehumidifiers to remove moisture from concrete floors, preventing vapor transmission issues, coating failures, and mold growth beneath flooring systems.' },
  ],
}

export default industrialFacilities
