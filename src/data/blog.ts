export interface BlogPost {
  id: number
  title: string
  slug: string
  href: string
  description: string
  imageUrl: string
  date: string
  datetime: string
  category: { title: string; href: string }
  author: { name: string; role: string; href: string; imageUrl: string }
  content?: string
}

export const blogCategories = [
  'All',
  'Water Damage',
  'Mold',
  'Insurance',
  'Prevention',
  'Restoration',
  'Emergency Tips',
]

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'What to Do in the First 24 Hours After Water Damage',
    slug: 'first-24-hours-after-water-damage',
    href: '/blog/first-24-hours-after-water-damage',
    description:
      'Time is critical after water damage strikes your home. Learn the essential steps you need to take immediately to minimize damage, protect your belongings, and start the restoration process.',
    imageUrl:
      'https://images.unsplash.com/photo-1525438160292-a4a860951216?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
    date: 'Feb 20, 2026',
    datetime: '2026-02-20',
    category: { title: 'Water Damage', href: '/blog?category=water-damage' },
    author: {
      name: 'Frank Dark',
      role: 'Owner / Lead Technician',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content: `
      <h2>Act Fast: The First 24 Hours Are Critical</h2>
      <p>When water damage strikes your home, every minute counts. The first 24 hours are the most critical period for minimizing damage and preventing secondary issues like mold growth. Whether you're dealing with a burst pipe, flooding, or appliance leak, knowing what to do immediately can save you thousands of dollars in restoration costs.</p>

      <h3>Step 1: Ensure Safety First</h3>
      <p>Before entering any water-damaged area, make sure it's safe. Turn off electricity to affected areas if you can safely reach the breaker panel. Watch for structural damage, and never walk through standing water that could be electrically charged.</p>

      <h3>Step 2: Stop the Water Source</h3>
      <p>If the water damage is from a burst pipe or appliance, shut off the water supply immediately. For a burst pipe, locate your main water shut-off valve. For appliance leaks, disconnect the specific appliance from its water supply line.</p>

      <h3>Step 3: Document Everything</h3>
      <p>Before you start cleaning up, take photos and videos of all damage. This documentation is essential for your insurance claim. Photograph damaged walls, floors, furniture, and personal belongings from multiple angles.</p>

      <blockquote><p>The difference between a $5,000 restoration and a $50,000 restoration often comes down to how quickly homeowners respond in the first 24 hours.</p></blockquote>

      <h3>Step 4: Begin Water Extraction</h3>
      <p>Remove standing water as quickly as possible using mops, towels, wet/dry vacuums, or pumps. The longer water sits, the more damage it causes to flooring, drywall, and structural components.</p>

      <h3>Step 5: Call a Professional Restoration Company</h3>
      <p>While DIY efforts help, professional water damage restoration companies have industrial-grade equipment including commercial dehumidifiers, air movers, and moisture detection tools that ensure thorough drying and prevent hidden moisture pockets that lead to mold.</p>

      <ul>
        <li>Industrial water extractors remove water 10x faster than consumer equipment</li>
        <li>Thermal imaging cameras detect hidden moisture behind walls</li>
        <li>Commercial dehumidifiers prevent secondary damage and mold growth</li>
        <li>Antimicrobial treatments stop bacteria and mold before they start</li>
      </ul>

      <h3>What NOT to Do</h3>
      <p>Avoid using regular household fans alone — they don't remove moisture from the air. Don't attempt to use a regular vacuum on standing water. Never ignore water damage hoping it will dry on its own — hidden moisture leads to mold growth within 24-48 hours.</p>
    `,
  },
  {
    id: 2,
    title: 'Signs of Hidden Mold in Your Home and What to Do About It',
    slug: 'signs-of-hidden-mold',
    href: '/blog/signs-of-hidden-mold',
    description:
      'Mold doesn\'t always grow where you can see it. Discover the warning signs of hidden mold behind walls, under floors, and in HVAC systems, plus professional remediation options.',
    imageUrl:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
    date: 'Feb 14, 2026',
    datetime: '2026-02-14',
    category: { title: 'Mold', href: '/blog?category=mold' },
    author: {
      name: 'Sarah Chen',
      role: 'Mold Remediation Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content: `
      <h2>Hidden Mold: The Silent Threat in Your Home</h2>
      <p>Mold is often called the "silent destroyer" because it can grow undetected behind walls, under carpets, and inside HVAC systems for months before you notice any visible signs. By the time you see mold or smell that characteristic musty odor, the problem may already be extensive.</p>

      <h3>Warning Signs of Hidden Mold</h3>
      <p>Even when mold isn't visible, your body and your home may be giving you clues. Here are the most common indicators that you may have a hidden mold problem:</p>

      <ul>
        <li><strong>Musty odors</strong> — A persistent earthy or musty smell, especially in certain rooms</li>
        <li><strong>Allergy symptoms</strong> — Unexplained sneezing, runny nose, or itchy eyes that worsen at home</li>
        <li><strong>Discoloration</strong> — Yellowing, bubbling, or peeling paint or wallpaper</li>
        <li><strong>Warped surfaces</strong> — Buckled floors or warped walls indicating moisture intrusion</li>
        <li><strong>Condensation</strong> — Excessive moisture on windows or pipes</li>
      </ul>

      <h3>Where Hidden Mold Grows</h3>
      <p>Mold thrives in dark, damp environments with organic material to feed on. Common hiding spots include behind drywall near plumbing, under kitchen and bathroom sinks, in attic spaces with poor ventilation, inside HVAC ductwork, and beneath carpet padding after water incidents.</p>

      <blockquote><p>Over 50% of homes have mold problems that homeowners are completely unaware of. Professional testing is the only way to know for certain.</p></blockquote>

      <h3>Professional Mold Testing and Remediation</h3>
      <p>If you suspect hidden mold, professional testing is essential. DIY mold test kits from hardware stores are unreliable and often produce false results. Professional mold inspectors use air sampling, surface testing, and thermal imaging to accurately identify mold species, concentration levels, and exact locations.</p>
    `,
  },
  {
    id: 3,
    title: 'How to File a Water Damage Insurance Claim Successfully',
    slug: 'water-damage-insurance-claim-guide',
    href: '/blog/water-damage-insurance-claim-guide',
    description:
      'Navigating insurance claims after water damage can be overwhelming. This step-by-step guide walks you through documentation, filing, and maximizing your claim settlement.',
    imageUrl:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
    date: 'Feb 8, 2026',
    datetime: '2026-02-08',
    category: { title: 'Insurance', href: '/blog?category=insurance' },
    author: {
      name: 'Frank Dark',
      role: 'Owner / Lead Technician',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content: `
      <h2>Your Complete Guide to Water Damage Insurance Claims</h2>
      <p>Filing an insurance claim for water damage doesn't have to be a nightmare. With proper documentation and knowledge of the process, you can maximize your settlement and get your home restored quickly.</p>

      <h3>What's Typically Covered</h3>
      <p>Most homeowner's insurance policies cover sudden and accidental water damage, such as burst pipes, appliance malfunctions, and storm damage. However, gradual damage from neglected maintenance, flooding, and sewer backups typically require separate coverage.</p>

      <h3>Step-by-Step Claim Process</h3>
      <ol>
        <li>Document all damage immediately with photos and video</li>
        <li>Contact your insurance company within 24 hours</li>
        <li>Mitigate further damage — your policy requires this</li>
        <li>Keep all receipts for emergency repairs and temporary housing</li>
        <li>Get a professional damage assessment and restoration estimate</li>
        <li>Meet with the insurance adjuster and provide documentation</li>
        <li>Review the settlement offer carefully before accepting</li>
      </ol>

      <blockquote><p>Homeowners who hire a professional restoration company before the adjuster visit receive 40-60% higher settlements on average because of better documentation.</p></blockquote>
    `,
  },
  {
    id: 4,
    title: '10 Ways to Prevent Water Damage in Your Home This Winter',
    slug: 'prevent-water-damage-winter',
    href: '/blog/prevent-water-damage-winter',
    description:
      'Winter brings unique water damage risks including frozen pipes, ice dams, and heavy snow loads. Here are 10 proven prevention strategies to protect your home during the cold months.',
    imageUrl:
      'https://images.unsplash.com/photo-1516912481808-3406841bd33c?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
    date: 'Jan 28, 2026',
    datetime: '2026-01-28',
    category: { title: 'Prevention', href: '/blog?category=prevention' },
    author: {
      name: 'Mike Torres',
      role: 'Senior Restoration Tech',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content: `
      <h2>Protect Your Home From Winter Water Damage</h2>
      <p>Northern Virginia winters bring freezing temperatures that can wreak havoc on your home's plumbing and structure. Frozen pipes alone cause over $1 billion in property damage across the US each year. Here are 10 essential prevention strategies.</p>

      <h3>1. Insulate Exposed Pipes</h3>
      <p>Pipes in unheated areas like garages, crawl spaces, and attics are most vulnerable to freezing. Use foam pipe insulation sleeves or heat tape on all exposed pipes.</p>

      <h3>2. Keep Your Home Heated</h3>
      <p>Never let your thermostat drop below 55°F, even when you're away. This keeps interior pipes warm enough to prevent freezing.</p>

      <h3>3. Seal Air Leaks</h3>
      <p>Cold air infiltration around pipes passing through exterior walls is a leading cause of frozen pipes. Seal gaps with caulk or spray foam insulation.</p>

      <ul>
        <li>Check around water heater connections</li>
        <li>Inspect where pipes enter through foundation</li>
        <li>Seal gaps around outdoor faucets</li>
        <li>Insulate rim joists in basement</li>
      </ul>
    `,
  },
  {
    id: 5,
    title: 'The Complete Guide to Water Damage Restoration Process',
    slug: 'water-damage-restoration-process',
    href: '/blog/water-damage-restoration-process',
    description:
      'Understanding the professional water damage restoration process helps you know what to expect. From initial assessment to final reconstruction, here\'s what happens step by step.',
    imageUrl:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
    date: 'Jan 15, 2026',
    datetime: '2026-01-15',
    category: { title: 'Restoration', href: '/blog?category=restoration' },
    author: {
      name: 'Frank Dark',
      role: 'Owner / Lead Technician',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content: `
      <h2>Understanding the Professional Restoration Process</h2>
      <p>Professional water damage restoration follows a proven scientific process developed by the IICRC (Institute of Inspection, Cleaning and Restoration Certification). Understanding each phase helps you know what to expect and why each step matters.</p>

      <h3>Phase 1: Emergency Contact & Assessment</h3>
      <p>When you call Flood Doctor, our team responds within 60 minutes. The first step is a thorough assessment using moisture meters, thermal imaging cameras, and hygrometers to map the full extent of water damage — including areas not visible to the naked eye.</p>

      <h3>Phase 2: Water Extraction</h3>
      <p>Using truck-mounted and portable extraction units, we remove standing water rapidly. Our industrial extractors can remove thousands of gallons per hour, significantly reducing drying time and preventing further damage.</p>

      <h3>Phase 3: Drying & Dehumidification</h3>
      <p>This is the longest phase, typically taking 3-5 days. We place commercial air movers and dehumidifiers strategically throughout affected areas. Daily moisture readings ensure the drying process is on track.</p>

      <h3>Phase 4: Cleaning & Sanitizing</h3>
      <p>All affected materials are cleaned, sanitized, and treated with antimicrobial agents. This includes air scrubbing with HEPA filtration to remove airborne contaminants and odors.</p>

      <h3>Phase 5: Restoration & Reconstruction</h3>
      <p>The final phase involves repairing or replacing damaged materials — drywall, flooring, trim, and paint — to return your home to its pre-loss condition.</p>
    `,
  },
  {
    id: 6,
    title: 'Emergency Flood Response: What Ashburn Homeowners Need to Know',
    slug: 'emergency-flood-response-ashburn',
    href: '/blog/emergency-flood-response-ashburn',
    description:
      'Ashburn and Loudoun County face unique flood risks from rapid development and storm drainage challenges. Know your local flood risks and how to respond when disaster strikes.',
    imageUrl:
      'https://images.unsplash.com/photo-1547683905-f686c993aae5?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
    date: 'Jan 5, 2026',
    datetime: '2026-01-05',
    category: { title: 'Emergency Tips', href: '/blog?category=emergency-tips' },
    author: {
      name: 'Sarah Chen',
      role: 'Mold Remediation Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content: `
      <h2>Ashburn's Unique Flood Risks</h2>
      <p>Ashburn and the broader Loudoun County area have experienced rapid development over the past two decades, dramatically changing natural drainage patterns. This means flood risks that didn't exist 10 years ago now threaten many neighborhoods.</p>

      <h3>Know Your Local Risk Zones</h3>
      <p>Several Ashburn neighborhoods sit in or near FEMA-designated flood zones, particularly those near Broad Run, Goose Creek, and their tributaries. Even homes outside official flood zones can experience flooding from overwhelmed storm drainage systems during heavy rain events.</p>

      <h3>Emergency Preparedness Checklist</h3>
      <ul>
        <li>Know your home's elevation relative to nearby waterways</li>
        <li>Install a sump pump with battery backup</li>
        <li>Keep Flood Doctor's 24/7 emergency number saved: (703) 285-1100</li>
        <li>Store important documents above ground level</li>
        <li>Have an emergency water shut-off plan</li>
      </ul>

      <blockquote><p>In 2025, Loudoun County experienced 23% more flooding events than the 10-year average. Climate patterns and continued development mean this trend will likely continue.</p></blockquote>
    `,
  },
  {
    id: 7,
    title: 'Black Mold vs. Regular Mold: Understanding the Difference',
    slug: 'black-mold-vs-regular-mold',
    href: '/blog/black-mold-vs-regular-mold',
    description:
      'Not all mold is created equal. Learn how to identify different types of mold, understand the health risks of black mold (Stachybotrys), and when you need professional remediation.',
    imageUrl:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
    date: 'Dec 20, 2025',
    datetime: '2025-12-20',
    category: { title: 'Mold', href: '/blog?category=mold' },
    author: {
      name: 'Sarah Chen',
      role: 'Mold Remediation Specialist',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content: `
      <h2>Understanding Mold Types in Your Home</h2>
      <p>When homeowners discover mold, the first fear is often "Is it black mold?" While all mold should be taken seriously, understanding the differences between common household mold types helps you make informed decisions about remediation.</p>

      <h3>Common Household Mold Types</h3>
      <p>There are thousands of mold species, but a few are particularly common in homes. Cladosporium appears olive-green to brown and grows on fabrics, wood, and HVAC ducts. Aspergillus is one of the most common indoor molds, appearing in various colors. Penicillium is blue-green and often found on water-damaged materials.</p>

      <h3>What Is "Black Mold"?</h3>
      <p>The term "black mold" typically refers to Stachybotrys chartarum, a greenish-black mold that produces mycotoxins. It requires consistently wet conditions to grow — usually from ongoing water leaks, chronic condensation, or previous flooding that wasn't properly dried.</p>

      <h3>When to Call Professionals</h3>
      <p>Any mold area larger than 10 square feet requires professional remediation according to EPA guidelines. Additionally, if mold is in your HVAC system, behind walls, or if anyone in your home has respiratory sensitivities, professional assessment is essential.</p>
    `,
  },
  {
    id: 8,
    title: 'Sump Pump Maintenance: Your First Line of Defense Against Basement Flooding',
    slug: 'sump-pump-maintenance-guide',
    href: '/blog/sump-pump-maintenance-guide',
    description:
      'Your sump pump is the most important defense against basement flooding, but only if it works when you need it. Learn essential maintenance tips and warning signs of failure.',
    imageUrl:
      'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=3270&q=80',
    date: 'Dec 10, 2025',
    datetime: '2025-12-10',
    category: { title: 'Prevention', href: '/blog?category=prevention' },
    author: {
      name: 'Mike Torres',
      role: 'Senior Restoration Tech',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content: `
      <h2>Keep Your Sump Pump Ready for Action</h2>
      <p>A sump pump that fails during a storm is one of the most common causes of basement flooding we see at Flood Doctor. Regular maintenance takes just 15 minutes quarterly but can prevent thousands of dollars in water damage.</p>

      <h3>Quarterly Maintenance Checklist</h3>
      <ol>
        <li>Pour a bucket of water into the sump pit to test the float switch</li>
        <li>Listen for unusual noises during operation</li>
        <li>Check the discharge pipe for obstructions or freezing</li>
        <li>Inspect the check valve to ensure it's functioning</li>
        <li>Clean the intake screen of debris</li>
        <li>Test the battery backup system</li>
      </ol>

      <h3>Signs Your Sump Pump Needs Replacement</h3>
      <ul>
        <li>Runs continuously without shutting off</li>
        <li>Makes loud grinding or rattling noises</li>
        <li>Cycles on and off rapidly</li>
        <li>Visible rust or damage to housing</li>
        <li>Over 7-10 years old</li>
      </ul>
    `,
  },
]
