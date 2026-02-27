import type { ServiceData } from './types'

const indoorAirQuality: ServiceData = {
  slug: 'indoor-air-quality',
  name: 'Indoor Air Quality',
  tagline: 'Comprehensive IAQ testing, monitoring, and remediation services.',
  description:
    'Poor indoor air quality affects health, productivity, and property value. Our IAQ services include mold spore testing, VOC analysis, particulate monitoring, and HVAC assessment to identify contamination sources and verify remediation effectiveness.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
  features: [
    { name: 'Mold Spore Air Sampling', description: 'Spore trap and viable air sampling quantifies airborne mold concentrations and identifies species, compared against outdoor baseline samples.', icon: 'beaker' },
    { name: 'VOC Analysis', description: 'Volatile organic compound testing identifies chemical off-gassing from building materials, furnishings, and contamination sources.', icon: 'cloud-arrow-up' },
    { name: 'Particulate Monitoring', description: 'Real-time particulate counters measure PM2.5 and PM10 levels, identifying dust, smoke, and other airborne particulate contamination.', icon: 'finger-print' },
    { name: 'HVAC System Assessment', description: 'Inspection of ductwork, coils, filters, and air handlers to identify contamination sources within the air distribution system.', icon: 'cog-6-tooth' },
    { name: 'Radon Testing', description: 'Short-term and long-term radon testing to assess this colorless, odorless radioactive gas that is the second leading cause of lung cancer.', icon: 'shield-check' },
    { name: 'Remediation Verification', description: 'Post-remediation clearance testing verifies that mold, chemical, or particulate contamination has been successfully eliminated.', icon: 'check' },
  ],
  contentParagraphs: [
    'Americans spend approximately 90% of their time indoors, where air quality can be 2-5 times worse than outdoor air. Poor indoor air quality causes headaches, fatigue, respiratory problems, allergic reactions, and in severe cases, chronic illness. Identifying and resolving IAQ problems requires scientific testing — you cannot diagnose air quality issues by smell or visual inspection alone.',
    'Our IAQ testing protocol covers the full spectrum of potential indoor air contaminants. Mold spore analysis identifies fungal contamination even when no visible mold is present. VOC testing detects chemical off-gassing from new building materials, cleaning products, or contamination events. Particulate monitoring measures dust, smoke, and fine particles that affect respiratory health. Each test provides quantitative data that drives targeted remediation.',
    'For commercial buildings, IAQ problems often originate in the HVAC system. Contaminated ductwork, dirty coils, and inadequate filtration can distribute pollutants throughout an entire building. Our HVAC assessment includes visual inspection with video documentation, surface sampling, and airflow measurement. We identify contamination sources and recommend specific cleaning, filtration, or ventilation improvements.',
    'Our IAQ reports provide clear, actionable results. We compare your test results against EPA, OSHA, and ASHRAE guidelines, explain what the numbers mean in plain language, and recommend specific steps to improve your air quality. For commercial clients, we can provide reports formatted for employee communications, regulatory compliance, and legal documentation.',
  ],
  stats: [
    { label: 'IAQ Assessments', value: '1,500+' },
    { label: 'Air Samples Analyzed', value: '25,000+' },
    { label: 'HVAC Systems Assessed', value: '400+' },
    { label: 'Contaminant Types Tested', value: '100+' },
  ],
  testimonial: {
    quote: 'Multiple employees were reporting headaches and respiratory issues. Flood Doctor performed comprehensive air quality testing and found elevated mold spores in the HVAC system and high VOC levels from recent renovations. They cleaned the HVAC, improved ventilation, and our air quality tests came back normal. Health complaints dropped to zero.',
    author: 'Jennifer Liu',
    role: 'HR Director, Pacific West Technologies',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    { name: 'Mold Remediation', description: 'Professional mold removal when air testing reveals elevated fungal contamination levels.' },
    { name: 'HVAC Cleaning', description: 'Complete HVAC system cleaning to address air quality issues originating in the air distribution system.' },
    { name: 'Environmental Testing', description: 'Broader environmental testing including lead, asbestos, and other hazardous materials.' },
    { name: 'Moisture Mapping', description: 'Moisture assessment to identify the water sources that enable mold growth and affect air quality.' },
    { name: 'Crawl Space Encapsulation', description: 'Sealing crawl spaces to prevent moisture and microbial contamination from entering living spaces.' },
    { name: 'Odor Investigation', description: 'Source identification for unexplained odors that often indicate air quality issues.' },
  ],
  faqs: [
    { question: 'How do you test indoor air quality?', answer: 'We use multiple methods depending on the suspected contaminant. Air cassettes capture mold spores for laboratory analysis. Photoionization detectors measure VOCs in real time. Particulate counters measure PM2.5 and PM10 levels. Radon tests use continuous monitors over 48+ hours. Each method targets specific contaminants.' },
    { question: 'What are normal indoor air quality levels?', answer: 'Indoor mold spore counts should be similar to or lower than outdoor counts. VOC levels should be below 500 ppb total. PM2.5 should be below 12 micrograms per cubic meter. Radon should be below 4 pCi/L. We compare your results against EPA, OSHA, and ASHRAE guidelines and explain what they mean.' },
    { question: 'Can air quality make people sick?', answer: 'Yes. Poor indoor air quality causes a range of health effects from mild (headaches, fatigue, eye irritation) to severe (respiratory disease, allergic reactions, cancer from radon). Symptoms that improve when leaving the building strongly suggest an IAQ problem.' },
    { question: 'How often should air quality be tested?', answer: 'We recommend testing whenever occupants report symptoms, after water damage or mold remediation, before and after renovation projects, and annually for commercial buildings as part of a preventive maintenance program. Baseline testing for new buildings or before purchase is also valuable.' },
    { question: 'Do you test for radon?', answer: 'Yes. Radon is the second leading cause of lung cancer and is present in many homes and buildings. We perform both short-term screening tests (48-72 hours) and long-term monitoring (90+ days) using continuous radon monitors. If elevated levels are found, we can recommend certified radon mitigation contractors.' },
    { question: 'What is sick building syndrome?', answer: 'Sick building syndrome describes situations where building occupants experience health symptoms linked to time spent in the building, but no specific cause can be identified. Common contributors include inadequate ventilation, chemical contaminants from building materials, and biological contaminants like mold. Comprehensive IAQ testing can identify the contributing factors.' },
  ],
}

export default indoorAirQuality
