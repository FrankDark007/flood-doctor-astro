import type { CityServiceContent } from '../types'

export const content: CityServiceContent = {
  meta: {
    title: `Indoor Air Quality Testing in Leesburg, VA | Flood Doctor`,
    description: `Professional indoor air quality testing for Leesburg homes and businesses. Mold spores, VOCs, particulates, and allergen testing. Call (877) 497-0007.`,
  },
  h1: `Leesburg Indoor Air Quality Testing`,
  introSection: {
    headline: `Comprehensive Indoor Air Quality Assessment for Leesburg Properties`,
    paragraphs: [
      `Indoor air quality concerns in Leesburg properties stem from the county seat's unique combination of historic construction, humid Piedmont climate, and evolving building practices. Stone foundations that breathe moisture, crawl spaces that push moldy air upward through the stack effect, and aging HVAC systems that distribute contaminants are common IAQ culprits in homes from the Edwards Ferry corridor to the Leesburg Historic District. Even modern homes in Village at Leesburg can develop IAQ problems from tightly sealed construction that traps pollutants.`,
      `Flood Doctor provides scientific indoor air quality testing that identifies the specific contaminants affecting your Leesburg property and their sources. We quantify mold spore counts, volatile organic compounds, particulate matter, and other airborne contaminants using calibrated laboratory analysis — providing objective data rather than assumptions. Our testing supports health investigations, post-remediation verification, real estate transactions, and proactive air quality management.`,
    ],
    localContext: `Leesburg's diverse housing stock creates varied IAQ profiles — historic homes with high natural ventilation but chronic moisture, and modern homes with tight envelopes but reduced air exchange — each requiring different assessment approaches.`,
  },
  processSteps: [
    {
      title: `Consultation & Protocol Design`,
      description: `We discuss your IAQ concerns, health symptoms, property history, and objectives to design an appropriate testing protocol. Different concerns — mold, chemicals, allergens — require different sampling methods.`,
      timeframe: `Initial call`,
    },
    {
      title: `Environmental Conditions Survey`,
      description: `Temperature, humidity, air exchange rate, and HVAC operation are documented throughout the property. These environmental factors directly influence contaminant levels and behavior.`,
      timeframe: `as soon as crews are available`,
    },
    {
      title: `Air Sampling`,
      description: `Calibrated air sampling pumps collect defined air volumes onto appropriate media — spore traps for mold, sorbent tubes for VOCs, cassettes for particulates — at representative locations throughout your Leesburg property.`,
      timeframe: `1-2 hours`,
    },
    {
      title: `Laboratory Analysis`,
      description: `Samples are submitted to AIHA-accredited laboratories for quantitative analysis. Chain-of-custody protocols maintain sample integrity from collection through reporting.`,
      timeframe: `3-5 business days`,
    },
    {
      title: `Report & Recommendations`,
      description: `A detailed report presents findings with laboratory data, interpretation, comparison to established guidelines, and actionable recommendations for improving air quality in your specific property.`,
      timeframe: `1-2 days after lab results`,
    },
  ],
  localChallenges: [
    {
      title: `Mold Spore Elevation in Historic Homes`,
      description: `Leesburg's historic homes with stone foundations and crawl spaces frequently show elevated indoor mold spore counts. The stack effect draws spore-laden air from damp lower areas into living spaces, creating chronic exposure for occupants.`,
      solution: `Our testing quantifies the specific mold types and concentrations present, identifies the source areas through differential sampling, and provides recommendations that address the root cause — typically crawl space or basement moisture management.`,
    },
    {
      title: `VOC Off-Gassing in Newer Construction`,
      description: `Modern homes in Lansdowne, Village at Leesburg, and Lees Corner can experience elevated volatile organic compounds from new building materials, flooring adhesives, paint, and furnishings in tightly sealed construction.`,
      solution: `VOC sampling with laboratory analysis identifies specific compounds and concentrations. Recommendations typically involve ventilation strategy adjustments, source removal, and air purification approaches tailored to the identified contaminants.`,
    },
    {
      title: `Post-Remediation Air Quality Verification`,
      description: `After mold remediation, fire restoration, or chemical cleanup in Leesburg properties, independent air quality testing is necessary to confirm the space is safe for reoccupancy. Without testing, residual contamination may go undetected.`,
      solution: `We provide independent post-remediation clearance testing using the same laboratory protocols as our initial assessments. This provides objective verification that remediation has achieved acceptable contaminant levels.`,
    },
    {
      title: `Well Water and Radon Interaction`,
      description: `Rural-adjacent Leesburg properties using well water may experience radon off-gassing from water supply and soil gas intrusion, particularly in homes along Evergreen Mills Road and Old Waterford Road.`,
      solution: `We can incorporate radon screening into comprehensive IAQ assessments for properties with known risk factors. Elevated radon findings are referred to trained radon mitigation specialists.`,
    },
  ],
  equipmentSection: {
    headline: `Indoor Air Quality Testing Equipment`,
    equipment: [
      { name: `Calibrated Air Sampling Pumps`, purpose: `Collect precise air volumes for laboratory analysis of mold, particulates, and chemicals`, brand: `Zefon` },
      { name: `Spore Trap Cassettes`, purpose: `Capture airborne mold spores for laboratory identification and quantification`, brand: `Zefon Air-O-Cell` },
      { name: `VOC Sorbent Tubes`, purpose: `Collect volatile organic compound samples for gas chromatography analysis` },
      { name: `Particulate Counters`, purpose: `Real-time measurement of airborne particulate matter in multiple size ranges`, brand: `TSI` },
      { name: `Thermo-Hygrometers`, purpose: `Document environmental conditions that influence contaminant behavior and levels`, brand: `Fluke` },
      { name: `CO2 Monitors`, purpose: `Assess ventilation adequacy by measuring carbon dioxide as a proxy for air exchange rate` },
    ],
    localNote: `Our testing protocols are calibrated for Leesburg's conditions — accounting for seasonal pollen variation, the high background mold levels of Virginia's humid climate, and the specific contaminant profiles of both historic and modern construction.`,
  },
  pricingSection: {
    headline: `Indoor Air Quality Testing Costs in Leesburg`,
    intro: `IAQ testing costs depend on the number of samples, types of analysis, and reporting requirements. We design cost-effective testing protocols that answer your specific questions without unnecessary sampling.`,
    factors: [
      `Number of sampling locations and sample types`,
      `Laboratory analysis costs for specific contaminants`,
      `Property size and number of zones to assess`,
      `Reporting requirements — standard vs. expert witness level`,
      `Follow-up testing for verification or monitoring`,
    ],
    cta: `Call (877) 497-0007 for indoor air quality testing consultation.`,
  },
  serviceAreaSection: {
    neighborhoods: [
      `Edwards Ferry`,
      `Lees Corner`,
      `Lansdowne`,
      `Village at Leesburg`,
      `Evergreen Mills`,
      `Sycolin Creek`,
      `Leesburg Historic District`,
      `Goose Creek Village`,
      `Potomac Station`,
      `Tuscarora Creek`,
      `River Creek`,
      `Kincaid Forest`,
      `Raspberry Falls`,
      `Belmont Ridge`,
      `Old Waterford Road`,
    ],
    responseTime: `Most IAQ testing appointments available within 1-3 business days. Urgent post-remediation clearance testing available same-day.`,
  },
  faqs: [
    {
      question: `What are signs of poor indoor air quality?`,
      answer: `Persistent musty odors, unexplained allergy or respiratory symptoms that improve when away from home, visible condensation, and symptoms affecting multiple household members are common indicators. Professional testing provides objective answers.`,
    },
    {
      question: `How do you test for mold in the air?`,
      answer: `We use calibrated air pumps to draw a measured volume of air through spore trap cassettes. These are sent to an AIHA-accredited laboratory where mold spores are identified and counted under microscopy, providing species-level quantification.`,
    },
    {
      question: `Is some mold normal in indoor air?`,
      answer: `Yes. Indoor environments always contain some mold spores. We compare indoor levels to simultaneous outdoor baseline samples. Indoor levels significantly exceeding outdoor levels, or the presence of certain indicator species, suggest an indoor mold source.`,
    },
    {
      question: `How is IAQ testing different from a home inspection?`,
      answer: `Home inspections are visual assessments. IAQ testing uses calibrated instruments and laboratory analysis to quantify specific airborne contaminants. We detect and measure things that are invisible to visual inspection.`,
    },
    {
      question: `Can poor air quality affect my health?`,
      answer: `Yes. Elevated mold spores can trigger allergies and asthma. VOCs can cause headaches and respiratory irritation. Particulate matter affects lung function. Professional testing identifies specific contaminants so targeted remediation can address health concerns.`,
    },
    {
      question: `Do you provide IAQ testing for real estate transactions?`,
      answer: `Yes. Pre-purchase IAQ testing is increasingly common for Leesburg's high-value historic and luxury properties. Our reports provide objective data that supports informed purchasing decisions.`,
    },
  ],
  relatedBlogSlugs: [
    `signs-of-hidden-mold`,
    `black-mold-vs-regular-mold`,
  ],
  finalCTA: {
    headline: `Concerned About Air Quality in Your Leesburg Home?`,
    paragraph: `Stop guessing and get answers. Flood Doctor provides scientific indoor air quality testing that identifies exactly what is in your air and what to do about it. Call (877) 497-0007 to schedule professional IAQ testing.`,
  },
}
