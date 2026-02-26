import type { ServiceData } from './types'

const waterDamageRestoration: ServiceData = {
  slug: 'water-damage-restoration',
  name: 'Water Damage Restoration',
  tagline: 'Fast, professional water damage restoration when every minute counts.',
  description:
    'Our certified technicians respond within 60 minutes to minimize damage and restore your property. We handle everything from emergency water extraction to complete structural drying and reconstruction.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
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
        'Scientific moisture mapping with thermal imaging and hygrometers ensures no hidden pockets of moisture are left behind.',
      icon: 'beaker',
    },
  ],
  contentParagraphs: [
    'Water damage can strike at any time — a burst pipe in the middle of the night, a flash flood during a storm, or a slow leak that goes undetected for weeks. Whatever the cause, the key to minimizing damage and restoration costs is rapid response. Our certified water damage restoration team arrives on-site within 60 minutes of your call, equipped with industrial-grade extraction and drying equipment.',
    'Our restoration process follows IICRC S500 standards, the gold standard in the water damage restoration industry. We begin with a thorough assessment using thermal imaging cameras and moisture meters to map the full extent of water intrusion. This ensures no hidden moisture pockets are missed — a critical step in preventing secondary damage like mold growth and structural deterioration.',
    'Once assessment is complete, we deploy our multi-phase drying system. High-capacity extractors remove standing water, followed by strategic placement of commercial dehumidifiers and air movers. We monitor moisture levels daily, adjusting equipment placement as needed to achieve optimal drying conditions. Most residential properties reach target dryness within 3-5 days.',
    'Beyond structural restoration, we understand the emotional toll water damage takes on families. Our content restoration team carefully inventories and treats affected personal belongings, from family photos to important documents. We work directly with your insurance company to streamline the claims process, so you can focus on getting your life back to normal.',
  ],
  stats: [
    { label: 'Average Response Time', value: '<60 min' },
    { label: 'Jobs Completed', value: '2,500+' },
    { label: 'Customer Satisfaction', value: '98.7%' },
    { label: 'Insurance Partners', value: '45+' },
  ],
  testimonial: {
    quote:
      'When our basement flooded at 2 AM, Flood Doctor had a team at our door within 45 minutes. They saved our finished basement and handled everything with our insurance company. I cannot recommend them highly enough.',
    author: 'Sarah Chen',
    role: 'Homeowner in Riverside',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
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
      description: 'Advanced drying techniques using commercial dehumidifiers and air movers to restore moisture levels to pre-loss conditions.',
    },
    {
      name: 'Content Restoration',
      description: 'Specialized cleaning, drying, and restoration of personal belongings, documents, electronics, and furniture affected by water.',
    },
    {
      name: 'Reconstruction Services',
      description: 'Full rebuild and repair of damaged drywall, flooring, cabinetry, and other structural elements to pre-loss condition.',
    },
    {
      name: 'Emergency Board-Up',
      description: 'Immediate property securing services including board-up, roof tarping, and temporary barriers to prevent further damage.',
    },
    {
      name: 'Insurance Coordination',
      description: 'Direct billing and claims documentation support with all major insurance carriers to streamline your restoration process.',
    },
  ],
  faqs: [
    {
      question: 'How quickly can you respond to a water damage emergency?',
      answer:
        'We guarantee a response within 60 minutes for all emergency calls within our service area. Our teams are stationed strategically across the region and are available 24/7, 365 days a year.',
    },
    {
      question: 'Do you work with insurance companies?',
      answer:
        'Yes, we work with all major insurance carriers and can bill them directly. Our team includes certified estimators who document everything thoroughly to ensure your claim is processed smoothly and you receive the maximum coverage you\'re entitled to.',
    },
    {
      question: 'How long does the water damage restoration process take?',
      answer:
        'The timeline depends on the extent of damage. Emergency water extraction typically takes 4-8 hours. Structural drying usually requires 3-5 days with daily monitoring. Full restoration including any reconstruction can take 1-4 weeks depending on the scope of work needed.',
    },
    {
      question: 'Can you prevent mold after water damage?',
      answer:
        'Absolutely. Mold prevention is a critical part of our restoration process. We apply antimicrobial treatments, ensure complete structural drying, and perform post-restoration moisture testing. If we respond within 24-48 hours of the water event, mold growth can almost always be prevented entirely.',
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
