import type { ServiceData } from './types'

const stormDamageRestoration: ServiceData = {
  slug: 'storm-damage-restoration',
  name: 'Storm Damage Restoration',
  tagline: 'Expert storm damage repair to protect your home from wind, hail, and severe weather.',
  description:
    'Severe storms can cause devastating damage in minutes. Our storm damage restoration team provides emergency response including roof tarping, water extraction, structural repairs, and full reconstruction to restore your home after any weather event.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    {
      name: 'Emergency Board-Up & Tarping',
      description:
        'Immediate property securing with board-up services and heavy-duty roof tarps to prevent further water intrusion from storm damage.',
      icon: 'shield-check',
    },
    {
      name: 'Wind Damage Repair',
      description:
        'Structural repairs for wind-damaged roofing, siding, windows, and fencing with materials matched to your existing home.',
      icon: 'home-modern',
    },
    {
      name: 'Hail Damage Assessment',
      description:
        'Thorough inspection of roofing, gutters, and exterior surfaces to identify and document all hail impact damage.',
      icon: 'beaker',
    },
    {
      name: 'Fallen Tree Removal',
      description:
        'Safe removal of fallen trees and large debris from your property and structures, with crane service available for complex situations.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Water Intrusion Remediation',
      description:
        'Storm-driven rain often forces water through compromised roofs and windows. We extract, dry, and restore all water-damaged areas.',
      icon: 'bolt',
    },
    {
      name: 'Insurance Claims Support',
      description:
        'Our estimators use Xactimate software — the same platform insurers use — to produce accurate damage assessments that expedite your claim.',
      icon: 'check',
    },
  ],
  contentParagraphs: [
    'Severe storms — including thunderstorms, tornadoes, hurricanes, and derechos — can cause catastrophic damage to residential properties in a matter of minutes. High winds tear off shingles, topple trees onto structures, and drive rain through compromised building envelopes. Our storm damage restoration team mobilizes immediately after weather events, prioritizing emergency board-up and tarping to prevent secondary water damage.',
    'Storm damage often involves multiple simultaneous issues: roof damage allowing water intrusion, broken windows exposing interiors to the elements, fallen trees compromising structural integrity, and power surges damaging electrical systems. Our comprehensive approach addresses all of these concerns with specialized crews working in parallel to accelerate your restoration timeline.',
    'After securing your property, we conduct a detailed damage assessment using drone photography, thermal imaging, and structural engineering analysis. This documentation serves dual purposes: it guides our restoration plan and provides your insurance company with the evidence needed to process your claim. Our Xactimate-certified estimators speak the same language as insurance adjusters, reducing disputes and delays.',
    'Reconstruction follows strict building codes and often presents an opportunity to upgrade vulnerable areas. We can install impact-resistant shingles, hurricane clips, reinforced garage doors, and other storm-hardening improvements during the rebuild. Our goal is not just to restore your home to a documented dry standard, but to make it more resilient against future storms.',
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
      name: 'Roof Leak Repair',
      description: 'Emergency and permanent roof leak repairs to stop water intrusion from storm-damaged roofing systems.',
    },
    {
      name: 'Water Damage Restoration',
      description: 'Complete water damage restoration for storm-driven rain that has entered your home through compromised areas.',
    },
    {
      name: 'Structural Drying',
      description: 'Industrial drying systems to remove moisture from walls, ceilings, and floors soaked by storm-driven water.',
    },
    {
      name: 'Tree & Debris Removal',
      description: 'Safe removal of fallen trees, branches, and storm debris from your property and structures.',
    },
    {
      name: 'Emergency Board-Up',
      description: 'Immediate securing of broken windows, doors, and other openings to protect your home from further damage.',
    },
    {
      name: 'Full Reconstruction',
      description: 'Complete rebuild services for severely storm-damaged areas including roofing, framing, and interior finishes.',
    },
  ],
  faqs: [
    {
      question: 'What should I do immediately after storm damage?',
      answer:
        'Ensure everyone is safe and account for all family members. Do not enter severely damaged structures. Call us for emergency board-up and tarping. Document visible damage with photos from a safe distance. Contact your insurance company to initiate a claim. Do not attempt roof repairs yourself.',
    },
    {
      question: 'Does homeowner insurance cover storm damage?',
      answer:
        'Most homeowner policies cover wind and hail damage, but coverage varies. Some policies have separate wind/hail deductibles. Flood damage from storm surge requires separate flood insurance. We can review the restoration scope with you and provide documentation for the carrier coverage review.',
    },
    {
      question: 'How quickly can you respond after a major storm?',
      answer:
        'We pre-stage crews and equipment when severe weather is forecast. After a major storm, we prioritize emergency board-up and tarping based on storm scope and access conditions. Full restoration team deployment depends on storm scope, access conditions, and available resources.',
    },
    {
      question: 'Can storm-damaged roofing be repaired or does it need replacement?',
      answer:
        'It depends on the extent of damage. Minor shingle damage can often be repaired. However, if more than 30% of shingles are damaged, or if the underlayment is compromised, full replacement is typically recommended. We provide honest assessments and never recommend unnecessary work.',
    },
    {
      question: 'What if a tree fell on my house?',
      answer:
        'Do not enter the structure until it has been assessed for structural integrity. Call us immediately — we have crane and heavy equipment capabilities for safe tree removal. We coordinate with arborists for complex removals and handle all structural repairs once the tree is safely removed.',
    },
    {
      question: 'How long does storm damage restoration take?',
      answer:
        'Emergency securing takes a few hours. Minor repairs may take 1-2 weeks. Major restoration involving roof replacement and interior reconstruction typically takes 4-8 weeks. We provide a detailed timeline after our assessment and keep you updated throughout the process.',
    },
  ],
}

export default stormDamageRestoration
