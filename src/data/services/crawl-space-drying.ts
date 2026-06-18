import type { ServiceData } from './types'

const crawlSpaceDrying: ServiceData = {
  slug: 'crawl-space-drying',
  name: 'Crawl Space Drying',
  tagline: 'Eliminate crawl space moisture before it destroys your home from below.',
  description:
    'Excess crawl space moisture causes wood rot, mold growth, pest infestations, and poor indoor air quality throughout your home. Our crawl space services include emergency drying, vapor barrier installation, dehumidification, and full encapsulation to permanently control below-home moisture.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    {
      name: 'Standing Water Extraction',
      description:
        'Low-profile submersible pumps and extraction equipment designed for tight crawl spaces remove standing water even from areas with limited clearance.',
      icon: 'bolt',
    },
    {
      name: 'Vapor Barrier Installation',
      description:
        '20-mil reinforced polyethylene vapor barriers cover the entire crawl space floor and are sealed to foundation walls, blocking ground moisture from entering.',
      icon: 'shield-check',
    },
    {
      name: 'Crawl Space Encapsulation',
      description:
        'Full encapsulation seals the crawl space from the outside environment — walls, floor, piers, and vents are covered with moisture barrier, creating a controlled environment.',
      icon: 'lock-closed',
    },
    {
      name: 'Commercial Dehumidification',
      description:
        'Self-draining crawl space dehumidifiers maintain relative humidity below 55%, the threshold for mold growth and wood-destroying organism activity.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'Structural Wood Treatment',
      description:
        'Moisture-damaged joists, sills, and subfloor are treated with borate-based preservatives that kill active wood rot and prevent future fungal decay and termite damage.',
      icon: 'home-modern',
    },
    {
      name: 'Drainage System Installation',
      description:
        'Interior drainage channels and sump pump systems redirect groundwater away from your crawl space before it can accumulate and cause problems.',
      icon: 'wrench-screwdriver',
    },
  ],
  contentParagraphs: [
    'Your crawl space may be out of sight, but it has a direct impact on your home\'s structural integrity, indoor air quality, and energy efficiency. Research shows that up to 40% of the air you breathe on the first floor originates from the crawl space through a phenomenon called the stack effect. If that crawl space is damp, moldy, or contaminated, those conditions are being drawn up into your living areas every day.',
    'Crawl space moisture comes from multiple sources: ground vapor rising through bare soil, groundwater seepage through foundation walls, plumbing leaks, condensation from temperature differentials, and surface water intrusion during heavy rain. Traditional vented crawl spaces — once considered best practice — actually make moisture problems worse by introducing humid outdoor air that condenses on cool crawl space surfaces during summer months.',
    'Our crawl space drying and encapsulation process begins with removing any standing water, debris, and existing failed vapor barriers. We inspect all structural wood for rot, mold, and pest damage, treating affected areas with borate-based preservatives. We then install a heavy-duty 20-mil reinforced vapor barrier across the entire floor, sealed to foundation walls with mechanical fasteners and moisture-resistant tape. For full encapsulation, wall-mounted barriers extend from footer to rim joist.',
    'The final component is environmental control. We install a commercial-grade, self-draining dehumidifier sized for your crawl space volume and set to maintain relative humidity below 55%. Existing foundation vents are sealed to prevent humid air intrusion. The result is a clean, dry, controlled environment that protects your floor system, improves indoor air quality, reduces energy costs, and prevents the conditions that attract termites, carpenter ants, and other wood-destroying pests.',
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
      name: 'Mold Remediation',
      description: 'Professional mold removal for crawl spaces where chronic moisture creates ideal fungal growth conditions.',
    },
    {
      name: 'Structural Drying',
      description: 'Commercial drying systems for crawl spaces after plumbing failures or flooding events.',
    },
    {
      name: 'Odor Removal',
      description: 'Eliminating musty odors that originate from damp crawl spaces and permeate upward into living areas.',
    },
    {
      name: 'Basement Waterproofing',
      description: 'Below-grade moisture control solutions for basements that complement crawl space encapsulation.',
    },
    {
      name: 'Structural Repair',
      description: 'Sistering or replacing moisture-damaged floor joists, sill plates, and subflooring.',
    },
    {
      name: 'Pest Prevention',
      description: 'Encapsulation and moisture control eliminate the damp conditions that attract termites and other pests.',
    },
  ],
  faqs: [
    {
      question: 'What is crawl space encapsulation?',
      answer:
        'Encapsulation is the process of completely sealing your crawl space from the outside environment. This includes covering the floor with a heavy-duty vapor barrier sealed to the walls, sealing foundation vents, and installing a dehumidifier to control humidity. The result is a clean, dry, conditioned space that protects your home from moisture-related damage.',
    },
    {
      question: 'How do I know if my crawl space has a moisture problem?',
      answer:
        'Common signs include musty odors on the first floor, high indoor humidity, condensation on windows, mold growth, sagging or soft floors, increased allergy symptoms, higher-than-expected energy bills, and visible mold or standing water in the crawl space itself. A professional inspection with moisture readings provides a definitive assessment.',
    },
    {
      question: 'Should crawl space vents be open or closed?',
      answer:
        'Current building science strongly recommends closed (sealed) crawl spaces. Open vents allow humid outdoor air in during summer, which condenses on cool crawl space surfaces and increases moisture levels. Sealed, conditioned crawl spaces maintain lower humidity year-round and are now recommended by the Department of Energy and building code in many jurisdictions.',
    },
    {
      question: 'How long does encapsulation last?',
      answer:
        'A properly installed crawl space encapsulation system lasts 20-25 years or more. The 20-mil reinforced vapor barrier is extremely durable. The dehumidifier typically has a 5-8 year lifespan and will need eventual replacement. We recommend annual inspections to verify the system is functioning properly.',
    },
    {
      question: 'Will encapsulation increase my home value?',
      answer:
        'Yes. Crawl space encapsulation is one of the few home improvements that pays for itself through energy savings (15-20% reduction in heating/cooling costs) while also increasing resale value. Home inspectors note encapsulated crawl spaces favorably, and it eliminates a common deal-breaker finding during home sales.',
    },
    {
      question: 'How much does crawl space encapsulation cost?',
      answer:
        'Cost varies based on crawl space size, accessibility, existing conditions, and scope of work needed. A basic vapor barrier installation runs less than full encapsulation with sealed walls, drainage, and dehumidification. We provide on-site assessments and detailed proposals so you know exactly what is included before any work begins.',
    },
  ],
}

export default crawlSpaceDrying
