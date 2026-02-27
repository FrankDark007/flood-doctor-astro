import type { ServiceData } from './types'

const basementFlooding: ServiceData = {
  slug: 'basement-flooding',
  name: 'Basement Flooding',
  tagline: 'Expert below-grade flood cleanup and long-term prevention solutions.',
  description:
    'Basements are the most flood-prone area of any home due to their below-grade position and proximity to groundwater. Our basement flooding specialists handle emergency extraction, decontamination, structural drying, and implement prevention systems like sump pumps and waterproofing to stop it from happening again.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
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
      name: 'Emergency Basement Pumping',
      description:
        'Submersible pumps and truck-mounted extractors remove standing water from basements rapidly, even when water depth prevents standard equipment access.',
      icon: 'bolt',
    },
    {
      name: 'Sump Pump Installation',
      description:
        'Primary and battery-backup sump pump systems with water-level alarms provide reliable basement flood protection against groundwater and storm events.',
      icon: 'cog-6-tooth',
    },
    {
      name: 'Interior Waterproofing',
      description:
        'French drain systems, interior drainage channels, and vapor barriers redirect groundwater to sump systems before it reaches your finished basement.',
      icon: 'shield-check',
    },
    {
      name: 'Foundation Crack Repair',
      description:
        'Epoxy and polyurethane injection seals foundation cracks from the inside, stopping active water seepage and preventing future intrusion through the concrete.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Below-Grade Drying',
      description:
        'Basements present unique drying challenges due to limited airflow and high ambient humidity. We deploy desiccant dehumidifiers optimized for below-grade conditions.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'Mold Prevention Protocol',
      description:
        'Basements are prime mold territory. Antimicrobial treatments, proper drying, and ongoing humidity control prevent the fungal growth that commonly follows basement floods.',
      icon: 'beaker',
    },
  ],
  contentParagraphs: [
    'Basement flooding affects millions of American homeowners every year. Whether caused by heavy rainfall overwhelming your foundation drainage, a failed sump pump, sewer backup, or a burst water heater, below-grade flooding presents unique challenges that above-grade water damage does not. The combination of limited ventilation, concrete surfaces that hold moisture for weeks, and proximity to soil make basements especially vulnerable to secondary damage including mold growth and structural deterioration.',
    'Our basement flood response begins with rapid water removal using submersible pumps rated for high-volume extraction. Once standing water is removed, we assess the source. Groundwater intrusion through cracks or the floor-wall joint requires different solutions than a sewer backup or appliance failure. Understanding the source determines both the cleanup protocol (clean water versus contaminated) and the prevention strategy we recommend.',
    'Drying a basement is significantly more challenging than drying above-grade spaces. Concrete absorbs water like a sponge and releases it slowly — a saturated basement slab can take weeks to dry with conventional equipment. We use desiccant dehumidifiers that maintain effectiveness in the cool, humid conditions typical of basements, combined with directed airflow across concrete surfaces to accelerate evaporation. Daily moisture monitoring ensures we achieve complete drying.',
    'Beyond the immediate cleanup, we help homeowners address the root cause to prevent recurrence. Our waterproofing solutions include interior French drain systems that capture groundwater before it reaches your living space, primary and battery-backup sump pump installations, foundation crack injection, and exterior grading recommendations. For finished basements, we can recommend moisture-resistant materials for the rebuild that will withstand future minor moisture events.',
  ],
  stats: [
    { label: 'Basement Floods Resolved', value: '3,500+' },
    { label: 'Sump Pumps Installed', value: '1,200+' },
    { label: 'Emergency Response', value: '<60 min' },
    { label: 'Repeat Flood Rate (clients)', value: '<3%' },
  ],
  testimonial: {
    quote:
      'Our finished basement flooded for the third time in two years. Previous companies just dried it out and left. Flood Doctor dried it out AND installed a French drain system with a battery-backup sump pump. That was 18 months ago and we have had zero issues since, even during the heavy spring rains. Should have called them first.',
    author: 'Kevin and Diane Patel',
    role: 'Homeowners in Ashburn',
    imageUrl:
      'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Water Damage Restoration',
      description: 'Full-service water damage restoration for basement flooding that affects drywall, flooring, and contents.',
    },
    {
      name: 'Sewage Cleanup',
      description: 'Sewer backups are a common cause of basement flooding requiring hazmat-level decontamination protocols.',
    },
    {
      name: 'Structural Drying',
      description: 'Commercial drying systems optimized for the unique challenges of below-grade moisture removal.',
    },
    {
      name: 'Mold Remediation',
      description: 'Basement mold is extremely common after flooding and requires professional remediation.',
    },
    {
      name: 'Sump Pump Services',
      description: 'Installation, repair, and battery-backup systems to protect your basement from future water events.',
    },
    {
      name: 'Foundation Waterproofing',
      description: 'Interior and exterior waterproofing solutions to keep groundwater out of your basement permanently.',
    },
  ],
  faqs: [
    {
      question: 'Why does my basement keep flooding?',
      answer:
        'Recurring basement flooding usually indicates a systemic issue: a failed or absent sump pump, clogged foundation drains, foundation cracks, poor exterior grading directing water toward your foundation, or a high water table. We identify the root cause during our assessment and recommend permanent solutions, not just repeated cleanups.',
    },
    {
      question: 'Does insurance cover basement flooding?',
      answer:
        'Coverage depends on the cause. A burst pipe or water heater failure is typically covered under standard homeowner insurance. Groundwater seepage and sewer backups usually require separate endorsements. Flood damage from natural events requires NFIP or private flood insurance. We help you understand your coverage and document your claim accordingly.',
    },
    {
      question: 'Should I get a sump pump?',
      answer:
        'If you have ever had water in your basement — or if your area has a high water table — a sump pump is essential. We recommend a primary AC-powered pump with a battery backup system and a water alarm. The battery backup is critical because power outages and heavy storms often occur simultaneously.',
    },
    {
      question: 'Can a finished basement be saved after flooding?',
      answer:
        'Often yes, depending on the water category and duration of exposure. Clean water from a pipe burst caught quickly may allow drying in place. Contaminated water or prolonged exposure typically requires removing drywall below the waterline, replacing carpet padding, and potentially replacing flooring. We assess each situation individually to save as much as possible.',
    },
    {
      question: 'How can I prevent basement flooding?',
      answer:
        'Key prevention measures include: a reliable sump pump with battery backup, interior drainage system (French drain), sealed foundation cracks, proper exterior grading (soil sloped away from foundation), clean gutters with downspouts directing water 6+ feet from the foundation, and a backwater valve if sewer backup is a concern.',
    },
    {
      question: 'How long does it take to dry a flooded basement?',
      answer:
        'Basement drying typically takes 5-10 days due to the challenges of below-grade environments — limited airflow, concrete moisture retention, and high ambient humidity. Finished basements with open walls dry faster than those with intact drywall. We monitor daily and provide updates on progress toward the target dry standard.',
    },
  ],
}

export default basementFlooding
