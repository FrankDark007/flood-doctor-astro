import type { ServiceData } from './types'

const floodCleanup: ServiceData = {
  slug: 'flood-cleanup',
  name: 'Flood Cleanup',
  tagline: 'Comprehensive flood damage cleanup to restore your home and your peace of mind.',
  description:
    'When floodwaters invade your home, our certified team responds immediately with industrial-grade equipment to extract water, remove debris, sanitize affected areas, and restore affected areas safely and thoroughly.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    {
      name: 'Rapid Water Extraction',
      description:
        'Truck-mounted and portable extractors remove thousands of gallons of floodwater per hour, preventing further structural saturation.',
      icon: 'bolt',
    },
    {
      name: 'Debris & Sediment Removal',
      description:
        'Floodwaters carry mud, silt, and contaminants. We remove all debris and thoroughly clean every affected surface.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Sanitization & Disinfection',
      description:
        'Floodwater is classified as Category 3 contaminated water. We apply EPA-registered antimicrobials to eliminate bacteria and pathogens.',
      icon: 'shield-check',
    },
    {
      name: 'Structural Assessment',
      description:
        'Our engineers assess load-bearing walls, foundations, and subfloors to determine what can be salvaged and what needs replacement.',
      icon: 'home-modern',
    },
    {
      name: 'Commercial-Grade Drying',
      description:
        'Strategic placement of industrial dehumidifiers and air movers ensures complete moisture removal from all building materials.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'Insurance Documentation',
      description:
        'We photograph, catalog, and document all damage with detailed moisture readings to support your insurance claim.',
      icon: 'check',
    },
  ],
  contentParagraphs: [
    'Flood damage is among the most devastating events a homeowner can face. Whether caused by heavy rainfall, river overflow, storm surge, or municipal drainage failures, floodwaters bring contaminated water, mud, and debris into your living space. Our flood cleanup teams are trained to handle Category 3 water — the most hazardous classification — and we deploy with full personal protective equipment and industrial sanitization chemicals.',
    'The first 24 to 48 hours after a flood are critical. Bacteria multiply rapidly in standing water, mold spores begin colonizing within 24 hours, and prolonged moisture exposure weakens structural materials. Our rapid response protocol prioritizes water extraction, followed by removal of unsalvageable materials like saturated drywall, carpet padding, and insulation. This controlled demolition prevents secondary damage and creates access for thorough drying.',
    'Our multi-phase drying process uses psychrometric science to calculate the exact equipment placement needed for your space. We monitor temperature, humidity, and moisture content daily, adjusting our approach as conditions change. Thermal imaging reveals hidden moisture behind walls and under floors that traditional inspection methods miss, ensuring nothing is overlooked.',
    'We understand that a flood destroys more than property — it disrupts your entire life. That is why we handle every aspect of the cleanup process, from emergency board-up and content pack-out to final reconstruction and painting. Our team works directly with your insurance adjuster, providing the documentation and estimates needed to keep your claim moving forward.',
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
    {
      name: 'Water Damage Restoration',
      description: 'Full-service water damage restoration from extraction through reconstruction for all types of water intrusion.',
    },
    {
      name: 'Sewage Cleanup',
      description: 'Safe handling of Category 3 black water contamination with EPA-compliant decontamination protocols.',
    },
    {
      name: 'Basement Flooding',
      description: 'Specialized basement flood cleanup including sump pump failure response and below-grade waterproofing.',
    },
    {
      name: 'Structural Drying',
      description: 'Commercial-grade drying systems to restore moisture levels in walls, floors, and ceilings to a documented dry standards.',
    },
    {
      name: 'Mold Prevention',
      description: 'Post-flood antimicrobial treatment and environmental controls to prevent mold colonization.',
    },
    {
      name: 'Content Pack-Out',
      description: 'Inventory, pack-out, and off-site restoration of personal belongings affected by floodwaters.',
    },
  ],
  faqs: [
    {
      question: 'Is floodwater dangerous?',
      answer:
        'Yes. Floodwater is classified as Category 3 (black water) and contains sewage, chemicals, bacteria, and other pathogens. All affected materials must be properly decontaminated or removed. Our technicians wear full PPE and use EPA-registered antimicrobials during cleanup.',
    },
    {
      question: 'Does homeowner insurance cover flood damage?',
      answer:
        'Standard homeowner insurance typically does not cover flood damage. You need a separate flood insurance policy, usually through the National Flood Insurance Program (NFIP) or a private carrier. We work with both types of policies and can help you navigate the claims process.',
    },
    {
      question: 'How long does flood cleanup take?',
      answer:
        'Water extraction typically takes 1-2 days depending on the volume. Structural drying requires 4-7 days with daily monitoring. Full restoration including reconstruction can take 3-6 weeks. We provide a detailed timeline after our initial assessment.',
    },
    {
      question: 'Can flood-damaged items be saved?',
      answer:
        'Many items can be restored through professional cleaning and drying. Hard-surface furniture, some electronics, and documents can often be saved. However, porous materials like mattresses, carpet padding, and upholstered furniture that absorbed floodwater typically must be discarded for health reasons.',
    },
    {
      question: 'What should I do immediately after a flood?',
      answer:
        'First, ensure your safety — do not enter floodwater if electrical outlets are submerged. Turn off electricity at the breaker if safe to do so. Call us immediately for emergency extraction. Do not attempt to use household vacuums on floodwater. Document damage with photos before cleanup begins.',
    },
    {
      question: 'Will mold grow after a flood?',
      answer:
        'Mold can begin growing within 24-48 hours in warm, humid conditions. Rapid water extraction and professional drying are essential to prevent mold colonization. We apply antimicrobial treatments to all affected areas and perform post-cleanup air quality testing to confirm no mold issues remain.',
    },
  ],
}

export default floodCleanup
