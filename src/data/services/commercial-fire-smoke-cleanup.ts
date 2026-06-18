import type { ServiceData } from './types'

const commercialFireSmokeCleanup: ServiceData = {
  slug: 'commercial-fire-smoke-cleanup',
  name: 'Commercial Fire & Smoke Cleanup',
  tagline: 'Comprehensive commercial fire restoration — minimize losses, maximize recovery.',
  description:
    'Commercial fires disrupt operations, displace employees, and threaten business survival. Our commercial fire restoration team provides emergency stabilization, large-scale smoke and soot removal, content restoration, and full reconstruction managed under one coordinated project.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    { name: 'Emergency Securing', description: 'Immediate property stabilization including board-up, fencing, security, and temporary weather protection for fire-damaged commercial structures.', icon: 'shield-check' },
    { name: 'Large-Scale Smoke Removal', description: 'Industrial cleaning systems address smoke and soot damage across tens of thousands of square feet of commercial space efficiently.', icon: 'wrench-screwdriver' },
    { name: 'HVAC Decontamination', description: 'Commercial HVAC systems spread smoke throughout buildings. Complete ductwork cleaning and filter replacement prevents ongoing contamination.', icon: 'cog-6-tooth' },
    { name: 'Equipment & Inventory Restoration', description: 'Specialized cleaning and anti-corrosion treatments for commercial equipment, machinery, inventory, and business assets.', icon: 'bolt' },
    { name: 'Temporary Operations Support', description: 'We help set up temporary workspaces and can recommend partners for temporary power, communications, and facilities.', icon: 'server' },
    { name: 'Integrated Reconstruction', description: 'Our construction team handles full commercial rebuild from demolition through certificate of occupancy, meeting all commercial building codes.', icon: 'home-modern' },
  ],
  contentParagraphs: [
    'Commercial fire damage has cascading impacts that go far beyond the physical destruction. Lost revenue, displaced employees, disrupted supply chains, and damaged business relationships compound daily. The speed and quality of your restoration response directly determines how much of your business survives the event.',
    'The scope of commercial fire restoration is dramatically larger than residential work. A fire in a restaurant kitchen can close the entire business. A warehouse fire can destroy millions in inventory. An office fire can displace hundreds of workers. Each scenario requires different expertise, and our team has deep experience across all commercial property types.',
    'Smoke damage in commercial buildings often affects areas far from the fire due to HVAC distribution. Soot and smoke residue travel through ductwork and settle on surfaces throughout the building. Our HVAC decontamination team cleans the entire air handling system to prevent ongoing contamination after fire cleaning is complete.',
    'We manage the entire commercial fire restoration as an integrated project, from emergency response through reconstruction and re-occupancy. Our project managers coordinate mitigation crews, content restoration teams, environmental testing, demolition contractors, and reconstruction trades under a unified schedule.',
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
    { name: 'Large Loss Restoration', description: 'Enterprise-scale project management for major commercial fire damage events.' },
    { name: 'Commercial Water Damage', description: 'Remediation of firefighting water damage that accompanies commercial fire events.' },
    { name: 'Contents Restoration', description: 'Large-scale cleaning and restoration of smoke-damaged commercial inventory and equipment.' },
    { name: 'Odor Removal', description: 'Industrial-scale smoke deodorization for large commercial and industrial spaces.' },
    { name: 'Air Quality Testing', description: 'Post-fire air quality assessment to verify safe re-occupancy conditions for employees.' },
    { name: 'Commercial Reconstruction', description: 'Full commercial build-out from demolition through certificate of occupancy.' },
  ],
  faqs: [
    { question: 'How quickly can you respond to a commercial fire?', answer: 'We maintain 24/7 commercial dispatch and can have initial crews mobilized based on location, site access, weather, and available resources. For large-loss fire events, we scale resources rapidly, assembling project teams as quickly as site conditions and resource availability allow.' },
    { question: 'Can you prioritize getting part of our business running?', answer: 'Absolutely. Phased restoration is our standard approach for commercial fires. We identify your most critical operational areas and restore them first, allowing partial business resumption while we continue working on damaged areas.' },
    { question: 'What about our commercial equipment and machinery?', answer: 'We provide immediate anti-corrosion treatments for equipment and machinery to prevent soot-related damage from becoming permanent. Specialized cleaning and restoration follows. We coordinate with equipment manufacturers when needed.' },
    { question: 'How does commercial fire insurance work?', answer: 'Commercial fire policies typically include building coverage, business personal property, business interruption, and extra expense coverage. We provide documentation and communicate with your adjuster or broker as requested so applicable coverages can be reviewed under your policy.' },
    { question: 'Do we need to worry about air quality after a fire?', answer: 'Yes. Smoke particles and combustion byproducts can linger in indoor air long after visible cleaning is complete. We conduct air quality testing before re-occupancy and clean the HVAC system thoroughly.' },
    { question: 'Can you handle the building reconstruction?', answer: 'Yes. Our commercial construction division handles the complete rebuild, meeting all applicable commercial building codes, ADA requirements, and fire code updates.' },
  ],
}

export default commercialFireSmokeCleanup
