import type { ServiceData } from './types'

const largeLossRestoration: ServiceData = {
  slug: 'large-loss-restoration',
  name: 'Large Loss Restoration',
  tagline: 'Enterprise-scale restoration with dedicated project management and unlimited resources.',
  description:
    'Large loss events — multi-million dollar disasters affecting entire buildings or campuses — require a restoration partner with the capacity, experience, and project management expertise to coordinate complex, long-duration projects from emergency response through final reconstruction.',
  heroImageUrl:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
  features: [
    { name: 'Dedicated Project Director', description: 'A senior project director with large-loss experience manages your entire restoration, coordinating all trades, timelines, and stakeholder communications.', icon: 'check' },
    { name: 'Scalable Workforce', description: 'We mobilize dozens or hundreds of trained personnel through our regional and national partner network to match the scale of your disaster.', icon: 'bolt' },
    { name: 'Emergency Stabilization', description: 'Immediate property securing, water extraction, and environmental controls to stop damage progression while long-term plans are developed.', icon: 'shield-check' },
    { name: 'Multi-Phase Planning', description: 'Complex projects are broken into logical phases with detailed schedules, milestones, and resource allocation for each phase.', icon: 'cog-6-tooth' },
    { name: 'Stakeholder Coordination', description: 'We interface with property owners, tenants, insurance carriers, public adjusters, engineers, architects, and regulatory agencies.', icon: 'arrow-path' },
    { name: 'Forensic Documentation', description: 'Detailed cause-and-origin documentation, scope assessments, and supplemental claim documentation for complex insurance negotiations.', icon: 'finger-print' },
  ],
  contentParagraphs: [
    'Large loss restoration projects are fundamentally different from standard commercial jobs. Events involving millions of dollars in damage, multiple building systems, extended timelines, and complex insurance negotiations require a restoration partner with project management expertise comparable to a general contractor and technical knowledge spanning every restoration discipline. Our large loss division is built specifically for these projects.',
    'The first 24-48 hours of a large loss are critical. Our emergency stabilization team deploys immediately to secure the property, stop ongoing damage, and establish environmental controls. This may involve emergency board-up, water extraction, temporary power and HVAC, and hazardous material containment. Simultaneously, our documentation team begins the forensic assessment that will guide both the restoration plan and the insurance claim.',
    'Large loss projects typically involve multiple simultaneous work streams: structural drying, content pack-out and restoration, hazardous material abatement, demolition, and reconstruction — all requiring careful coordination to avoid conflicts and maintain project momentum. Our project directors create detailed project schedules using construction management software, tracking hundreds of tasks across multiple crews and subcontractors.',
    'Insurance negotiations on large loss claims can be as complex as the restoration itself. We employ experienced estimators who understand commercial policy structures, business interruption calculations, ordinance and law implications, and depreciation methodologies. Our documentation stands up to scrutiny from insurance adjusters, public adjusters, and forensic accountants, ensuring our clients receive fair claim settlements.',
  ],
  stats: [
    { label: 'Large Loss Projects', value: '150+' },
    { label: 'Largest Single Project', value: '$12M' },
    { label: 'Avg. Project Duration', value: '3-9 months' },
    { label: 'Claim Settlement Rate', value: '98%' },
  ],
  testimonial: {
    quote: 'A catastrophic pipe failure flooded four floors of our corporate headquarters — 200,000 square feet of Class A office space. Flood Doctor assigned a full-time project director who coordinated over 60 workers, managed our insurance claim, and delivered the project on time and on budget. A $4 million restoration executed flawlessly.',
    author: 'Steven Blackwell',
    role: 'CFO, Lakeside Corporate Holdings',
    imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    { name: 'Commercial Water Damage', description: 'Commercial water damage restoration that scales from single-suite to campus-wide events.' },
    { name: 'Commercial Fire Restoration', description: 'Multi-phase fire damage restoration for large commercial and institutional properties.' },
    { name: 'Healthcare Facility Restoration', description: 'Specialized restoration for hospitals and healthcare facilities with regulatory compliance requirements.' },
    { name: 'Environmental Testing', description: 'Comprehensive environmental assessment for large-scale restoration projects.' },
    { name: 'Construction Management', description: 'Full reconstruction services managed from planning through final inspection and certificate of occupancy.' },
    { name: 'Claims Consulting', description: 'Expert assistance with complex commercial insurance claims, supplementals, and negotiations.' },
  ],
  faqs: [
    { question: 'What qualifies as a "large loss" project?', answer: 'Generally, projects exceeding $500,000 in restoration costs, affecting more than 50,000 square feet, involving multiple building systems, or requiring extended project timelines. These projects require dedicated project management resources that differ from standard commercial restoration.' },
    { question: 'Do you have the capacity for very large projects?', answer: 'Yes. Through our regional and national partner network, we can mobilize virtually unlimited personnel and equipment. We have successfully managed projects involving over 100 workers simultaneously and restoration costs exceeding $12 million.' },
    { question: 'How do you manage insurance on large loss claims?', answer: 'Large loss claims are complex, often involving multiple coverages (property, business interruption, extra expense, ordinance and law) and multiple adjusting firms. We assign experienced estimators who understand commercial policy structures and work collaboratively with all parties to reach fair settlements.' },
    { question: 'Can you handle the reconstruction as well?', answer: 'Yes. Our construction division handles full reconstruction from demolition through certificate of occupancy. Having one company manage both mitigation and reconstruction eliminates the coordination gaps that often occur when separate companies handle each phase.' },
    { question: 'What reporting do stakeholders receive?', answer: 'We provide weekly written progress reports with photos, daily situation reports during active operations, monthly financial summaries, and real-time access to our project management platform. Reports are customized for each stakeholder.' },
    { question: 'Do you work with consulting engineers and architects?', answer: 'Frequently. Large loss projects often require structural engineering assessments, architectural design for reconstruction, MEP engineering, and environmental consulting. We coordinate with your preferred consultants or can recommend experienced professionals from our network.' },
  ],
}

export default largeLossRestoration
