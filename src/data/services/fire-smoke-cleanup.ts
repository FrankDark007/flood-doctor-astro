import type { ServiceData } from './types'

const fireSmokeCleanup: ServiceData = {
  slug: 'fire-smoke-cleanup',
  name: 'Fire & Smoke Cleanup',
  tagline: 'Complete fire and smoke damage restoration from emergency response to full rebuild.',
  description:
    'Fire damage extends far beyond the flames — smoke, soot, and water from firefighting efforts cause widespread secondary damage. Our fire restoration team handles emergency board-up, soot removal, smoke deodorization, structural cleaning, and complete reconstruction under one roof.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    {
      name: 'Emergency Board-Up & Securing',
      description:
        'Immediate property securing after a fire, including board-up of windows and doors, roof tarping, and fencing to prevent unauthorized access and weather damage.',
      icon: 'shield-check',
    },
    {
      name: 'Soot & Smoke Residue Removal',
      description:
        'Specialized cleaning techniques for protein residue, synthetic soot, and char using dry sponges, HEPA vacuums, and chemical cleaners matched to each soot type.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Smoke Deodorization',
      description:
        'Thermal fogging, ozone generators, and hydroxyl technology penetrate porous materials to neutralize embedded smoke odors at the molecular level.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'Water Damage Mitigation',
      description:
        'Firefighting water and sprinkler discharge cause significant secondary damage. We extract all water and dry the structure to prevent mold growth.',
      icon: 'bolt',
    },
    {
      name: 'Content Pack-Out & Cleaning',
      description:
        'We inventory, pack, and transport salvageable belongings to our climate-controlled facility for professional soot removal, deodorization, and restoration.',
      icon: 'home-modern',
    },
    {
      name: 'Full Reconstruction',
      description:
        'From framing to finish work, our construction team rebuilds fire-damaged areas to a safe, repair-ready condition, managing the entire process.',
      icon: 'cog-6-tooth',
    },
  ],
  contentParagraphs: [
    'A house fire is one of the most traumatic events a family can experience. Even after the flames are extinguished, the damage continues — smoke residue corrodes metals, discolors surfaces, and embeds in every porous material it contacts. Soot particles are acidic and will permanently etch glass, tarnish chrome, and yellow plastics if not cleaned within days. Our fire damage restoration process addresses every aspect of the damage, from structural charring to microscopic smoke particles.',
    'Smoke behaves differently depending on what burned. Protein fires (kitchen grease) leave a thin, nearly invisible residue with an intense odor. Synthetic material fires produce thick, black, smeared soot that resists standard cleaning. Wood and paper fires create dry, powdery soot. Each type requires different cleaning agents and techniques — using the wrong approach can permanently set stains into surfaces. Our trained technicians identify the soot type and select the appropriate treatment for each material.',
    'The firefighting water that saved your home creates its own set of problems. Thousands of gallons of water saturate floors, walls, and belongings, creating the same mold risk as any major water damage event. Our teams work simultaneously on smoke cleaning and water extraction, running both processes in parallel to maximize the amount of property that can be saved. Time is critical — the sooner we start, the more we can salvage.',
    'We manage the entire restoration from emergency response through final reconstruction. Our project managers serve as your single point of contact, coordinating subcontractors, ordering materials, managing timelines, and communicating with your insurance adjuster. We use Xactimate estimating software — the same platform your insurer uses — to ensure alignment on scope and pricing from day one.',
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
      name: 'Odor Removal',
      description: 'Advanced deodorization for smoke-saturated structures using thermal fogging, ozone, and hydroxyl generators.',
    },
    {
      name: 'Water Damage Restoration',
      description: 'Extraction and drying of firefighting water damage that accompanies virtually every house fire.',
    },
    {
      name: 'Contents Cleaning & Pack-Out',
      description: 'Professional cleaning and restoration of smoke-damaged belongings at our off-site restoration facility.',
    },
    {
      name: 'Structural Drying',
      description: 'Commercial drying systems to address water damage from firefighting hoses and sprinkler systems.',
    },
    {
      name: 'Air Quality Restoration',
      description: 'HEPA filtration and air scrubbing to remove smoke particles and improve indoor air quality after a fire.',
    },
    {
      name: 'Insurance Claims Management',
      description: 'Full claims documentation, Xactimate estimates, and direct adjuster coordination for fire damage claims.',
    },
  ],
  faqs: [
    {
      question: 'What should I do immediately after a house fire?',
      answer:
        'Do not re-enter the structure until the fire department clears it. Contact your insurance company to report the claim. Call us for emergency board-up and securing. Do not attempt to clean soot or smoke damage yourself — improper cleaning can cause permanent damage. Do not turn on the HVAC system, as it will spread soot throughout the ductwork.',
    },
    {
      question: 'Can smoke damage be cleaned, or does everything need replacement?',
      answer:
        'Many smoke-damaged items and surfaces can be professionally cleaned if addressed quickly. Hard surfaces, most furniture, many electronics, and structural elements can be restored. However, heavily charred materials, melted plastics, and heavily soot-saturated soft goods may need replacement. We assess every item individually to maximize salvage.',
    },
    {
      question: 'How long does fire restoration take?',
      answer:
        'Timeline varies significantly based on fire severity. A small kitchen fire might take 2-4 weeks for complete restoration. A multi-room fire with structural damage typically takes 8-12 weeks. Major fires requiring significant reconstruction can take 3-6 months. We provide detailed timelines after our initial assessment.',
    },
    {
      question: 'Does homeowner insurance cover fire damage?',
      answer:
        'Yes, fire damage is one of the most comprehensively covered perils in standard homeowner policies. Coverage typically includes structural repairs, personal property replacement, additional living expenses while displaced, and professional cleanup. We provide documentation and communicate with your insurer as requested throughout the process.',
    },
    {
      question: 'Will the smoke smell ever go away?',
      answer:
        'Yes, with professional treatment. Smoke odor molecules embed deeply in porous materials and cannot be eliminated with consumer air fresheners. We use thermal fogging (penetrates the same way smoke did), ozone treatments (oxidizes odor molecules), and hydroxyl generators (safe for occupied spaces) to permanently neutralize smoke odors.',
    },
    {
      question: 'Can you save electronics and appliances after a fire?',
      answer:
        'Many electronics can be restored through ultrasonic cleaning and professional circuit board decontamination. Appliances depend on the extent of heat and soot exposure. We partner with certified electronics restoration specialists and will give you an honest assessment of what can and cannot be saved before any work begins.',
    },
  ],
}

export default fireSmokeCleanup
