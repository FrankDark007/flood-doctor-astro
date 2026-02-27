import type { ServiceData } from './types'

const burstPipeCleanup: ServiceData = {
  slug: 'burst-pipe-cleanup',
  name: 'Burst Pipe Cleanup',
  tagline: 'Emergency burst pipe response — stop the water, save your property.',
  description:
    'A burst pipe can release hundreds of gallons per hour into your home. Our emergency team responds within 60 minutes to shut off the water supply, extract standing water, and begin the drying process before damage spreads.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
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
      name: 'Emergency Water Shutoff',
      description:
        'We locate and shut off the water supply immediately, then assess the pipe failure to prevent recurrence while extraction begins.',
      icon: 'bolt',
    },
    {
      name: 'Rapid Water Extraction',
      description:
        'Industrial extractors remove standing water from all affected areas, including water that has migrated to adjacent rooms and lower levels.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'Frozen Pipe Prevention',
      description:
        'In cold weather, we identify and address vulnerable pipes with insulation, heat tape, and monitoring to prevent future freeze-related bursts.',
      icon: 'shield-check',
    },
    {
      name: 'Multi-Story Damage Response',
      description:
        'Burst pipes on upper floors cause cascading damage. We address water damage on every affected level simultaneously.',
      icon: 'home-modern',
    },
    {
      name: 'Behind-Wall Drying',
      description:
        'Specialized injection drying systems force dry air into wall cavities, drying framing and insulation without unnecessary demolition.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Plumber Coordination',
      description:
        'We coordinate with licensed plumbers to repair or replace the failed pipe while our team handles all water damage restoration.',
      icon: 'cog-6-tooth',
    },
  ],
  contentParagraphs: [
    'Burst pipes are one of the most common causes of residential water damage, and they can happen at any time. Frozen pipes in winter, corroded pipes in older homes, high water pressure, and shifting foundations all contribute to pipe failures. A single burst supply line can release 400-600 gallons per hour, and if it happens while you are away or asleep, the damage can be catastrophic.',
    'Our burst pipe cleanup process begins with an emergency response to stop the water flow. Once the supply is shut off, we immediately begin extraction using truck-mounted and portable units. Thermal imaging cameras help us trace the full extent of water migration — water from a second-floor burst can travel through wall cavities, pool on first-floor ceilings, and saturate basement areas, all within hours.',
    'After extraction, we assess which materials can be dried in place and which need removal. Modern injection drying technology allows us to dry many wall cavities without full demolition, saving you significant reconstruction costs. We drill small access holes, insert drying nozzles, and monitor internal cavity moisture until target levels are reached. This approach preserves paint, trim, and finishes wherever possible.',
    'Throughout the process, we document everything for your insurance claim. Burst pipe damage is typically covered under standard homeowner policies as sudden and accidental water damage. Our estimators prepare detailed Xactimate reports that insurance adjusters trust, helping ensure your claim is processed quickly and fairly.',
  ],
  stats: [
    { label: 'Pipe Emergencies Handled', value: '3,200+' },
    { label: 'Average Response Time', value: '<45 min' },
    { label: 'Walls Saved (No Demo)', value: '70%' },
    { label: 'Insurance Approval Rate', value: '99%' },
  ],
  testimonial: {
    quote:
      'A pipe burst in our upstairs bathroom while we were on vacation. By the time we got home, water had soaked through two floors. Flood Doctor responded immediately, saved most of our hardwood floors with their injection drying system, and handled everything with our insurance. Could not have asked for better service.',
    author: 'David and Lisa Kowalski',
    role: 'Homeowners in Naperville',
    imageUrl:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Water Damage Restoration',
      description: 'Comprehensive water damage restoration services for all types of water intrusion events.',
    },
    {
      name: 'Structural Drying',
      description: 'Advanced drying techniques to restore moisture levels in building materials to pre-loss conditions.',
    },
    {
      name: 'Hardwood Floor Drying',
      description: 'Specialized floor mat drying systems designed to save water-damaged hardwood flooring.',
    },
    {
      name: 'Mold Prevention',
      description: 'Antimicrobial treatments and controlled drying to prevent mold growth after pipe failures.',
    },
    {
      name: 'Ceiling & Drywall Repair',
      description: 'Professional repair and replacement of water-damaged ceilings and drywall throughout your home.',
    },
    {
      name: 'Insurance Documentation',
      description: 'Thorough documentation including moisture maps, photos, and Xactimate estimates for your claim.',
    },
  ],
  faqs: [
    {
      question: 'What should I do if a pipe bursts in my home?',
      answer:
        'Immediately shut off the main water supply valve (usually near the water meter or where the main line enters your home). Turn off electricity in affected areas if safe to do so. Call us for emergency response. Move valuables away from standing water and begin mopping up what you can safely access.',
    },
    {
      question: 'Are burst pipes covered by insurance?',
      answer:
        'Yes, burst pipe damage is typically covered under standard homeowner insurance policies as sudden and accidental water damage. However, gradual leaks or damage caused by lack of maintenance may not be covered. We help document the sudden nature of the event for your claim.',
    },
    {
      question: 'How can I prevent pipes from bursting?',
      answer:
        'Keep your thermostat at 55°F or above during cold weather. Insulate exposed pipes in attics, crawl spaces, and garages. Open cabinet doors under sinks on exterior walls during freezes. Have a plumber inspect older pipes for corrosion. Consider installing a water leak detection system.',
    },
    {
      question: 'How much damage can a burst pipe cause?',
      answer:
        'A single burst pipe can release 400-600 gallons of water per hour. In just 8 hours (overnight, for example), that is up to 4,800 gallons — enough to cause tens of thousands of dollars in damage. Quick shutoff and professional response are critical to minimizing the impact.',
    },
    {
      question: 'Do you repair the pipe itself?',
      answer:
        'We coordinate with licensed plumbers for the pipe repair while our team handles all water damage restoration. This ensures both the plumbing and the water damage are addressed by specialists in each area. We can recommend trusted plumbing partners if you do not have one.',
    },
    {
      question: 'Can you dry walls without tearing them out?',
      answer:
        'In many cases, yes. Our injection drying systems can dry wall cavities through small access holes, preserving the drywall, paint, and trim. This works best when we respond quickly before materials are saturated for extended periods. We assess each wall individually and only recommend demolition when truly necessary.',
    },
  ],
}

export default burstPipeCleanup
