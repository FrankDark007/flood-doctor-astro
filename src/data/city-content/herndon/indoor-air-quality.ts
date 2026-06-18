import type { CityServiceContent } from '../types'

export const content: CityServiceContent = {
  meta: {
    title: 'Indoor Air Quality Testing in Herndon, VA | Flood Doctor',
    description: `Herndon indoor air quality testing for homes and commercial spaces. Mold sampling, HVAC assessment & VOC analysis in Fox Mill, Franklin Farm & Downtown Herndon. Call (877) 497-0007.`,
  },
  h1: 'Indoor Air Quality Testing in Herndon, Virginia',
  introSection: {
    headline: `Professional IAQ Assessment for Herndon Homes and Commercial Properties`,
    paragraphs: [
      `Herndon indoor air quality concerns emerge from the community's mix of aging residential infrastructure and commercial building stock. A Fox Mill colonial where 30-year-old HVAC ductwork harbors decades of biological accumulation, a Franklin Farm townhome where a slow bathroom leak generated concealed mold affecting the entire unit through supply air distribution, or a Worldgate Centre commercial space where recent tenant improvements off-gassed into an inadequately ventilated workplace environment—each demands scientific air testing to identify contaminants, measure concentrations, and specify effective remediation. Flood Doctor provides AIHA-accredited mold spore sampling, VOC measurement, HVAC evaluation, and particulate monitoring for Herndon residential and commercial properties.`,
      `Our IAQ specialists have traced chronic allergy complaints in Floris homes to Cladosporium colonization on crawl space floor joists feeding spores into the living space above, identified formaldehyde from laminate flooring installations in McNair townhome renovations, and documented post-flood microbial contamination in Downtown Herndon properties affected by storm drain backup near the Town Green. Herndon's proximity to the Dulles data center corridor means our client base includes both residential homeowners seeking family health protection and commercial facility managers maintaining critical infrastructure environments where air quality directly affects equipment reliability and employee health. Our laboratory analysis serves both contexts with species-level identification, quantitative data, and recommendations tailored to the specific environment.`,
    ],
    localContext: `Herndon combines 1980s-90s residential neighborhoods with established commercial properties and a historic downtown district, creating IAQ scenarios from aging home system contamination to commercial building ventilation challenges.`,
  },
  processSteps: [
    {
      title: 'Complaint Assessment and Testing Strategy',
      description: `We document reported symptoms, their timing and location patterns, and evaluate the property for visible moisture, musty odors, and potential contamination sources. For Herndon residential properties, we assess HVAC age, crawl space condition, and water damage history. For commercial spaces, we review ventilation design and tenant improvement history.`,
      timeframe: 'Hour 1',
    },
    {
      title: 'Stratified Air Sampling',
      description: `Spore trap cassettes deployed at symptomatic areas, HVAC registers, basement or crawl space access points, and outdoor baseline locations. For multi-level Herndon townhomes, we sample each level to determine whether contamination is localized to one floor or distributed through the HVAC system to all levels.`,
      timeframe: 'Hours 1-3',
    },
    {
      title: 'HVAC and Mechanical System Evaluation',
      description: `Visual inspection and surface sampling of HVAC components—coils, drain pans, filter housings, and ductwork. For commercial properties, we evaluate air handling units, outdoor air intake locations, and ventilation rates against ASHRAE requirements for the space occupancy.`,
      timeframe: 'Hours 2-4',
    },
    {
      title: 'VOC and Environmental Screening',
      description: `Photoionization detection measures total VOC levels in spaces with renovation materials, musty odors, or chemical sensitivity complaints. Humidity monitoring identifies environments supporting biological growth. For commercial spaces near the Dulles corridor, we assess whether outdoor contaminants infiltrate through the building envelope.`,
      timeframe: 'Hours 3-5',
    },
    {
      title: 'Actionable Laboratory Report',
      description: `AIHA-accredited analysis identifies mold species, quantifies concentrations, and provides comparison against health-based guidelines. Our report includes clear remediation specifications—not generic recommendations but specific actions addressing the identified contamination sources in your Herndon property.`,
      timeframe: 'Days 3-7',
    },
  ],
  localChallenges: [
    {
      title: 'Aging Townhome HVAC Distribution of Mold',
      description: `Franklin Farm and Fox Mill townhomes with original or second-generation HVAC systems accumulate biological contamination on coils, in drain pans, and throughout ductwork over decades. Every cooling cycle generates condensation that feeds mold growth, and every fan cycle distributes spores to every room. Occupants develop chronic symptoms without connecting them to the air distribution system.`,
      solution: `We sample supply air during active HVAC operation and compare against outdoor conditions. HVAC surface sampling identifies the specific contamination source within the system. Results distinguish between contamination requiring coil cleaning, drain pan treatment, or comprehensive duct remediation—avoiding unnecessary whole-system replacement.`,
    },
    {
      title: 'Storm Drain Backup Microbial Contamination',
      description: `Downtown Herndon properties near the Town Green experience storm drain surcharging during intense rainfall that pushes contaminated water into basements and lower-level commercial spaces. Even after water is removed, Category 2 and 3 microbial contamination persists in porous materials, continuously releasing bioaerosols into indoor air.`,
      solution: `Post-backup IAQ testing assesses both mold and bacterial contamination. We sample air in affected spaces and compare against pre-event conditions or appropriate baselines. Results document whether contaminated materials have been adequately remediated or whether persistent biological contamination requires additional material removal.`,
    },
    {
      title: 'Rental Property Turnover IAQ Assessment',
      description: `Herndon's rental market—particularly townhomes in Franklin Farm and apartments near Worldgate—requires air quality verification between tenants. Previous occupant activities including smoking, pet keeping, water damage concealment, and inadequate maintenance can leave IAQ conditions that affect incoming tenants and expose landlords to habitability complaints.`,
      solution: `Pre-occupancy IAQ screening provides a baseline documenting air quality before new tenant move-in. Post-vacancy testing identifies contamination from previous occupancy requiring remediation before the property is re-leased. This documentation protects both landlords and tenants by establishing objective conditions at each transition point.`,
    },
    {
      title: 'Commercial Facility Critical Environment IAQ',
      description: `Herndon commercial properties near the Dulles corridor house data centers, telecommunications equipment, and technology operations where air quality affects both personnel health and equipment reliability. Particulate contamination causes server failures while biological contamination triggers employee health complaints—both requiring specific assessment approaches.`,
      solution: `Commercial facility assessment measures both health-relevant parameters (mold, bacteria, VOCs) and equipment-relevant parameters (particulate size distribution, humidity, temperature stability). Reports provide recommendations addressing both human occupant health and critical equipment protection requirements.`,
    },
  ],
  equipmentSection: {
    headline: 'IAQ Testing Equipment for Herndon Properties',
    equipment: [
      {
        name: 'Zefon Bio-Pump Plus Air Sampler',
        purpose: 'Calibrated mold spore capture for AIHA-accredited laboratory species identification in residential and commercial environments',
        brand: 'Zefon',
      },
      {
        name: 'RAE Systems MiniRAE 3000',
        purpose: 'Real-time VOC monitoring for renovation off-gassing, chemical contamination, and MVOC detection indicating hidden mold sources',
        brand: 'RAE Systems',
      },
      {
        name: 'TSI DustTrak II Aerosol Monitor',
        purpose: 'Particulate concentration measurement for residential health assessment and commercial critical-environment evaluation',
        brand: 'TSI',
      },
      {
        name: 'HVAC Inspection Camera System',
        purpose: 'Visual documentation of duct interior, coil surface, and drain pan conditions in aging residential and commercial HVAC systems',
      },
      {
        name: 'BioStage Viable Sampler',
        purpose: 'Culture-based sampling for bacterial identification when storm drain backup or sewage contamination is suspected',
      },
      {
        name: 'Environmental Data Logger',
        purpose: 'Extended temperature, humidity, and CO2 monitoring for commercial ventilation adequacy assessment',
      },
    ],
    localNote: `Our Herndon teams carry both residential and commercial IAQ instrumentation, supporting assessment of Fox Mill homes, Franklin Farm townhomes, and Dulles corridor commercial properties within the same service territory.`,
  },
  pricingSection: {
    headline: 'Indoor Air Quality Testing Costs in Herndon',
    intro: `Herndon IAQ testing costs vary by property type and assessment scope. Residential mold screening, commercial ventilation evaluation, and post-contamination event assessment each involve different sampling requirements and laboratory analysis. We provide clear proposals explaining the testing scope appropriate to your situation.`,
    factors: [
      'Property type—residential home, townhome, commercial workspace, or critical facility have different assessment protocols',
      'Number of sampling locations needed for representative coverage of affected areas',
      'Contaminant types under investigation—mold, bacteria, VOCs, or particulates each require different methods',
      'Commercial regulatory documentation including OSHA compliance and ASHRAE verification',
      'Post-remediation clearance sampling and verification requirements',
    ],
    cta: `Call (877) 497-0007 for a consultation. We recommend the testing scope that answers your specific air quality questions and provide upfront pricing.`,
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
    ],
    responseTime: `Same-day IAQ assessment throughout Herndon. Emergency sampling within 2 hours for visible mold or acute contamination events. Call (877) 497-0007.`,
  },
  faqs: [
    {
      question: 'Can my HVAC system cause air quality problems without visible mold?',
      answer: `Yes. Biological contamination on cooling coils, in drain pans, and within ductwork distributes mold spores every time the system operates. This contamination is invisible from registers but detectable through air sampling during HVAC operation. Surface samples from coils and duct interiors confirm the source.`,
    },
    {
      question: 'Should I test air quality before renting out my Herndon property?',
      answer: `Pre-rental IAQ screening is recommended. It documents baseline conditions, identifies contamination requiring remediation, and protects you from habitability complaints. Post-vacancy testing after tenants depart detects problems created during occupancy. These records establish objective conditions at each transition.`,
    },
    {
      question: 'Can storm drain backup cause lasting air quality problems?',
      answer: `Yes. Contaminated water absorbed into porous materials like drywall, carpet, and wood framing becomes an ongoing source of bacterial and fungal bioaerosols. Air testing after cleanup verifies whether affected materials were adequately remediated or whether persistent contamination requires additional material removal.`,
    },
    {
      question: 'What is the difference between mold testing and IAQ testing?',
      answer: `Mold testing specifically targets fungal spore concentrations and species identification. Comprehensive IAQ testing also evaluates VOCs, particulates, HVAC performance, ventilation adequacy, and environmental conditions. We recommend the appropriate scope based on your symptoms and concerns.`,
    },
    {
      question: 'Do you provide commercial IAQ testing for data center environments?',
      answer: `Yes. We assess both personnel health parameters and equipment-environment requirements. This includes particulate analysis relevant to equipment reliability alongside mold, VOC, and humidity measurements relevant to occupant health. Reports address both operational and occupational health considerations.`,
    },
    {
      question: 'How quickly can I get results for an urgent health concern?',
      answer: `Standard laboratory turnaround is 3-5 business days. Rush processing with 24-48 hour results is available for urgent situations. For suspected toxic mold exposure, we recommend rush processing to expedite remediation planning.`,
    },
  ],
  relatedBlogSlugs: [
    'signs-of-hidden-mold',
    'black-mold-vs-regular-mold',
  ],
  finalCTA: {
    headline: 'Air Quality Questions in Your Herndon Property?',
    paragraph: `Residential or commercial, our AIHA-accredited IAQ testing provides definitive answers about indoor air contaminants. Call (877) 497-0007 for a professional assessment.`,
  },
}
