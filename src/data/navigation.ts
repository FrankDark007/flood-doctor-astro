export const mainNavigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export const secondaryNavigation = [
  { name: 'Blog', href: '/blog' },
  { name: 'Guides', href: '/guides' },
  { name: 'FAQ', href: '/faq' },
  { name: 'Reviews', href: '/reviews' },
  { name: 'Request Estimate', href: '/request' },
]

export const footerNavigation = {
  services: [
    { name: 'Water Damage Restoration', href: '/services/water-damage-restoration' },
    { name: 'Mold Remediation', href: '/services/mold-remediation' },
    { name: 'Flood Cleanup', href: '/services/flood-cleanup' },
    { name: 'Sewage Cleanup', href: '/services/sewage-cleanup' },
    { name: 'All Services', href: '/services' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ],
  resources: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Guides', href: '/guides' },
    { name: 'Request Estimate', href: '/request' },
  ],
}

export const routeNames: Record<string, string> = {
  services: 'Services',
  about: 'About',
  contact: 'Contact',
  guides: 'Guides',
  reviews: 'Reviews',
  blog: 'Blog',
  faq: 'FAQ',
  request: 'Request Estimate',
}
