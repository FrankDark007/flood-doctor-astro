import type { ServiceData } from './types'

const waterDamageRestoration: ServiceData = {
  slug: 'water-damage-restoration',
  name: 'Water Damage Restoration',
  tagline: 'Fast, professional water damage restoration when every minute counts.',
  description:
    'Our technicians respond as quickly as local conditions allow to limit damage and begin restoration. We handle everything from emergency water extraction to complete structural drying and reconstruction.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    {
      name: 'Emergency Water Extraction',
      description:
        'Industrial-grade pumps and extractors remove standing water quickly to prevent further damage to your property and belongings.',
      icon: 'bolt',
    },
    {
      name: 'Structural Drying',
      description:
        'Advanced dehumidifiers and air movers ensure complete moisture removal from walls, floors, and ceilings to prevent mold growth.',
      icon: 'home-modern',
    },
    {
      name: 'Mold Prevention',
      description:
        'Antimicrobial treatments and thorough drying protocols eliminate the conditions that lead to dangerous mold infestations.',
      icon: 'shield-check',
    },
    {
      name: '24/7 Emergency Response',
      description:
        'Water damage doesn\'t wait for business hours. Our team is available around the clock, 365 days a year for emergency calls.',
      icon: 'clock',
    },
    {
      name: 'Content Restoration',
      description:
        'Specialized cleaning and restoration of furniture, documents, electronics, and personal belongings affected by water damage.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Moisture Testing',
      description:
        'Scientific moisture mapping with thermal imaging and hygrometers ensures clearly documented pockets of moisture are left behind.',
      icon: 'beaker',
    },
  ],
  contentParagraphs: [
    'Water damage can strike at any time — a burst pipe in the middle of the night, a flash flood during a storm, or a slow leak that goes undetected for weeks. Whatever the cause, the key to minimizing damage and restoration costs is rapid response. Our water damage restoration team arrives with industrial-grade extraction and drying equipment as quickly as dispatch and site conditions allow.',
    'Our restoration process follows IICRC S500 standards, the gold standard in the water damage restoration industry. We begin with a thorough assessment using thermal imaging cameras and moisture meters to map the full extent of water intrusion. This ensures clearly documented moisture pockets are missed — a critical step in preventing secondary damage like mold growth and structural deterioration.',
    'Once assessment is complete, we deploy our multi-phase drying system. High-capacity extractors remove standing water, followed by strategic placement of commercial dehumidifiers and air movers. We monitor moisture levels daily, adjusting equipment placement as needed to achieve optimal drying conditions. Many residential projects reach target dryness within several days, depending on materials, saturation, and site conditions.',
    'Beyond structural restoration, we understand the emotional toll water damage takes on families. Our content restoration team carefully inventories and treats affected personal belongings, from family photos to important documents. We provide claim documentation and scope notes you can share with your insurance company, so you can focus on getting your life back to normal.',
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
      name: 'Flood Damage Cleanup',
      description: 'Comprehensive flood damage remediation including debris removal, sanitization, and structural assessment after natural flooding events.',
    },
    {
      name: 'Mold Remediation',
      description: 'Professional mold inspection, containment, and removal to eliminate health hazards that often follow water damage incidents.',
    },
    {
      name: 'Sewage Cleanup',
      description: 'Safe handling and disposal of Category 3 black water contamination with full decontamination and antimicrobial treatment.',
    },
    {
      name: 'Structural Drying',
      description: 'Advanced drying techniques using commercial dehumidifiers and air movers to dry building materials to documented target moisture levels.',
    },
    {
      name: 'Content Restoration',
      description: 'Specialized cleaning, drying, and restoration of personal belongings, documents, electronics, and furniture affected by water.',
    },
    {
      name: 'Reconstruction Services',
      description: 'Full rebuild and repair of damaged drywall, flooring, cabinetry, and other structural elements to a documented dry standard.',
    },
    {
      name: 'Emergency Board-Up',
      description: 'Immediate property securing services including board-up, roof tarping, and temporary barriers to prevent further damage.',
    },
    {
      name: 'Insurance Coordination',
      description: 'Claims documentation support that can help you communicate scope and progress with your insurance carrier.',
    },
  ],
  faqs: [
    {
      question: 'How quickly can you respond to a water damage emergency?',
      answer:
        'Emergency dispatch is available 24/7, 365 days a year. Response time depends on location, weather, access, and crew availability, and we prioritize urgent water losses.',
    },
    {
      question: 'Do you work with insurance companies?',
      answer:
        'Yes, we work with insurance carriers and can provide claim documentation. Our team includes certified estimators who document everything thoroughly to ensure your claim is processed smoothly and you receive the available claim documentation you\'re entitled to.',
    },
    {
      question: 'How long does the water damage restoration process take?',
      answer:
        'The timeline depends on the extent of damage. Emergency water extraction typically takes 4-8 hours. Structural drying usually requires 3-5 days with daily monitoring. Full restoration including any reconstruction can take 1-4 weeks depending on the scope of work needed.',
    },
    {
      question: 'Can you prevent mold after water damage?',
      answer:
        'Absolutely. Mold prevention is a critical part of our restoration process. We apply antimicrobial treatments, ensure complete structural drying, and perform post-restoration moisture testing. If we respond within 24-48 hours of the water event, early drying and antimicrobial treatment can reduce the risk of mold growth.',
    },
    {
      question: 'What types of water damage do you handle?',
      answer:
        'We handle all categories of water damage: clean water from broken pipes and supply lines (Category 1), gray water from appliance overflows and sump pump failures (Category 2), and black water from sewage backups and flooding (Category 3). Each category requires specific safety protocols and treatment methods.',
    },
    {
      question: 'Do I need to leave my home during restoration?',
      answer:
        'In most cases, you can remain in your home during the restoration process. However, for severe Category 3 (black water) damage or extensive structural issues, we may recommend temporary relocation for your safety. We can help coordinate temporary housing through your insurance if needed.',
    },
  ],
}

export default waterDamageRestoration
