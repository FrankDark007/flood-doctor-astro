export const mainNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Resources', href: '/resources' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const secondaryNavigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Request Estimate', href: '/request' },
]

export const footerNavigation = {
  services: [
    { name: 'Residential Services', href: '/services/residential' },
    { name: 'Commercial Services', href: '/services/commercial' },
    { name: 'All Services', href: '/services' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'FAQ', href: '/resources/faq' },
    { name: 'Homeowner Guides', href: '/resources/homeowner-guides' },
    { name: 'Insurance Guide', href: '/resources/insurance-guide' },
    { name: 'Emergency Checklists', href: '/resources/emergency-checklists' },
    { name: 'Request Estimate', href: '/request' },
  ],
}

export const routeNames: Record<string, string> = {
  services: 'Services',
  residential: 'Residential',
  commercial: 'Commercial',
  resources: 'Resources',
  about: 'About',
  contact: 'Contact',
  guides: 'Guides',
  reviews: 'Reviews',
  blog: 'Blog',
  faq: 'FAQ',
  request: 'Request Estimate',
}
