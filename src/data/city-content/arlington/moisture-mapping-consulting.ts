import type { CityServiceContent } from '../types'

export const content: CityServiceContent = {
  meta: {
    title: 'Moisture Mapping & Consulting in Arlington, VA | Flood Doctor',
    description: `Arlington's local moisture mapping specialists. Infrared thermography for high-rise condos, rowhouses & multi-unit buildings in Rosslyn, Clarendon & Crystal City. Call (877) 497-0007.`,
  },
  h1: 'Moisture Mapping & Consulting in Arlington, Virginia',
  introSection: {
    headline: `Scientific Moisture Assessment for Arlington Urban Properties`,
    paragraphs: [
      `Moisture mapping in Arlington presents challenges found nowhere else in Northern Virginia. A 25-story Rosslyn condominium with water migrating through concrete slabs between units, a Clarendon rowhouse where shared party walls transmit moisture from an adjacent property, or a Crystal City high-rise with HVAC condensate saturating interior wall cavities—each scenario demands scientific diagnostics that account for urban building construction. Flood Doctor brings FLIR infrared thermography, calibrated moisture instrumentation, and psychrometric experience to document moisture conditions in the dense, vertically-oriented building stock that defines Arlington County.`,
      `Our consulting practice has mapped moisture patterns through Pentagon City residential towers, traced concealed water migration paths in Lyon Village colonials with original plaster walls, and documented building envelope failures in Ballston mixed-use developments. Arlington properties require moisture consultants who understand multi-unit coordination, HOA documentation requirements, and the structural complexities of high-rise and mid-rise construction. Our trained team produces digital moisture maps accepted by insurance carriers, condominium associations, and courts—providing the objective data needed to resolve disputes about damage origin, scope, and responsibility between neighboring unit owners.`,
    ],
    localContext: `Arlington County's mix of high-rise condominiums, historic rowhouses, and mid-century single-family homes creates diverse moisture mapping challenges that require experience across multiple building construction types.`,
  },
  processSteps: [
    {
      title: 'Multi-Unit Thermal Reconnaissance',
      description: `For Arlington condos and rowhouses, we begin with infrared scanning of both the affected unit and adjacent spaces. Moisture frequently crosses property boundaries through shared walls, floors, and ceilings. Our FLIR cameras detect thermal anomalies indicating moisture presence in neighboring units—critical data for establishing damage origin and responsibility.`,
      timeframe: 'Hours 1-3',
    },
    {
      title: 'Quantitative Moisture Profiling',
      description: `NIST-calibrated pin-type and capacitance meters record moisture content at grid intervals across all affected surfaces. In Arlington high-rises, we profile concrete slabs, metal stud assemblies, and gypsum board—materials that behave differently than wood-frame residential construction and require specialized interpretation.`,
      timeframe: 'Hours 2-5',
    },
    {
      title: 'Psychrometric Condition Mapping',
      description: `We measure temperature, relative humidity, and dew point across multiple zones within the property. In mechanically ventilated high-rise buildings, psychrometric conditions vary significantly between interior rooms, perimeter walls, and common corridors—each affecting moisture behavior differently.`,
      timeframe: 'Hours 3-5',
    },
    {
      title: 'Digital Documentation Assembly',
      description: `All readings are compiled into georeferenced digital moisture maps showing moisture content at each grid point. For multi-unit situations common in Arlington, maps clearly delineate moisture boundaries relative to unit demising walls—essential documentation for determining responsibility.`,
      timeframe: 'Day 1',
    },
    {
      title: 'Drying Protocol & HOA Coordination',
      description: `We develop drying strategies accounting for building management access restrictions, noise ordinances, and shared-system HVAC considerations. Our protocols include coordination recommendations for HOA boards managing multi-unit water events in Arlington condominium buildings.`,
      timeframe: 'Day 1-2',
    },
  ],
  localChallenges: [
    {
      title: 'Multi-Unit Water Migration Through Concrete',
      description: `Arlington high-rise condominiums use post-tensioned concrete slab construction. Water from an upper-floor unit migrates through slab penetrations, expansion joints, and micro-cracks, appearing in units below—sometimes two or three floors down. Identifying the origin unit requires systematic moisture profiling across multiple floors.`,
      solution: `We deploy thermal imaging floor-by-floor to trace moisture migration paths through concrete construction. Pin-type meters at slab penetrations and capacitance scans across ceiling surfaces below establish the vertical moisture travel path, providing objective evidence of the damage origin unit.`,
    },
    {
      title: 'Historic Rowhouse Shared-Wall Moisture Transfer',
      description: `Lyon Village and Clarendon rowhouses share party walls that readily transmit moisture between properties. Identifying whether moisture originates from the subject property or an adjacent unit affects insurance claims, repair responsibility, and neighbor relations in these tightly-built urban corridors.`,
      solution: `Infrared scanning of shared party walls from both sides reveals moisture directionality. We coordinate with adjacent property owners when possible and document findings with timestamped thermal images that establish moisture flow direction—critical evidence when neighbor disputes arise.`,
    },
    {
      title: 'HVAC-Induced Concealed Moisture in High-Rises',
      description: `Centralized and individual HVAC systems in Rosslyn and Pentagon City towers generate condensation on supply ducts, drain pans, and coils that saturates surrounding wall cavities. This moisture accumulates invisibly for months, creating extensive hidden damage before occupants detect any symptoms.`,
      solution: `Our thermal imaging protocol includes systematic scanning of HVAC supply runs, return plenums, and mechanical closets. We identify condensation-related moisture patterns distinct from plumbing leaks, documenting the HVAC origin for building management and insurance purposes.`,
    },
    {
      title: 'Underground Parking Structure Water Intrusion',
      description: `Below-grade parking structures beneath Arlington high-rises experience hydrostatic water pressure, waterproofing membrane failures, and surface drainage infiltration. Moisture migrating upward from parking levels into residential floors above creates persistent dampness that standard assessments may attribute to other sources.`,
      solution: `We profile moisture conditions from the parking structure upward through the podium level into residential floors. Capacitance scanning of slab undersides in the garage identifies active water transmission zones, while upper-floor mapping correlates parking-level moisture with residential unit complaints.`,
    },
    {
      title: 'Mid-Century Construction Material Variability',
      description: `Shirlington and Ballston neighborhoods include mid-century buildings with original materials—plaster over masonry, terrazzo over concrete, and early HVAC systems—that respond to moisture differently than modern construction. Standard moisture meter calibration curves may not apply to these materials.`,
      solution: `We maintain calibration reference data for mid-century building materials common in Arlington. Our technicians recognize the moisture behavior characteristics of original plaster, masonry block, and vintage flooring systems, providing accurate assessments that account for material-specific moisture dynamics.`,
    },
  ],
  equipmentSection: {
    headline: 'Instrumentation for Arlington Urban Moisture Assessment',
    equipment: [
      {
        name: 'FLIR T-Series Thermal Camera',
        purpose: 'Detects moisture behind walls, above ceilings, and beneath floors across multiple units in high-rise and rowhouse construction without demolition',
        brand: 'FLIR',
      },
      {
        name: 'Tramex Concrete Moisture Encounter',
        purpose: 'Non-destructive capacitance meter specifically calibrated for concrete slab moisture assessment in high-rise construction',
        brand: 'Tramex',
      },
      {
        name: 'Delmhorst BD-2100 Pin Meter',
        purpose: 'NIST-traceable invasive moisture readings for wood framing, gypsum board, and structural lumber in rowhouse and mid-rise construction',
        brand: 'Delmhorst',
      },
      {
        name: 'Vaisala HMP110 Humidity Probe',
        purpose: 'High-accuracy in-situ relative humidity measurement within concrete slabs and enclosed wall cavities in mechanically ventilated buildings',
        brand: 'Vaisala',
      },
      {
        name: 'Articulating Borescope Camera',
        purpose: 'Visual inspection inside wall cavities, above drop ceilings, and within mechanical chases without destructive access in occupied buildings',
      },
      {
        name: 'Multi-Floor Mapping Software',
        purpose: 'Digital moisture documentation platform supporting floor-by-floor mapping with unit boundary overlays for multi-unit damage delineation',
      },
    ],
    localNote: `Our Arlington assessment teams carry concrete-specific instrumentation alongside standard building material meters, reflecting the diverse construction types—from steel and concrete high-rises to wood-frame rowhouses—found across the county.`,
  },
  pricingSection: {
    headline: 'Moisture Mapping & Consulting Costs in Arlington',
    intro: `Arlington moisture mapping costs depend on the building type, number of units affected, and complexity of construction. Multi-unit high-rise assessments involving coordination across several floors differ significantly from single-family rowhouse evaluations. We provide detailed scope-of-work proposals and work directly with HOA management, insurance carriers, and property managers.`,
    factors: [
      'Building construction type—concrete high-rise assessments require different instrumentation than wood-frame rowhouses',
      'Number of units or floors requiring assessment in multi-unit water events',
      'Access coordination requirements with building management, adjacent unit owners, and HOA boards',
      'Documentation scope for insurance claims, HOA reporting, or inter-unit liability determination',
      'Duration of monitoring during active drying operations across multiple affected spaces',
    ],
    cta: `Call (877) 497-0007 for a detailed assessment proposal. We coordinate with building management and HOA boards to scope multi-unit evaluations efficiently.`,
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
    responseTime: `Same-day moisture assessment throughout Arlington County. Emergency thermal imaging available promptly for active water intrusion in occupied buildings. Call (877) 497-0007.`,
  },
  faqs: [
    {
      question: 'Can you determine which condo unit is the source of water damage?',
      answer: `Yes. Our multi-unit moisture mapping traces water migration paths through concrete slabs, shared walls, and mechanical penetrations. Infrared imaging and calibrated meter readings at unit boundaries provide objective evidence of moisture directionality—essential data for establishing responsibility between unit owners and HOA common elements.`,
    },
    {
      question: 'Do you coordinate with Arlington condo HOA management?',
      answer: `Yes. We routinely work with property managers and HOA boards throughout Arlington. We arrange building access, coordinate multi-unit inspections, and provide documentation formatted for HOA reporting requirements. Our assessment reports clearly distinguish between unit-owner and common-element moisture sources.`,
    },
    {
      question: 'How do you map moisture in concrete high-rise construction?',
      answer: `Concrete requires specialized techniques. We use capacitance meters calibrated for concrete density, in-situ relative humidity probes inserted into drilled test ports, and thermal imaging to detect evaporative cooling on slab surfaces. These methods provide accurate moisture assessment in the post-tensioned concrete construction typical of Arlington high-rises.`,
    },
    {
      question: 'Can moisture mapping detect HVAC condensation problems?',
      answer: `Absolutely. Infrared cameras reveal condensation patterns along supply ducts, around air handlers, and within mechanical closets. These thermal signatures are distinctly different from plumbing leak patterns, allowing us to identify HVAC-related moisture sources that building maintenance teams can address directly.`,
    },
    {
      question: 'What documentation do you provide for insurance claims?',
      answer: `Our reports include timestamped digital moisture maps, infrared thermal images, calibrated meter readings at each grid point, psychrometric data, and a professional narrative interpreting findings. This documentation package meets requirements for insurance adjusters, attorneys, and arbitration proceedings.`,
    },
    {
      question: 'How does moisture mapping work in shared-wall rowhouses?',
      answer: `We scan party walls from the accessible side using infrared cameras and capacitance meters. Moisture gradients across the wall reveal flow direction—higher readings on one side indicate the moisture source. When both sides are accessible, paired readings provide definitive directional evidence.`,
    },
    {
      question: 'Do you offer expert witness services for Arlington property disputes?',
      answer: `Yes. Our trained moisture consultants provide expert testimony in court proceedings, arbitration, and mediation. We have supported cases involving inter-unit damage disputes, construction defect claims, and insurance coverage disagreements for Arlington condominium and residential properties.`,
    },
    {
      question: 'What is the difference between moisture mapping and a standard water damage inspection?',
      answer: `Standard inspections identify visible damage and general moisture presence. Moisture mapping produces quantitative, georeferenced data at grid intervals using calibrated instruments. The result is a scientific document showing exact moisture levels at specific locations—data that drives drying strategy and stands up to scrutiny in disputes.`,
    },
  ],
  relatedBlogSlugs: [
    'water-damage-restoration-process',
    'signs-of-hidden-mold',
  ],
  finalCTA: {
    headline: 'Moisture Concerns in Your Arlington Property?',
    paragraph: `Whether you manage a Rosslyn high-rise, own a Clarendon rowhouse, or oversee an Arlington condominium association, our scientific moisture mapping provides the objective data you need. Call (877) 497-0007 for a professional assessment.`,
  },
}
