import type { CityServiceContent } from '../types'

export const content: CityServiceContent = {
  meta: {
    title: 'Moisture Mapping & Consulting in Herndon, VA | Flood Doctor',
    description: `Herndon moisture mapping experts. Infrared thermography for townhomes, commercial properties & historic downtown buildings in Fox Mill, Franklin Farm & Worldgate. Call (877) 497-0007.`,
  },
  h1: 'Moisture Mapping & Consulting in Herndon, Virginia',
  introSection: {
    headline: `Professional Moisture Diagnostics for Herndon Residential and Commercial Properties`,
    paragraphs: [
      `Herndon sits at the intersection of residential neighborhoods, data center infrastructure, and a charming downtown district—each presenting distinct moisture mapping challenges. A Franklin Farm townhome where water from an upstairs bathroom has migrated through the subfloor into the unit below, a Fox Mill colonial with chronic basement dampness from aging foundation waterproofing, or a Worldgate Centre commercial space experiencing HVAC condensate accumulation in wall cavities—each requires scientific moisture diagnostics to quantify the problem and guide effective remediation. Flood Doctor provides FLIR infrared thermography, NIST-calibrated moisture instrumentation, and psychrometric analysis tailored to Herndon building types.`,
      `Our consulting practice has documented moisture conditions in 1980s townhome developments along the W&OD Trail, mapped water migration patterns through commercial structures near Dulles Airport, and traced storm drain backup pathways into Downtown Herndon properties after heavy rain events. Herndon properties range from vintage downtown buildings with original infrastructure to newer construction in Floris and McNair with modern materials requiring different assessment approaches. Our IICRC-certified moisture consultants produce digital moisture maps that serve as restoration planning tools, insurance claim documentation, and evidentiary records when landlord-tenant disputes or commercial lease disagreements arise over water damage responsibility.`,
    ],
    localContext: `Herndon combines residential townhome communities, commercial properties along the Dulles corridor, and a historic downtown core—each requiring adapted moisture assessment protocols and documentation approaches.`,
  },
  processSteps: [
    {
      title: 'Building Assessment and Protocol Selection',
      description: `We evaluate the building construction type—wood-frame townhome, commercial steel stud, or historic downtown masonry—to select appropriate instruments and calibration profiles. Herndon properties span multiple construction eras and types, each requiring different assessment approaches for accurate results.`,
      timeframe: 'Hour 1',
    },
    {
      title: 'Infrared Thermal Survey',
      description: `FLIR cameras systematically scan affected areas and adjacent spaces to identify moisture patterns. In Herndon townhomes, we focus on shared walls, bathroom-to-lower-level pathways, and HVAC system proximity. For commercial spaces, we scan larger floor areas and mechanical room surroundings.`,
      timeframe: 'Hours 1-3',
    },
    {
      title: 'Calibrated Moisture Profiling',
      description: `Pin-type and capacitance meters record moisture content at grid intervals. Each reading is georeferenced on a digital floor plan. In townhome multi-level assessments, we profile each floor independently and document moisture conditions at floor-ceiling transitions between levels.`,
      timeframe: 'Hours 2-4',
    },
    {
      title: 'Environmental Condition Documentation',
      description: `Psychrometric measurements establish ambient conditions influencing moisture behavior. Temperature, humidity, and dew point readings at multiple locations determine whether environmental factors contribute to the moisture problem and inform dehumidification equipment specifications for drying.`,
      timeframe: 'Hours 3-5',
    },
    {
      title: 'Report and Drying Strategy Delivery',
      description: `The comprehensive moisture map report includes all grid readings, thermal images, environmental data, and professional interpretation. For Herndon rental properties, we provide documentation appropriate for landlord-tenant communications. For commercial spaces, reports address lease obligation considerations.`,
      timeframe: 'Day 1-2',
    },
  ],
  localChallenges: [
    {
      title: 'Townhome Development Multi-Level Water Migration',
      description: `Franklin Farm and McNair townhomes feature three to four levels with bathrooms, laundry, and HVAC equipment distributed across floors. Water from an upper-level plumbing failure migrates downward through floor assemblies, wall cavities, and HVAC chases, often reaching the lowest level before any upper-level evidence appears.`,
      solution: `We map moisture from the suspected source downward, scanning each level with thermal imaging and taking pin-type readings at floor penetrations, stairwell framing, and plumbing chase walls. This top-down profiling captures the complete vertical moisture migration path, ensuring no affected area is missed in the drying plan.`,
    },
    {
      title: 'Storm Drain Backup in Downtown Properties',
      description: `Downtown Herndon properties near the Herndon Town Green experience storm drain surcharging during intense rainfall. Backflow through floor drains introduces contaminated water (Category 2 or 3 per IICRC S500) into lower-level commercial and residential spaces, affecting building materials that require classification-appropriate remediation.`,
      solution: `Our assessment includes water classification determination alongside moisture mapping. We document which materials contacted contaminated water versus clean water migration, as IICRC standards require different remediation protocols for each category. This classification directly affects both the restoration scope and insurance coverage determination.`,
    },
    {
      title: 'Older Infrastructure Plumbing Failures',
      description: `Herndon homes built in the 1970s-80s have aging copper supply lines, cast iron waste pipes, and polybutylene service lines approaching or exceeding their service life. Slow leaks behind walls or beneath slabs can saturate building materials over weeks or months, creating extensive hidden damage that far exceeds the visible evidence.`,
      solution: `Thermal imaging reveals the thermal signature of chronic slow leaks—moisture patterns that extend well beyond any visible staining. Our mapping documents the full extent of saturation including areas where moisture has wicked through framing and insulation, providing restoration contractors with complete scope rather than discovering additional damage during demolition.`,
    },
    {
      title: 'Commercial Data Center Area Emergency Documentation',
      description: `Commercial properties near the Dulles corridor require rapid moisture assessment when water events threaten operational spaces. Property managers and facility operators need same-day documentation of moisture conditions to make informed decisions about equipment relocation, tenant notification, and insurance reporting within aggressive operational timelines.`,
      solution: `We deploy expedited assessment protocols for commercial emergencies—thermal imaging, targeted moisture readings, and preliminary reports delivered within hours rather than days. This rapid-response capability provides property managers with actionable data on the same day as the water event, enabling timely operational and financial decisions.`,
    },
  ],
  equipmentSection: {
    headline: 'Moisture Mapping Equipment for Herndon Properties',
    equipment: [
      {
        name: 'FLIR E-Series Thermal Camera',
        purpose: 'Identifies hidden moisture in townhome multi-level construction, commercial wall assemblies, and downtown masonry buildings',
        brand: 'FLIR',
      },
      {
        name: 'Delmhorst BD-2100 Pin Meter',
        purpose: 'NIST-traceable moisture measurement for wood framing, OSB, and structural lumber in 1980s-2000s residential and commercial construction',
        brand: 'Delmhorst',
      },
      {
        name: 'Tramex Moisture Encounter Plus',
        purpose: 'Non-destructive scanning for occupied spaces in townhomes and commercial properties where surface preservation matters',
        brand: 'Tramex',
      },
      {
        name: 'Protimeter Surveymaster Dual-Mode',
        purpose: 'Combined pin-type and capacitance measurement for efficient field assessment across diverse Herndon building materials',
        brand: 'Protimeter',
      },
      {
        name: 'Psychrometric Calculator',
        purpose: 'Environmental analysis determining drying conditions, dehumidification needs, and condensation risk in multi-zone buildings',
      },
      {
        name: 'Digital Mapping Software',
        purpose: 'Grid-referenced moisture documentation producing multi-level maps with floor transition documentation for townhome and commercial assessments',
      },
    ],
    localNote: `Our Herndon teams carry instrumentation suited to the diverse building stock—from wood-frame townhomes in Franklin Farm to commercial spaces along the Dulles corridor and masonry buildings in Downtown Herndon.`,
  },
  pricingSection: {
    headline: 'Moisture Mapping & Consulting Costs in Herndon',
    intro: `Herndon moisture assessment pricing reflects the building type and assessment complexity. Townhome multi-level evaluations, commercial property assessments, and rental property documentation each have different scope requirements. We provide transparent proposals and coordinate with property managers, landlords, and insurance carriers.`,
    factors: [
      'Building type—townhome, single-family, commercial, or mixed-use properties require different assessment protocols',
      'Number of levels affected in multi-story townhome water migration events',
      'Water classification testing when storm drain backup or sewage involvement is suspected',
      'Urgency of documentation—same-day commercial reports require expedited assessment protocols',
      'Ongoing monitoring duration during active drying operations',
    ],
    cta: `Call (877) 497-0007 for a consultation. We provide clear scope and pricing before beginning any assessment work in your Herndon property.`,
  },
  serviceAreaSection: {
    neighborhoods: [
      'Downtown Herndon',
      'Fox Mill',
      'Worldgate',
      'Franklin Farm',
      'McNair',
      'Floris',
      'Herndon Town Green Area',
      'W&OD Trail Corridor',
      'Dulles Station',
      'Coppermine',
      'Kingstream',
      'Reflection Lake',
      'Van Metre Crossing',
      'Herndon Centennial Golf Area',
    ],
    responseTime: `Same-day moisture assessment throughout Herndon. Emergency commercial response within 90 minutes for active water intrusion. Call (877) 497-0007.`,
  },
  faqs: [
    {
      question: 'Can you assess moisture in multi-level Herndon townhomes?',
      answer: `Yes. Multi-level assessment is a routine part of our Herndon work. We map moisture from the source floor downward through each level, documenting moisture at floor-ceiling transitions, stairwell framing, and plumbing/HVAC penetrations. The resulting multi-level moisture map captures the complete vertical extent of water migration.`,
    },
    {
      question: 'Do you provide moisture assessment for commercial properties in Herndon?',
      answer: `Yes. We assess commercial office spaces, retail properties, and mixed-use buildings along the Dulles corridor and Worldgate area. Commercial assessments include documentation formatted for property management reporting, commercial insurance claims, and lease responsibility determinations.`,
    },
    {
      question: 'How do you handle storm drain backup water classification?',
      answer: `We assess water category per IICRC S500 standards. Storm drain backup (typically Category 2 or 3) requires different remediation protocols than clean water from supply line failures. Our documentation distinguishes which materials contacted contaminated water, directly affecting the restoration scope and insurance coverage.`,
    },
    {
      question: 'What about slow leaks that have been going on for a long time?',
      answer: `Thermal imaging excels at detecting chronic moisture conditions. Slow leaks create distinctive thermal patterns that extend well beyond visible damage. Our mapping documents the full extent of long-term moisture accumulation, which often reveals damage far more extensive than what stains or odors suggest.`,
    },
    {
      question: 'Do you provide documentation for landlord-tenant water damage disputes?',
      answer: `Yes. Our moisture maps provide objective, calibrated data showing where moisture is present and its severity. This documentation helps establish damage scope, source origin, and restoration requirements—essential information for resolving responsibility questions between landlords, tenants, and their respective insurers.`,
    },
    {
      question: 'How fast can you get results for a commercial emergency?',
      answer: `We offer same-day expedited assessment for Herndon commercial properties. Emergency protocols provide preliminary thermal imaging results and key moisture readings within hours of deployment, with formal reports following within 24-48 hours. This timeline supports urgent operational decisions.`,
    },
  ],
  relatedBlogSlugs: [
    'water-damage-restoration-process',
    'signs-of-hidden-mold',
  ],
  finalCTA: {
    headline: 'Need Moisture Diagnostics in Herndon?',
    paragraph: `Residential or commercial, our scientific moisture mapping provides the accurate data you need for effective restoration decisions. Call (877) 497-0007 for a professional assessment of your Herndon property.`,
  },
}
