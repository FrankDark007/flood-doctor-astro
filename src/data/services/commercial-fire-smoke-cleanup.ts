import type { ServiceData } from './types'

const commercialFireSmokeCleanup: ServiceData = {
  slug: 'commercial-fire-smoke-cleanup',
  name: 'Commercial Fire & Smoke Cleanup',
  tagline: 'Comprehensive fire damage restoration with a focus on business continuity.',
  description:
    'Commercial fire damage demands coordinated response across multiple trades — from emergency board-up and smoke remediation to structural repair and complete reconstruction. Our fire restoration division manages the entire process to get your business reopened on schedule.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
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
      name: 'Emergency Board-Up & Securing',
      description:
        'Immediate property securing with board-up, roof tarping, and fencing to prevent weather damage, vandalism, and unauthorized entry after a fire event.',
      icon: 'bolt',
    },
    {
      name: 'Smoke & Soot Remediation',
      description:
        'Advanced techniques including dry ice blasting, chemical sponging, and thermal fogging remove smoke residue and soot from every surface without causing additional damage.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'Odor Elimination',
      description:
        'Hydroxyl generators and thermal fogging permanently neutralize smoke odors embedded in structural materials, HVAC systems, and building contents.',
      icon: 'arrow-path',
    },
    {
      name: 'Structural Assessment',
      description:
        'Licensed structural engineers evaluate fire-compromised beams, columns, and load-bearing elements to determine what can be restored versus what must be replaced.',
      icon: 'home-modern',
    },
    {
      name: 'Content Pack-Out & Cleaning',
      description:
        'Inventory, pack-out, and specialized cleaning of salvageable business contents including electronics, furniture, documents, and merchandise.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Complete Reconstruction',
      description:
        'Full buildback from demolition through final finishes — electrical, plumbing, HVAC, framing, drywall, flooring, and paint — all managed under one contract.',
      icon: 'cog-6-tooth',
    },
  ],
  contentParagraphs: [
    'A commercial fire is one of the most devastating events a business can experience. Beyond the direct fire damage, smoke and soot infiltrate every surface, water from suppression systems compounds the destruction, and the resulting business interruption can threaten the survival of the company itself. Our commercial fire and smoke cleanup division provides end-to-end restoration management, from the moment the fire department clears the scene through the day you reopen your doors.',
    'Smoke damage in commercial buildings is particularly insidious because HVAC systems distribute soot particles and corrosive byproducts throughout the entire structure — even areas untouched by flames. Within hours, smoke residue begins corroding metal surfaces, discoloring plastics, and permanently staining porous materials. Our teams begin smoke remediation immediately, using a combination of HEPA vacuuming, dry ice blasting, chemical cleaning, and sealant application to arrest damage before it becomes irreversible.',
    'The water damage component of fire restoration is often overlooked but equally critical. Sprinkler systems and fire hoses can deposit thousands of gallons of water in a commercial building, creating secondary water damage and mold risk that must be addressed simultaneously with smoke cleanup. Our integrated approach deploys water extraction, structural drying, and smoke remediation crews concurrently, compressing the restoration timeline and reducing overall costs.',
    'Our reconstruction team functions as a full general contractor, managing all trades needed to return your facility to pre-loss condition. We handle permitting, inspections, and code compliance while providing you with a single point of accountability for the entire project. Many of our commercial fire clients use the reconstruction phase as an opportunity to implement building improvements and upgrades that are covered under their insurance policy.',
  ],
  stats: [
    { label: 'Average Reopening Timeline', value: '30% faster' },
    { label: 'Fire Restoration Projects', value: '350+' },
    { label: 'Contents Salvage Rate', value: '72%' },
    { label: 'Licensed Trades In-House', value: '12+' },
  ],
  testimonial: {
    quote:
      'An electrical fire shut down our restaurant for what we thought would be months. Flood Doctor coordinated the smoke cleanup, water extraction from the sprinklers, and full kitchen rebuild in just six weeks. They literally saved our business.',
    author: 'Tony Marchetti',
    role: 'Owner, Marchetti Restaurant Group',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Large Loss Restoration',
      description: 'Multi-million dollar fire losses with dedicated project management and full reconstruction capabilities.',
    },
    {
      name: 'Commercial Water Damage Restoration',
      description: 'Fire suppression water causes significant secondary damage that must be addressed immediately after a fire.',
    },
    {
      name: 'Indoor Air Quality Testing',
      description: 'Post-fire air quality assessment to verify safe re-occupancy conditions after smoke remediation.',
    },
    {
      name: 'Environmental Testing',
      description: 'Testing for asbestos, lead paint, and other hazardous materials that may be released or exposed during fire damage.',
    },
    {
      name: 'Commercial Mold Remediation',
      description: 'Mold growth from fire suppression water can develop within days if structural drying is not performed promptly.',
    },
    {
      name: 'Content Restoration',
      description: 'Specialized cleaning and restoration of smoke-damaged business contents, electronics, and inventory.',
    },
  ],
  faqs: [
    {
      question: 'How soon after a fire can restoration begin?',
      answer:
        'We can begin emergency services — board-up, water extraction, and smoke pre-cleaning — as soon as the fire department releases the scene and any fire investigation is complete. Typically this is within 24-48 hours of the fire. The sooner we begin smoke remediation, the more materials and contents we can save.',
    },
    {
      question: 'Can smoke damage in areas far from the fire be restored?',
      answer:
        'Yes, and this is often the majority of the work. Smoke travels through HVAC ducts, elevator shafts, and any opening, depositing soot and odor-causing particles throughout the building. These areas typically require professional cleaning and deodorization but not demolition, making them less expensive to restore than fire-direct areas.',
    },
    {
      question: 'How do you handle the water damage from fire sprinklers?',
      answer:
        'We deploy water extraction and structural drying equipment simultaneously with smoke cleanup crews. Our integrated approach means you have one contractor managing both the fire and water damage components, eliminating coordination delays and conflicting work schedules.',
    },
    {
      question: 'What about hazardous materials exposed or released during the fire?',
      answer:
        'Fires in older commercial buildings can expose or release asbestos, lead paint, and other regulated materials. We conduct hazardous materials surveys before beginning demolition and engage licensed abatement contractors when regulated materials are identified. All work follows EPA and state environmental regulations.',
    },
    {
      question: 'Can you handle both the cleanup and the full reconstruction?',
      answer:
        'Yes. We provide turnkey service from emergency board-up through complete reconstruction and certificate of occupancy. Our in-house general contracting team manages all trades including electrical, plumbing, HVAC, framing, and finishes. Having one contractor manage the entire project streamlines the timeline and simplifies insurance documentation.',
    },
    {
      question: 'How do you permanently eliminate smoke odor?',
      answer:
        'We use a multi-method approach: thorough surface cleaning to remove soot residue, application of odor-sealing primers on structural surfaces, hydroxyl generators for occupied spaces, and thermal fogging for concealed cavities. Unlike masking agents, these methods chemically neutralize odor-causing molecules for permanent elimination.',
    },
  ],
}

export default commercialFireSmokeCleanup
