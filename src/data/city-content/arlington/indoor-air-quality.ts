import type { CityServiceContent } from '../types'

export const content: CityServiceContent = {
  meta: {
    title: 'Indoor Air Quality Testing in Arlington, VA | Flood Doctor',
    description: `Arlington indoor air quality testing for condos, rowhouses & apartments. Mold spore sampling, VOC analysis & HVAC assessment in Rosslyn, Clarendon & Crystal City. Call (877) 497-0007.`,
  },
  h1: 'Indoor Air Quality Testing in Arlington, Virginia',
  introSection: {
    headline: `Professional IAQ Testing for Arlington Urban Residential and Commercial Properties`,
    paragraphs: [
      `Arlington County's dense urban environment creates indoor air quality dynamics fundamentally different from suburban residential testing. A Rosslyn high-rise condo where centralized HVAC distributes contaminants from a mechanical room across 20 floors, a Clarendon rowhouse where shared-wall moisture has generated mold growth affecting adjacent units, or a Crystal City office building where post-renovation VOC levels are triggering employee health complaints—each demands IAQ testing protocols designed for urban building systems. Flood Doctor provides comprehensive air quality assessment including spore trap sampling, real-time particulate monitoring, VOC analysis, and HVAC system evaluation for the multi-unit residential and commercial buildings that characterize Arlington.`,
      `Our IAQ team has identified Aspergillus and Penicillium contamination in Ballston condo HVAC systems where condensate drain pans overflowed into supply plenums, documented elevated particulate levels in Pentagon City apartments adjacent to ongoing construction, and traced chemical sensitivity complaints to improper ventilation in renovated Shirlington commercial spaces. Urban IAQ testing requires understanding of shared building systems, inter-unit air transfer, and the regulatory frameworks—OSHA for commercial, EPA for residential—that govern acceptable exposure levels. Our AIHA-accredited laboratory analysis provides quantitative species identification and concentration data that building managers, HOA boards, and employers need to make informed decisions about remediation and occupant protection.`,
    ],
    localContext: `Arlington's concentration of high-rise condos, historic rowhouses, and commercial buildings creates IAQ challenges where shared air systems, construction density, and regulatory compliance intersect.`,
  },
  processSteps: [
    {
      title: 'Building System Review',
      description: `We review the HVAC configuration, ventilation design, and recent maintenance history before sampling. In Arlington high-rises and commercial buildings, understanding whether air handling is centralized, distributed, or mixed determines sampling locations and interpretation of results.`,
      timeframe: 'Hour 1',
    },
    {
      title: 'Multi-Location Spore Trap Sampling',
      description: `Calibrated air pumps draw measured volumes through spore trap cassettes at symptomatic locations, HVAC supply and return points, common areas, and outdoor baseline positions. For multi-unit buildings, we sample affected units and adjacent spaces to establish contamination boundaries.`,
      timeframe: 'Hours 1-3',
    },
    {
      title: 'VOC and Chemical Assessment',
      description: `Photoionization detectors measure total VOC concentrations in real time. Sorbent tube sampling captures specific chemicals for laboratory analysis when renovation materials, cleaning products, or building materials are suspected contamination sources in commercial or newly-renovated spaces.`,
      timeframe: 'Hours 2-4',
    },
    {
      title: 'HVAC and Ventilation Evaluation',
      description: `We inspect accessible HVAC components—air handlers, coils, filters, drain pans, and ductwork—for visible contamination. Surface swab samples identify biological growth. Airflow measurements verify ventilation rates against ASHRAE 62.1 requirements for the space type and occupancy.`,
      timeframe: 'Hours 3-5',
    },
    {
      title: 'Particulate and Dust Monitoring',
      description: `Real-time particulate counters measure PM2.5 and PM10 levels throughout affected spaces. In Arlington buildings near construction zones, Metro corridors, or heavy traffic, particulate monitoring identifies whether outdoor air infiltration contributes to indoor contamination.`,
      timeframe: 'Hours 4-6',
    },
    {
      title: 'Laboratory Results and Compliance Report',
      description: `AIHA-accredited laboratory analysis identifies mold species, quantifies concentrations, and characterizes chemical compounds. Our report compares results against EPA residential guidelines, OSHA workplace standards, or ASHRAE recommendations appropriate to the building type, with specific remediation recommendations.`,
      timeframe: 'Days 3-7',
    },
  ],
  localChallenges: [
    {
      title: 'High-Rise HVAC System Contamination Distribution',
      description: `Arlington condominiums with centralized or semi-centralized HVAC systems can distribute mold, bacteria, or chemical contaminants from a single mechanical room or common plenum to dozens of units. Occupants in distant units experience symptoms while the contamination source is located in mechanical spaces they never enter.`,
      solution: `We sample air at HVAC supply and return registers in multiple units and common areas, comparing concentrations to identify the distribution pattern. HVAC surface sampling at coils, drain pans, and duct sections within mechanical rooms pinpoints the biological or chemical contamination source within the shared system.`,
    },
    {
      title: 'Inter-Unit Air Transfer in Shared-Wall Buildings',
      description: `Rosslyn and Clarendon rowhouses and older apartment buildings have air pathways between units through shared walls, floor assemblies, and plumbing penetrations. Mold growth in one unit releases spores that migrate to adjacent spaces through these pathways, creating IAQ complaints in units with no visible contamination.`,
      solution: `We sample both the symptomatic unit and suspected source units, comparing mold species and concentrations to establish the contamination pathway. Differential pressure testing identifies air transfer routes between units. This data guides remediation targeting—addressing the source unit contamination rather than repeatedly treating the symptom unit.`,
    },
    {
      title: 'Post-Renovation Chemical Off-Gassing in Sealed Buildings',
      description: `Arlington commercial and residential renovations introduce new materials—paint, adhesives, composite flooring, cabinetry—into tightly sealed, mechanically ventilated buildings. Without adequate flush-out periods, VOC concentrations accumulate to levels that cause headaches, eye irritation, and respiratory complaints among occupants.`,
      solution: `We measure total VOCs and specific chemical compounds including formaldehyde, comparing concentrations against occupational and residential exposure guidelines. When elevated, we calculate required ventilation rates and flush-out durations to bring concentrations below guideline levels, coordinating with building management on implementation.`,
    },
    {
      title: 'Underground Parking Garage Exhaust Infiltration',
      description: `Lower-floor Arlington condo units and ground-level commercial spaces above parking structures experience infiltration of vehicle exhaust containing carbon monoxide, nitrogen dioxide, and particulate matter. Inadequate sealing between garage and occupied spaces allows contaminated air to migrate into living and working environments.`,
      solution: `We measure carbon monoxide and particulate levels in affected units and correlate with garage ventilation cycles and occupancy patterns. Smoke pencil testing at potential infiltration points—utility penetrations, elevator shafts, and floor slab joints—identifies specific pathways requiring sealing to prevent garage air infiltration.`,
    },
  ],
  equipmentSection: {
    headline: 'IAQ Testing Instrumentation for Arlington Urban Properties',
    equipment: [
      {
        name: 'Zefon Bio-Pump Plus Air Sampler',
        purpose: 'Calibrated volumetric air sampling for mold spore quantification across multiple units and HVAC zones in multi-story buildings',
        brand: 'Zefon',
      },
      {
        name: 'RAE Systems ppbRAE 3000',
        purpose: 'Parts-per-billion VOC detection for identifying chemical off-gassing in renovated commercial spaces and sealed residential units',
        brand: 'RAE Systems',
      },
      {
        name: 'TSI DustTrak II',
        purpose: 'Real-time PM2.5 and PM10 measurement identifying particulate contamination from construction, traffic, or parking garage infiltration',
        brand: 'TSI',
      },
      {
        name: 'CO and NO2 Gas Monitors',
        purpose: 'Continuous monitoring for combustion byproduct infiltration from parking garages and traffic-adjacent building zones',
      },
      {
        name: 'Differential Pressure Manometer',
        purpose: 'Measures air pressure relationships between units, corridors, and mechanical spaces to identify inter-unit air transfer pathways',
      },
      {
        name: 'HVAC Surface Sampling Kit',
        purpose: 'Swab and tape lift sampling for coils, drain pans, and duct interiors identifying biological contamination within shared building systems',
      },
    ],
    localNote: `Our Arlington IAQ teams carry multi-unit sampling supplies and building system diagnostic instruments for efficient assessment of high-rise, rowhouse, and commercial properties throughout the county.`,
  },
  pricingSection: {
    headline: 'Indoor Air Quality Testing Costs in Arlington',
    intro: `Arlington IAQ testing costs vary by building type, number of units or spaces involved, and the contaminant types under investigation. Multi-unit condo assessments involving shared HVAC systems differ from single-unit residential testing. Commercial assessments may require OSHA-referenced documentation. We provide scope-specific proposals.`,
    factors: [
      'Number of units or spaces requiring sampling in multi-unit water events or IAQ complaints',
      'Building system complexity—centralized versus individual HVAC affects sampling strategy and scope',
      'Contaminant types under investigation—mold, VOCs, particulates, and combustion gases each require different sampling methods',
      'Regulatory documentation requirements—OSHA compliance for commercial, EPA guidelines for residential',
      'Post-remediation clearance scope including number of containment zones requiring verification sampling',
    ],
    cta: `Call (877) 497-0007 for a detailed proposal. We coordinate with building management and HOA boards to scope multi-unit assessments efficiently.`,
  },
  serviceAreaSection: {
    neighborhoods: [
      'Rosslyn',
      'Clarendon',
      'Ballston',
      'Crystal City',
      'Pentagon City',
      'Shirlington',
      'Lyon Village',
      'Courthouse',
      'Virginia Square',
      'Columbia Pike',
      'Cherrydale',
      'Donaldson Run',
      'Bluemont',
      'Ashton Heights',
    ],
    responseTime: `Same-day IAQ assessment throughout Arlington County. Emergency sampling available within 2 hours for suspected mold or chemical exposure events. Call (877) 497-0007.`,
  },
  faqs: [
    {
      question: 'Can air quality problems in one Arlington condo unit affect other units?',
      answer: `Yes. Mold spores and chemical vapors migrate between units through shared walls, floor assemblies, and plumbing penetrations. Centralized HVAC systems can distribute contaminants from mechanical spaces to all served units. Our multi-unit sampling protocol identifies contamination sources and migration pathways to guide targeted remediation.`,
    },
    {
      question: 'Do you test air quality in commercial office buildings?',
      answer: `Yes. Commercial IAQ assessments include mold sampling, VOC measurement, particulate monitoring, HVAC evaluation, and ventilation adequacy testing. Results are compared against OSHA workplace exposure limits and ASHRAE ventilation guidelines. Reports can be formatted for employee communications, regulatory compliance, and legal documentation.`,
    },
    {
      question: 'What causes chemical smells in newly renovated apartments?',
      answer: `New paint, adhesives, composite flooring, and cabinetry release volatile organic compounds during the first weeks to months after installation. Tightly sealed Arlington buildings concentrate these emissions. We measure specific VOC levels and calculate the ventilation rates needed to bring concentrations below health-based guidelines.`,
    },
    {
      question: 'Can parking garage exhaust affect condo air quality?',
      answer: `Yes. Lower-floor units above parking structures can experience infiltration of carbon monoxide, nitrogen dioxide, and vehicle exhaust particulates through unsealed penetrations, elevator shafts, and floor slab joints. We measure these specific contaminants and identify infiltration pathways requiring sealing.`,
    },
    {
      question: 'How do you determine if mold spore levels are elevated?',
      answer: `We compare indoor mold spore concentrations and species composition against outdoor baseline samples collected the same day. Indoor levels significantly exceeding outdoor levels, or indoor species not found outdoors, indicate an active indoor mold source. Specific species identification helps assess health risk and guide remediation priorities.`,
    },
    {
      question: 'Do HOA boards or property managers receive our reports?',
      answer: `With your authorization, we provide reports to HOA boards, property management companies, and building engineers. For multi-unit events, reports can include both building-wide summary findings for management and unit-specific detail for individual owners or tenants.`,
    },
  ],
  relatedBlogSlugs: [
    'signs-of-hidden-mold',
    'black-mold-vs-regular-mold',
  ],
  finalCTA: {
    headline: 'Air Quality Concerns in Your Arlington Property?',
    paragraph: `Whether you live in a Rosslyn high-rise, Clarendon rowhouse, or manage an Arlington commercial building, our scientific IAQ testing provides the answers you need. Call (877) 497-0007 for a professional assessment.`,
  },
}
