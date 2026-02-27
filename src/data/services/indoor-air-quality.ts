import type { ServiceData } from './types'

const indoorAirQuality: ServiceData = {
  slug: 'indoor-air-quality',
  name: 'Indoor Air Quality',
  tagline: 'Comprehensive IAQ testing, monitoring, and remediation for healthy indoor environments.',
  description: 'Professional indoor air quality services including testing, HVAC decontamination, and remediation to ensure safe, healthy air in your building after water damage, mold events, or occupant complaints.',
  heroImageUrl: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
  features: [
    { name: 'Air Sampling', description: 'Spore trap and viable air sampling to identify and quantify mold, bacteria, and particulate contamination levels.', icon: 'beaker' },
    { name: 'HVAC Inspection', description: 'Comprehensive HVAC system inspection including ductwork, coils, drain pans, and filter assessment for contamination.', icon: 'cog-6-tooth' },
    { name: 'HEPA Filtration', description: 'Deployment of commercial HEPA air scrubbers to remove airborne contaminants and improve air quality during restoration.', icon: 'shield-check' },
    { name: 'VOC Testing', description: 'Volatile organic compound testing to identify chemical off-gassing from building materials, cleaning products, or contamination.', icon: 'finger-print' },
    { name: 'Clearance Testing', description: 'Post-remediation air clearance testing to verify safe re-occupancy levels meet EPA and OSHA standards.', icon: 'check' },
    { name: 'Ongoing Monitoring', description: 'Continuous air quality monitoring programs for facilities requiring ongoing IAQ management and documentation.', icon: 'clock' },
  ],
  contentParagraphs: [
    'Indoor air quality directly impacts the health, comfort, and productivity of building occupants. After water damage events, mold growth, or fire damage, airborne contaminants can reach levels that cause respiratory symptoms, allergic reactions, and long-term health issues. Professional IAQ assessment and remediation is essential.',
    'Our IAQ services begin with comprehensive testing using calibrated sampling equipment. We collect spore trap samples, viable air samples, and surface samples that are analyzed by accredited laboratories. The results provide quantitative data on contamination levels compared to outdoor baselines and industry standards.',
    'HVAC systems can amplify indoor air quality problems by distributing contaminants throughout a building. Our team inspects and cleans ductwork, evaporator coils, drain pans, and air handling units using NADCA-standard methods. We also assess filter efficiency and recommend upgrades when existing filtration is inadequate.',
    'For facilities requiring ongoing IAQ management — such as healthcare facilities, schools, or buildings with known moisture issues — we provide continuous monitoring programs with regular sampling, trend analysis, and actionable recommendations. Our reports help facility managers demonstrate due diligence and maintain safe environments.',
  ],
  stats: [
    { label: 'IAQ Tests Performed', value: '2,500+' },
    { label: 'Buildings Cleared', value: '1,800+' },
    { label: 'Clearance Rate', value: '100%' },
    { label: 'HVAC Systems Cleaned', value: '500+' },
  ],
  testimonial: {
    quote: 'After a water damage event in our office building, several employees reported respiratory symptoms. Flood Doctor performed comprehensive air sampling that identified elevated mold spore counts in two areas. They remediated the source, cleaned our HVAC system, and clearance testing confirmed safe levels. Our employees have been symptom-free since.',
    author: 'Jennifer Okafor',
    role: 'Facility Director, Reston Office Park',
    imageUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    { name: 'Duct Cleaning', description: 'NADCA-standard cleaning of supply and return ductwork to remove accumulated dust, debris, and microbial contamination.' },
    { name: 'Negative Air Containment', description: 'Negative pressure containment systems to prevent cross-contamination during remediation in occupied buildings.' },
    { name: 'Odor Assessment', description: 'Identification of odor sources using sampling and analytical methods to determine appropriate remediation strategies.' },
    { name: 'Humidity Management', description: 'Assessment and optimization of building humidity levels to prevent moisture-related IAQ problems.' },
    { name: 'Particle Count Analysis', description: 'Real-time particle counting to assess particulate contamination levels and filtration effectiveness.' },
    { name: 'Building Pressure Mapping', description: 'Assessment of building pressure relationships to identify air infiltration pathways and contamination sources.' },
  ],
  faqs: [
    { question: 'When should I test indoor air quality?', answer: 'IAQ testing is recommended after any water damage event, when occupants report unexplained health symptoms, during real estate transactions, after mold remediation for clearance, and as part of routine building maintenance in sensitive facilities like healthcare and schools.' },
    { question: 'How long does IAQ testing take?', answer: 'Air sampling typically takes 2-4 hours for a standard commercial building. Laboratory analysis requires 2-3 business days for spore trap samples and 5-7 days for viable culture samples. We offer rush analysis when urgent results are needed.' },
    { question: 'What standards do you follow for clearance testing?', answer: 'We follow EPA guidelines, IICRC S520 standards for mold remediation clearance, and state-specific requirements. Clearance criteria compare indoor spore counts to outdoor baselines and evaluate for specific indicator species.' },
    { question: 'Can you clean our HVAC system?', answer: 'Yes. We perform NADCA-standard HVAC cleaning including mechanical brushing and HEPA vacuuming of ductwork, coil cleaning, drain pan treatment, and filter replacement. We document before and after conditions with visual inspection and air sampling.' },
    { question: 'Do you test for things other than mold?', answer: 'Yes. We test for bacteria, VOCs, particulates, carbon dioxide, carbon monoxide, temperature, and humidity. We also assess for asbestos and lead when requested. Our testing menu is customized to your specific concerns.' },
    { question: 'What if our building fails clearance testing?', answer: 'If clearance testing shows elevated contamination levels, we identify the source and develop a targeted remediation plan. We then retest after remediation until clearance criteria are met. We do not charge for retest sampling if the initial remediation was performed by our team.' },
  ],
}

export default indoorAirQuality
