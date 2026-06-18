import type { ServiceData } from './types'

const structuralDrying: ServiceData = {
  slug: 'structural-drying',
  name: 'Structural Drying',
  tagline: 'Scientific drying systems that dry affected structural materials to documented target moisture levels.',
  description:
    'Proper structural drying is the most critical phase of water damage restoration. Our trained technicians deploy commercial dehumidifiers, air movers, and injection drying systems with daily psychrometric monitoring to ensure complete moisture removal from every building material.',
  heroImageUrl: '/graphics/water-emergency-pattern.svg',
  logos: [],
  features: [
    {
      name: 'Psychrometric Monitoring',
      description:
        'We calculate specific humidity, grain depression, and dew point daily to optimize equipment placement and verify drying progress scientifically.',
      icon: 'beaker',
    },
    {
      name: 'Commercial Dehumidification',
      description:
        'LGR (Low Grain Refrigerant) and desiccant dehumidifiers extract moisture from the air, creating the dry conditions needed for materials to release trapped water.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'High-Velocity Air Movers',
      description:
        'Strategically placed air movers create laminar airflow across wet surfaces, accelerating evaporation from walls, floors, and ceilings.',
      icon: 'bolt',
    },
    {
      name: 'Injection Drying Systems',
      description:
        'Specialized nozzles force dry air into wall cavities, under cabinets, and beneath flooring to dry hidden areas without unnecessary demolition.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Thermal Imaging Verification',
      description:
        'FLIR infrared cameras reveal hidden moisture behind walls and under floors that pin-type meters cannot detect, ensuring nothing is missed.',
      icon: 'shield-check',
    },
    {
      name: 'Daily Moisture Documentation',
      description:
        'Every drying day, we record moisture readings at mapped locations, creating a detailed log that proves drying progress for insurance and clearance.',
      icon: 'check',
    },
  ],
  contentParagraphs: [
    'Structural drying is the backbone of any successful water damage restoration project. Without proper drying, even the best extraction leaves enough residual moisture to fuel mold growth, cause wood rot, delaminate flooring, and create musty odors that persist for years. Our approach goes far beyond simply placing fans in a room — we use psychrometric science to engineer the optimal drying environment for your specific structure and materials.',
    'The science behind structural drying involves controlling four variables: temperature, humidity, airflow, and time. Our technicians calculate the specific conditions needed based on the materials involved — hardwood requires different parameters than concrete, drywall dries differently than plaster. We use LGR dehumidifiers that can extract over 17 gallons of water per day from the air, combined with high-velocity air movers that create evaporative airflow across wet surfaces.',
    'One of the most challenging aspects of structural drying is addressing moisture trapped inside wall cavities, under tile, and beneath cabinetry. Our injection drying systems solve this by forcing conditioned air into these enclosed spaces through small access points. This technology allows us to dry 70% of wall cavities without removing the drywall, saving thousands in reconstruction costs and weeks in project timeline.',
    'Every drying project includes daily monitoring with pin-type moisture meters, non-invasive capacitance meters, and thermal imaging. We document readings at mapped grid points throughout the structure, creating a moisture profile that shows exactly how drying is progressing. This data-driven approach ensures we know when your structure has reached its dry standard — typically matching the moisture content of unaffected areas — and prevents both under-drying and unnecessary equipment rental charges.',
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
      description: 'Complete water damage mitigation from extraction through reconstruction for all water intrusion events.',
    },
    {
      name: 'Hardwood Floor Drying',
      description: 'Specialized floor mat systems designed to dry hardwood flooring in place without removal or replacement.',
    },
    {
      name: 'Crawl Space Drying',
      description: 'Below-grade drying and encapsulation to eliminate moisture from crawl spaces and prevent structural issues.',
    },
    {
      name: 'Mold Prevention',
      description: 'Proper structural drying is the most effective mold prevention strategy after any water damage event.',
    },
    {
      name: 'Moisture Testing',
      description: 'Scientific moisture mapping using thermal imaging and meter readings to verify complete drying.',
    },
    {
      name: 'Contents Drying',
      description: 'Controlled drying environments for furniture, documents, and other water-damaged personal belongings.',
    },
  ],
  faqs: [
    {
      question: 'How long does structural drying take?',
      answer:
        'Most residential drying projects reach target moisture levels in 3-5 days. Factors that affect timeline include the volume of water, types of materials affected, ambient conditions, and whether walls are open or closed. We monitor daily and can provide a more specific estimate after the first 24 hours of readings.',
    },
    {
      question: 'Why can\'t I just use regular fans to dry my house?',
      answer:
        'Household fans move air but do not remove moisture from it. Without dehumidification, you are just circulating humid air, which actually slows drying and can spread moisture to unaffected areas. Professional drying requires the combination of air movement AND dehumidification working in calculated balance.',
    },
    {
      question: 'Is structural drying noisy?',
      answer:
        'Commercial equipment does generate noise — roughly equivalent to a loud dishwasher running continuously. Most families adjust within the first day. We can discuss equipment scheduling and placement to minimize disruption to sleeping areas if needed.',
    },
    {
      question: 'Will the equipment increase my electric bill?',
      answer:
        'Yes, running commercial drying equipment will increase your electricity consumption. However, this cost is typically covered by your insurance company as part of the restoration claim. We document equipment run times for your claim and use the most energy-efficient equipment available.',
    },
    {
      question: 'How do you know when drying is complete?',
      answer:
        'We compare moisture readings in affected areas to readings from dry, unaffected areas of the same building materials (called the dry standard). When affected areas match the dry standard, drying is complete. This scientific approach prevents both under-drying and unnecessary extra days of equipment rental.',
    },
    {
      question: 'Can you dry concrete?',
      answer:
        'Yes, though concrete is one of the most challenging materials to dry due to its density and porosity. We use specialized techniques including top-down drying with desiccant dehumidifiers and heat injection systems. Concrete slab drying can take 7-14 days depending on thickness and saturation level.',
    },
  ],
}

export default structuralDrying
