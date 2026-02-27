import type { ServiceData } from './types'

const odorRemoval: ServiceData = {
  slug: 'odor-removal',
  name: 'Odor Removal',
  tagline: 'Permanent odor elimination — not masking, not covering up, truly gone.',
  description:
    'Stubborn odors from smoke, sewage, mold, pets, and decomposition resist conventional cleaning because the source molecules are embedded deep in porous materials. Our advanced deodorization systems — thermal fogging, ozone, and hydroxyl generators — neutralize odors at the molecular level for permanent results.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1558317374-067fb5f30001?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
  features: [
    {
      name: 'Thermal Fogging',
      description:
        'Heated deodorizing agents create a penetrating fog that follows the same paths as smoke and odor molecules, reaching deep into wall cavities, fabrics, and porous materials.',
      icon: 'cloud-arrow-up',
    },
    {
      name: 'Ozone Treatment',
      description:
        'Ozone generators produce O3 molecules that chemically oxidize and destroy odor-causing compounds at the molecular level — not masking the smell, but eliminating it.',
      icon: 'bolt',
    },
    {
      name: 'Hydroxyl Generators',
      description:
        'UV-powered hydroxyl radical technology neutralizes odors safely in occupied spaces, making it ideal for ongoing treatment during restoration work.',
      icon: 'shield-check',
    },
    {
      name: 'Source Identification',
      description:
        'We trace odors to their origin using moisture meters, borescopes, and UV light to ensure the actual source is addressed, not just the symptoms.',
      icon: 'beaker',
    },
    {
      name: 'HEPA Air Scrubbing',
      description:
        'Commercial air scrubbers with activated carbon filters remove airborne odor particles while HEPA filtration captures microscopic contaminants.',
      icon: 'arrow-path',
    },
    {
      name: 'Surface Decontamination',
      description:
        'Enzyme-based and oxidizing cleaners break down odor molecules embedded in hard surfaces, textiles, and structural materials before deodorization.',
      icon: 'wrench-screwdriver',
    },
  ],
  contentParagraphs: [
    'Persistent odors are one of the most frustrating problems homeowners face after water damage, fire, sewage backups, or mold events. Consumer air fresheners and scented candles only mask the smell temporarily — the odor molecules remain embedded in drywall, wood framing, carpet fibers, insulation, and concrete. True odor elimination requires identifying the source, removing or treating contaminated materials, and deploying professional deodorization technology that neutralizes odors at the molecular level.',
    'Our odor removal process begins with a thorough assessment to identify the source. A musty smell usually indicates hidden moisture or mold. Sewage odors point to contamination in subfloor or wall cavities. Smoke odors from fires penetrate every surface in the home. Pet urine crystallizes in subfloor and is reactivated by humidity. Each odor type requires a specific treatment approach — there is no single solution that works for everything.',
    'For smoke and fire odors, thermal fogging is our primary tool. A heated solvent-based deodorizer is converted to a vapor that penetrates the same microscopic pores and pathways that smoke particles used to enter materials. This ensures the deodorizer reaches every contaminated surface. For biological odors (sewage, decomposition, pet urine), enzyme-based treatments break down the organic compounds causing the smell, followed by ozone treatment to oxidize any remaining odor molecules.',
    'Hydroxyl generators represent the newest advancement in deodorization technology. Unlike ozone (which requires vacating the space during treatment), hydroxyl radicals are safe for occupied environments and continuously neutralize odor compounds in the air and on surfaces. We often deploy hydroxyl generators during the entire restoration process, providing ongoing deodorization while other work is being performed. Post-treatment air quality testing confirms complete odor elimination.',
  ],
  stats: [
    { label: 'Odor Jobs Completed', value: '1,900+' },
    { label: 'First-Treatment Success Rate', value: '94%' },
    { label: 'Odor Types Treated', value: '20+' },
    { label: 'Customer Satisfaction', value: '97.8%' },
  ],
  testimonial: {
    quote:
      'Our house had a terrible sewage smell that three different companies failed to fix. Flood Doctor found the source — contaminated subfloor under our laundry room from an old leak. They removed the affected material, treated everything with enzymes and ozone, and the smell was completely gone. Finally able to have guests over without embarrassment.',
    author: 'Tomoko Nakamura',
    role: 'Homeowner in Ashburn',
    imageUrl:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Fire & Smoke Cleanup',
      description: 'Complete fire restoration including soot removal, structural cleaning, and smoke odor elimination.',
    },
    {
      name: 'Sewage Cleanup',
      description: 'Decontamination and deodorization of sewage-affected areas that produce the most persistent biological odors.',
    },
    {
      name: 'Mold Remediation',
      description: 'Mold removal eliminates the musty odors associated with active fungal colonies in your home.',
    },
    {
      name: 'Contents Cleaning',
      description: 'Professional deodorization of smoke- and odor-affected furniture, clothing, and personal belongings.',
    },
    {
      name: 'Crawl Space Encapsulation',
      description: 'Sealing crawl spaces eliminates musty odors rising from below-grade moisture and organic decay.',
    },
    {
      name: 'HVAC Cleaning',
      description: 'Ductwork cleaning removes odor particles circulating through your heating and cooling system.',
    },
  ],
  faqs: [
    {
      question: 'Why do store-bought air fresheners not work?',
      answer:
        'Consumer products only mask odors with competing scents or temporarily bind odor molecules. They do not destroy the source compounds. Once the product dissipates, the odor returns because the embedded molecules are still present in your building materials. Professional deodorization chemically alters or destroys these molecules permanently.',
    },
    {
      question: 'Is ozone treatment safe?',
      answer:
        'Ozone is highly effective but must be used correctly. People, pets, and plants must be removed from the treatment area during active ozone generation. After treatment, the space is ventilated until ozone levels return to safe ambient levels (typically 2-4 hours). Hydroxyl generators are a safe alternative that can operate in occupied spaces.',
    },
    {
      question: 'Can you remove smoke smell from a house?',
      answer:
        'Yes. Smoke odor elimination typically requires a combination of source cleaning (removing soot and residue from all surfaces), thermal fogging (penetrating porous materials with deodorizer), and ozone or hydroxyl treatment (destroying remaining odor molecules). The process may take 2-5 days depending on severity.',
    },
    {
      question: 'How do you remove pet odor from subfloors?',
      answer:
        'Pet urine penetrates carpet, padding, and subfloor, where it crystallizes and reactivates with humidity. We remove contaminated carpet and padding, apply enzyme treatments to the subfloor to break down uric acid crystals, seal the subfloor with odor-blocking primer, and treat the area with ozone. In severe cases, subfloor replacement may be necessary.',
    },
    {
      question: 'How long does professional deodorization take?',
      answer:
        'Treatment time depends on the odor type and severity. Mild odors may be resolved in 1-2 days. Smoke odors from fires typically require 3-5 days of treatment. Severe biological odors may need 5-7 days including source removal and multiple treatment cycles. We provide a realistic timeline after our initial assessment.',
    },
    {
      question: 'Do you guarantee odor removal?',
      answer:
        'We achieve complete odor elimination in over 94% of cases on the first treatment. For particularly stubborn odors, additional treatment cycles may be needed. We continue treating until the odor is resolved and back our work with a satisfaction guarantee. If you can still smell it, we come back.',
    },
  ],
}

export default odorRemoval
