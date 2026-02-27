import type { ServiceData } from './types'

const contentsCleaningPackout: ServiceData = {
  slug: 'contents-cleaning-packout',
  name: 'Contents Cleaning & Pack-Out',
  tagline: 'Professional restoration of your belongings — because some things are irreplaceable.',
  description:
    'Water, smoke, and mold damage threaten your personal belongings as much as your structure. Our contents restoration team carefully inventories, packs, transports, and restores your possessions at our climate-controlled facility using ultrasonic cleaning, ozone chambers, and freeze-drying technology.',
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
    {
      name: 'Detailed Inventory & Documentation',
      description:
        'Every item is photographed, catalogued with condition notes, and barcoded for tracking. This inventory directly supports your insurance claim with line-item documentation.',
      icon: 'check',
    },
    {
      name: 'Climate-Controlled Storage',
      description:
        'Your belongings are stored in our secure, temperature- and humidity-controlled facility throughout the restoration of your home, preventing further deterioration.',
      icon: 'lock-closed',
    },
    {
      name: 'Ultrasonic Cleaning',
      description:
        'Microscopic cavitation bubbles remove smoke residue, soot, and contaminants from hard goods, electronics, and delicate items without abrasive scrubbing.',
      icon: 'beaker',
    },
    {
      name: 'Document & Photo Recovery',
      description:
        'Freeze-drying technology preserves water-damaged documents, photographs, books, and artwork that would be destroyed by conventional drying methods.',
      icon: 'shield-check',
    },
    {
      name: 'Textile & Fabric Restoration',
      description:
        'Specialized laundering, dry cleaning, and ozone treatment restore clothing, bedding, drapes, and upholstery damaged by water, smoke, or mold.',
      icon: 'wrench-screwdriver',
    },
    {
      name: 'Electronics Restoration',
      description:
        'Circuit board cleaning, corrosion treatment, and component-level restoration can save water- and smoke-damaged electronics that appear beyond repair.',
      icon: 'bolt',
    },
  ],
  contentParagraphs: [
    'When disaster strikes your home, the structural damage gets the immediate attention — but your personal belongings are equally at risk. Family photographs, important documents, heirloom furniture, electronics, and everyday essentials can all suffer severe damage from water, smoke, soot, and mold. Our contents restoration service is designed to save as many of your possessions as possible, using professional cleaning, drying, and deodorization techniques unavailable to the general public.',
    'The pack-out process begins with a room-by-room inventory. Our team photographs each item, notes its condition, and assigns a barcode for tracking throughout the restoration process. This documentation serves as the foundation for your insurance contents claim and ensures nothing is lost or misplaced. Items are carefully packed in clean materials and transported to our climate-controlled restoration facility.',
    'At our facility, each item receives treatment appropriate to its material and damage type. Hard goods are cleaned ultrasonically — high-frequency sound waves create microscopic bubbles that gently remove contaminants from surfaces without damage. Water-damaged documents and photographs are stabilized through freeze-drying, which removes moisture without the warping and sticking that occurs with conventional drying. Textiles go through specialized laundering with restoration-grade detergents and ozone deodorization.',
    'Throughout the process, you have access to your inventory through our online portal where you can track item status, make notes, and communicate with your restoration coordinator. When your home is ready, we deliver your restored belongings and unpack them to your specifications. Items determined to be non-restorable are documented with photos and condition reports to support replacement claims with your insurance company.',
  ],
  stats: [
    { label: 'Items Restored Annually', value: '75,000+' },
    { label: 'Restoration Success Rate', value: '85%' },
    { label: 'Secure Storage Capacity', value: '12,000 sq ft' },
    { label: 'Avg. Turnaround Time', value: '7-14 days' },
  ],
  testimonial: {
    quote:
      'After our house fire, I thought we had lost everything. Flood Doctor packed out our entire home, and their team restored things I never imagined could be saved — including my late mother\'s photo albums and my husband\'s vinyl collection. The online tracking system kept us informed the whole time. Truly remarkable work.',
    author: 'Sandra Ogunyemi',
    role: 'Homeowner in Ashburn',
    imageUrl:
      'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    {
      name: 'Fire & Smoke Cleanup',
      description: 'Complete fire restoration including the structural cleaning that happens while your contents are being restored off-site.',
    },
    {
      name: 'Water Damage Restoration',
      description: 'Structural restoration that often requires a pack-out to protect belongings during drying and reconstruction.',
    },
    {
      name: 'Odor Removal',
      description: 'Deodorization of both structure and contents to eliminate smoke, mold, and water damage odors.',
    },
    {
      name: 'Mold Remediation',
      description: 'Mold-contaminated belongings require specialized cleaning to remove spores and mycotoxins safely.',
    },
    {
      name: 'Document Recovery',
      description: 'Freeze-drying and specialized techniques to preserve water-damaged important documents and photographs.',
    },
    {
      name: 'Electronics Restoration',
      description: 'Component-level cleaning and corrosion treatment for water- and smoke-damaged electronics.',
    },
    {
      name: 'Insurance Documentation',
      description: 'Detailed contents inventories with photos and condition notes that support your insurance claim.',
    },
  ],
  faqs: [
    {
      question: 'What items can be professionally restored?',
      answer:
        'Most hard goods (furniture, kitchenware, decorative items), many electronics, most clothing and textiles, documents, photographs, artwork, and books can be restored with professional treatment. Success depends on the type and extent of damage and how quickly treatment begins. We assess every item individually and provide honest recommendations.',
    },
    {
      question: 'How do you keep track of all our belongings?',
      answer:
        'Every item is photographed, described, and assigned a unique barcode during the pack-out process. Our digital inventory system tracks each item through cleaning, treatment, and storage. You receive access to an online portal where you can view your inventory, check item status, and communicate with our team.',
    },
    {
      question: 'Is our stuff safe in your facility?',
      answer:
        'Our restoration facility is climate-controlled (temperature and humidity), secured with 24/7 surveillance cameras, alarm systems, and controlled access. Your belongings are covered under our insurance during transport and storage. We carry full care, custody, and control coverage.',
    },
    {
      question: 'Does insurance pay for contents cleaning?',
      answer:
        'Yes. Insurance companies prefer professional restoration over replacement because it costs less. Contents cleaning and pack-out services are standard covered expenses under most homeowner policies following a covered loss event. Professional restoration typically saves insurers 40-60% compared to full replacement costs.',
    },
    {
      question: 'Can you save water-damaged photos and documents?',
      answer:
        'Yes, through freeze-drying technology. Wet documents and photos are frozen to stabilize them, then placed in a vacuum chamber where ice is converted directly to vapor (sublimation), removing moisture without the warping, sticking, and ink bleeding that occurs with air drying. Success rates are highest when items are frozen within 48 hours of water exposure.',
    },
    {
      question: 'How long does the pack-out and restoration process take?',
      answer:
        'A full-home pack-out typically takes 1-2 days. Contents restoration takes 7-14 days depending on the volume of items and types of damage. Items are returned when your home restoration is complete. We can prioritize specific items you need sooner — medications, work equipment, children\'s essentials — and deliver those ahead of the full return.',
    },
  ],
}

export default contentsCleaningPackout
