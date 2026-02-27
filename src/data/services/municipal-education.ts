import type { ServiceData } from './types'

const municipalEducation: ServiceData = {
  slug: 'municipal-education',
  name: 'Municipal & Education',
  tagline: 'Restoration services for schools, government buildings, and public facilities.',
  description: 'Specialized restoration for public buildings with focus on safety compliance, minimal disruption to operations, and rapid return to service for communities that depend on these facilities.',
  heroImageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  logos: [
    { name: 'IICRC', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg' },
    { name: 'RIA', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg' },
    { name: 'EPA Lead-Safe', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg' },
    { name: 'BBB Accredited', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg' },
    { name: 'State Farm Partner', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg' },
    { name: 'Allstate Preferred', src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg' },
  ],
  features: [
    { name: 'School Safety Compliance', description: 'All work meets state and federal safety standards for educational facilities including lead-safe and asbestos protocols.', icon: 'shield-check' },
    { name: 'Minimal Disruption', description: 'Phased restoration scheduling around school calendars and government operations to minimize impact on students and staff.', icon: 'clock' },
    { name: 'Emergency Response', description: '24/7 emergency response for water main breaks, roof failures, and flooding events at public facilities.', icon: 'bolt' },
    { name: 'Air Quality Monitoring', description: 'Continuous air quality testing during and after restoration to ensure safe re-occupancy of classrooms and offices.', icon: 'beaker' },
    { name: 'Government Procurement', description: 'Experience with government procurement processes, prevailing wage requirements, and public project documentation.', icon: 'check' },
    { name: 'Multi-Building Coordination', description: 'Simultaneous restoration across multiple buildings in school districts and government campuses.', icon: 'server' },
  ],
  contentParagraphs: [
    'Schools and government buildings serve as the backbone of our communities. When water damage strikes these facilities, the impact extends far beyond property damage — it disrupts education, public services, and community safety. Our municipal and education restoration team understands these unique stakes.',
    'We work closely with school administrators, facility managers, and government officials to develop restoration plans that minimize disruption to operations. For schools, we schedule major work during breaks and weekends, using containment barriers to allow classes to continue in unaffected areas during the school year.',
    'Public buildings often present unique challenges including aging infrastructure, asbestos-containing materials, and complex HVAC systems. Our technicians are certified in lead-safe work practices and asbestos awareness, and we coordinate with environmental consultants when hazardous materials are encountered.',
    'Documentation for public projects requires a higher level of detail than private work. We provide comprehensive project records including daily logs, moisture readings, air quality data, and photographic documentation that meet government audit requirements and public record standards.',
  ],
  stats: [
    { label: 'Schools Restored', value: '120+' },
    { label: 'Government Projects', value: '85+' },
    { label: 'Average Downtime', value: '<48 hrs' },
    { label: 'Safety Incidents', value: '0' },
  ],
  testimonial: {
    quote: 'A water main break flooded three classrooms and the gymnasium at our elementary school on a Friday night. Flood Doctor had their team on-site within the hour and worked through the weekend. School reopened Monday morning on schedule. Their communication with our administration was outstanding.',
    author: 'Dr. Patricia Hawkins',
    role: 'Superintendent, Loudoun County Schools',
    imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  relatedFeatures: [
    { name: 'Library & Archive Restoration', description: 'Specialized drying and restoration of water-damaged books, documents, and archive materials in school and government libraries.' },
    { name: 'Gymnasium Floor Restoration', description: 'Expert hardwood floor drying and restoration for school gymnasiums and athletic facilities.' },
    { name: 'HVAC Decontamination', description: 'Complete cleaning and sanitization of school and government building HVAC systems after water events.' },
    { name: 'Portable Classroom Services', description: 'Temporary portable classroom and office arrangements during extended restoration projects.' },
    { name: 'ADA Compliance', description: 'Restoration work that maintains or improves ADA accessibility in public buildings.' },
    { name: 'Record Documentation', description: 'Government-grade documentation meeting public records requirements and audit standards.' },
  ],
  faqs: [
    { question: 'Can you work around the school schedule?', answer: 'Yes. We prioritize scheduling around academic calendars, performing major work during evenings, weekends, and school breaks. We use containment systems to safely work while school is in session when necessary.' },
    { question: 'Do you meet government procurement requirements?', answer: 'Yes. We are experienced with government RFPs, prevailing wage requirements, bonding, and public project documentation standards. We maintain all required licenses and insurance for government work.' },
    { question: 'How do you handle asbestos or lead concerns in older buildings?', answer: 'Our team is trained in lead-safe work practices and asbestos awareness. When hazardous materials are suspected, we coordinate with certified environmental consultants for testing before proceeding with restoration work.' },
    { question: 'Can you restore multiple buildings simultaneously?', answer: 'Yes. We have the equipment and manpower to manage multi-building restoration projects across school districts and government campuses, with dedicated project managers for each facility.' },
    { question: 'What about air quality in occupied buildings?', answer: 'We perform continuous air quality monitoring during all restoration work in occupied buildings. We use HEPA filtration and negative air machines to maintain safe air quality levels and provide test results to administrators.' },
    { question: 'Do you provide emergency board-up for government buildings?', answer: 'Yes. We provide 24/7 emergency board-up, tarping, and security services for government and school buildings after storms, vandalism, or other damage events.' },
  ],
}

export default municipalEducation
