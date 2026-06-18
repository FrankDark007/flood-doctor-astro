import type { CityServiceContent } from '../types'

export const content: CityServiceContent = {
  meta: {
    title: 'Indoor Air Quality Testing in Reston, VA | Flood Doctor',
    description: `Reston indoor air quality testing. Mold sampling for townhome clusters, garden condos & lake-adjacent homes in South Lakes, Hunters Woods & Lake Anne. Call (877) 497-0007.`,
  },
  h1: 'Indoor Air Quality Testing in Reston, Virginia',
  introSection: {
    headline: `Comprehensive IAQ Assessment for Reston Community Properties`,
    paragraphs: [
      `Reston's planned community architecture creates IAQ patterns distinct from other Northern Virginia communities. Townhome clusters in South Lakes share party walls where mold from one unit releases spores that migrate to neighbors through construction gaps. Garden condominiums at grade level near Lake Anne develop persistent humidity conditions supporting biological growth. Wooded-lot single-family homes in Hunters Woods sit beneath canopy that keeps crawl spaces perpetually damp, driving contaminated air upward into living spaces through natural convection. Flood Doctor provides laboratory-grade air quality testing—spore trap sampling, HVAC evaluation, particulate monitoring, and environmental assessment—designed for the housing types and natural environments that characterize Reston.`,
      `Our IAQ team has identified Stachybotrys contamination in North Point townhome shared walls where a slow plumbing leak saturated party wall framing for months before detection, documented elevated airborne particulate in Reston Town Center apartments during adjacent construction phases, and traced whole-house mold spore distribution in Tall Oaks homes to contaminated HVAC systems drawing air through moldy crawl spaces. Reston residents navigating cluster HOA requirements and Reston Association guidelines need IAQ reports that serve multiple audiences—individual homeowner health concerns, HOA maintenance responsibility determination, and insurance claim documentation. Our AIHA-accredited laboratory analysis provides the quantitative species-level data these overlapping stakeholders require.`,
    ],
    localContext: `Reston's townhome clusters, garden condos, lake-adjacent properties, and wooded lots each generate characteristic IAQ challenges tied to shared-wall construction, proximity to water features, and dense tree canopy environments.`,
  },
  processSteps: [
    {
      title: 'Property Type and Environmental Assessment',
      description: `We evaluate your Reston property type—townhome cluster, garden condo, single-family, or apartment—and its environmental context. Lake proximity, tree canopy density, shared-wall configuration, and HVAC type each influence which contamination sources are most probable and where sampling should focus.`,
      timeframe: 'Hour 1',
    },
    {
      title: 'Multi-Location Air Sampling',
      description: `Spore trap cassettes capture airborne mold at symptomatic locations, suspected source areas, and outdoor baseline positions. For townhome clusters, we sample the affected unit and adjacent units sharing party walls. For lake-adjacent properties, outdoor baselines account for naturally elevated ambient mold levels near water.`,
      timeframe: 'Hours 1-3',
    },
    {
      title: 'HVAC and Distribution System Evaluation',
      description: `We inspect air handlers, coils, drain pans, and accessible ductwork for biological contamination. In Reston homes where HVAC returns are near floor level or where ductwork routes through crawl spaces, the distribution system frequently amplifies contamination originating below the living level.`,
      timeframe: 'Hours 2-4',
    },
    {
      title: 'Below-Grade Environmental Assessment',
      description: `Crawl spaces and garden condo ground-level environments receive humidity measurement, visual inspection, and air sampling to determine whether below-grade conditions drive above-grade air quality problems. Vapor barrier integrity, soil moisture, and ventilation adequacy are documented.`,
      timeframe: 'Hours 3-5',
    },
    {
      title: 'HOA-Compatible Laboratory Report',
      description: `AIHA-accredited analysis identifies mold species and concentrations. Our report addresses both homeowner health concerns and HOA documentation requirements, clearly identifying whether contamination sources are within individual units, shared common elements, or external environmental factors.`,
      timeframe: 'Days 3-7',
    },
  ],
  localChallenges: [
    {
      title: 'Townhome Cluster Shared-Wall Mold Migration',
      description: `Reston townhome clusters feature shared party walls where moisture from plumbing leaks, condensation, or exterior water intrusion supports mold growth within the wall cavity. Spores migrate between units through gaps at electrical penetrations, plumbing passages, and construction joints—creating IAQ complaints in units that appear dry and unaffected.`,
      solution: `We sample air in both the symptomatic unit and adjacent units sharing walls. Matching mold species at elevated concentrations across unit boundaries confirms inter-unit migration. This evidence is critical for cluster HOA boards determining maintenance responsibility and for insurance carriers routing claims to the appropriate policy.`,
    },
    {
      title: 'Lake-Adjacent Property Elevated Ambient Mold',
      description: `Properties near Lake Anne, South Lakes, and Lake Fairfax exist in environments with naturally elevated outdoor mold spore concentrations due to lake-associated vegetation, moisture, and organic matter. This elevated outdoor baseline complicates IAQ interpretation—indoor levels that appear normal against standard references may actually represent significant amplification relative to the local outdoor environment.`,
      solution: `We collect outdoor baseline samples at the specific property location rather than relying on generic regional baselines. Indoor-to-outdoor comparison using the property-specific baseline accurately identifies indoor amplification. Species analysis distinguishes between outdoor mold brought in by ventilation and indoor-origin species indicating an active indoor source.`,
    },
    {
      title: 'Garden Condo Grade-Level Humidity and Mold',
      description: `Reston garden condo ground-floor units sit at or near grade with limited airflow beneath the structure. Landscape irrigation, surface drainage, and soil moisture maintain humidity levels at the building perimeter that promote mold growth on exterior wall surfaces and within the wall cavity at grade contact points.`,
      solution: `Air sampling in ground-floor units combined with exterior wall moisture assessment determines whether grade-level moisture drives indoor contamination. We recommend both immediate remediation for existing mold and environmental corrections—drainage improvements, landscape modifications, dehumidification—to prevent recurrence.`,
    },
    {
      title: 'Wooded Lot Crawl Space Contamination',
      description: `Hunters Woods and North Point properties beneath dense tree canopy have crawl spaces where reduced solar drying and limited airflow create perpetual dampness. Mold colonies on floor joists and subflooring release spores that infiltrate the living space above through floor assembly gaps, plumbing penetrations, and HVAC returns.`,
      solution: `Paired sampling in the crawl space and living areas above quantifies the contamination pathway. When crawl space mold is the primary source—often the case in canopy-covered Reston lots—remediation must address the crawl space environment through encapsulation and dehumidification, not just treat upper-level symptoms.`,
    },
  ],
  equipmentSection: {
    headline: 'IAQ Testing Equipment for Reston Properties',
    equipment: [
      {
        name: 'Zefon Bio-Pump Plus Air Sampler',
        purpose: 'Calibrated volumetric air sampling for mold spore quantification with property-specific outdoor baseline comparison capability',
        brand: 'Zefon',
      },
      {
        name: 'TSI DustTrak II Aerosol Monitor',
        purpose: 'Real-time particulate measurement for PM2.5 and PM10 in living spaces, crawl spaces, and near HVAC distribution points',
        brand: 'TSI',
      },
      {
        name: 'HVAC Surface Sampling Kit',
        purpose: 'Swab and tape lift sampling for coil surfaces, drain pans, and duct interiors identifying biological contamination in Reston HVAC systems',
      },
      {
        name: 'Crawl Space Environmental Monitor',
        purpose: 'Temperature, humidity, and CO2 monitoring in below-grade spaces assessing conditions supporting biological contamination',
      },
      {
        name: 'Digital Hygrometer Array',
        purpose: 'Multi-point humidity measurement at walls, floors, and HVAC registers establishing moisture conditions that support or prevent mold growth',
      },
      {
        name: 'Multi-Unit Sampling Logistics Kit',
        purpose: 'Extended cassette supply and labeling system for efficient assessment across multiple townhome or garden condo units in cluster HOA evaluations',
      },
    ],
    localNote: `Our Reston IAQ teams carry multi-unit sampling capability and crawl space assessment equipment matching the shared-wall townhome clusters and wooded-lot single-family homes prevalent throughout the community.`,
  },
  pricingSection: {
    headline: 'Indoor Air Quality Testing Costs in Reston',
    intro: `Reston IAQ testing costs depend on property type and assessment scope. Single-unit townhome evaluations differ from multi-unit cluster assessments. Lake-adjacent properties may need property-specific outdoor baselines. We provide clear proposals and coordinate with cluster HOAs for multi-unit evaluations.`,
    factors: [
      'Number of units requiring sampling in townhome cluster or condo building assessments',
      'Property-specific outdoor baseline sampling for lake-adjacent locations',
      'Crawl space evaluation scope for wooded-lot properties',
      'HVAC system assessment including surface sampling and duct inspection',
      'HOA documentation and multi-stakeholder reporting requirements',
    ],
    cta: `Call (877) 497-0007 for a consultation. We recommend the appropriate testing scope for your Reston property type and concerns.`,
  },
  serviceAreaSection: {
    neighborhoods: [
      'Reston Town Center',
      'South Lakes',
      'Lake Anne',
      'Hunters Woods',
      'North Point',
      'Tall Oaks',
      'Dogwood Pool Area',
      'Lake Newport',
      'Stuart Mill',
      'Indian Ridge',
      'Soapstone',
      'Autumnwood',
      'Glade Cluster',
      'W&OD Trail Corridor',
    ],
    responseTime: `Same-day IAQ assessment throughout Reston. Emergency sampling within 2 hours for visible mold or acute health symptoms. Call (877) 497-0007.`,
  },
  faqs: [
    {
      question: `Can mold in my neighbor's townhome affect my air quality?`,
      answer: `Yes. Shared party walls in Reston townhome clusters allow mold spores to migrate between units through construction gaps. Air sampling on both sides of the shared wall reveals whether inter-unit migration is occurring. This evidence helps cluster HOAs determine maintenance responsibility and route insurance claims appropriately.`,
    },
    {
      question: 'Do lake-adjacent homes naturally have higher mold levels?',
      answer: `Outdoor mold concentrations are typically higher near water features due to moisture and organic matter. We collect outdoor baselines at your specific property location to accurately interpret indoor results. Indoor levels should not significantly exceed your property's outdoor baseline regardless of the ambient environment.`,
    },
    {
      question: 'How does my crawl space affect indoor air quality?',
      answer: `Research indicates 40-60% of indoor air in crawl space homes originates from below the structure. Mold, bacteria, and moisture-laden air from contaminated crawl spaces infiltrate living areas through floor assemblies and HVAC returns. Paired testing above and below confirms whether your crawl space drives indoor contamination.`,
    },
    {
      question: 'Does Reston Association have requirements for IAQ remediation?',
      answer: `Reston Association and individual cluster HOAs may have requirements regarding contractor access, work hours, and notification. Our reports note relevant RA compliance considerations and help coordinate between your individual remediation needs and community governance requirements.`,
    },
    {
      question: 'What if the mold source is in a common area of my condo building?',
      answer: `Our sampling protocol can distinguish between contamination originating within your unit, from adjacent units, or from building common elements. This determination is essential for routing remediation responsibility to the correct party—unit owner, neighboring owner, or HOA/building management.`,
    },
    {
      question: 'How many samples are needed for a typical Reston townhome assessment?',
      answer: `A standard townhome evaluation typically requires 4-6 indoor samples plus outdoor baselines. Multi-unit cluster assessments with adjacent unit sampling may require 8-12 samples. We provide specific recommendations based on your situation and concerns during the initial consultation.`,
    },
  ],
  relatedBlogSlugs: [
    'signs-of-hidden-mold',
    'black-mold-vs-regular-mold',
  ],
  finalCTA: {
    headline: 'Air Quality Concerns in Your Reston Home?',
    paragraph: `Whether you live in a townhome cluster, garden condo, or wooded-lot single-family, our scientific IAQ testing identifies the specific contaminants affecting your indoor environment. Call (877) 497-0007 for a professional assessment.`,
  },
}
