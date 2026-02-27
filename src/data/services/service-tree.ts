export interface ServiceNode {
  slug: string
  name: string
  description: string
  type: 'hub' | 'category' | 'service'
  path: string
  icon?: string
  children?: ServiceNode[]
}

export const serviceTree: ServiceNode[] = [
  {
    slug: 'residential',
    name: 'Residential Services',
    description: 'Complete water damage, cleanup, and specialty restoration services for homeowners.',
    type: 'hub',
    path: '/services/residential',
    icon: 'home-modern',
    children: [
      {
        slug: 'restoration-services',
        name: 'Restoration Services',
        description: 'Emergency water and storm damage restoration for residential properties.',
        type: 'category',
        path: '/services/residential/restoration-services',
        icon: 'wrench-screwdriver',
        children: [
          {
            slug: 'water-damage-restoration',
            name: 'Water Damage Restoration',
            description: 'Fast, professional water damage restoration when every minute counts.',
            type: 'service',
            path: '/services/residential/restoration-services/water-damage-restoration',
          },
          {
            slug: 'flood-cleanup',
            name: 'Flood Cleanup',
            description: 'Comprehensive flood damage cleanup and property restoration after natural flooding.',
            type: 'service',
            path: '/services/residential/restoration-services/flood-cleanup',
          },
          {
            slug: 'storm-damage-restoration',
            name: 'Storm Damage Restoration',
            description: 'Expert storm damage repair including wind, hail, and severe weather restoration.',
            type: 'service',
            path: '/services/residential/restoration-services/storm-damage-restoration',
          },
          {
            slug: 'burst-pipe-cleanup',
            name: 'Burst Pipe Cleanup',
            description: 'Emergency burst pipe response with water extraction and damage repair.',
            type: 'service',
            path: '/services/residential/restoration-services/burst-pipe-cleanup',
          },
          {
            slug: 'structural-drying',
            name: 'Structural Drying',
            description: 'Advanced structural drying using commercial dehumidifiers and air movers.',
            type: 'service',
            path: '/services/residential/restoration-services/structural-drying',
          },
        ],
      },
      {
        slug: 'cleanup-services',
        name: 'Cleanup Services',
        description: 'Professional cleanup for sewage, mold, fire, and odor contamination.',
        type: 'category',
        path: '/services/residential/cleanup-services',
        icon: 'shield-check',
        children: [
          {
            slug: 'sewage-cleanup',
            name: 'Sewage Cleanup',
            description: 'Safe Category 3 black water cleanup with full decontamination.',
            type: 'service',
            path: '/services/residential/cleanup-services/sewage-cleanup',
          },
          {
            slug: 'mold-remediation',
            name: 'Mold Remediation',
            description: 'Professional mold inspection, containment, and removal services.',
            type: 'service',
            path: '/services/residential/cleanup-services/mold-remediation',
          },
          {
            slug: 'fire-smoke-cleanup',
            name: 'Fire & Smoke Cleanup',
            description: 'Complete fire damage restoration including smoke and soot removal.',
            type: 'service',
            path: '/services/residential/cleanup-services/fire-smoke-cleanup',
          },
          {
            slug: 'odor-removal',
            name: 'Odor Removal',
            description: 'Advanced odor elimination using ozone, hydroxyl, and thermal fogging technology.',
            type: 'service',
            path: '/services/residential/cleanup-services/odor-removal',
          },
          {
            slug: 'contents-cleaning-packout',
            name: 'Contents Cleaning & Pack-Out',
            description: 'Professional cleaning, pack-out, and restoration of personal belongings.',
            type: 'service',
            path: '/services/residential/cleanup-services/contents-cleaning-packout',
          },
        ],
      },
      {
        slug: 'specialty-services',
        name: 'Specialty Services',
        description: 'Targeted restoration for specific areas and damage types in your home.',
        type: 'category',
        path: '/services/residential/specialty-services',
        icon: 'cog-6-tooth',
        children: [
          {
            slug: 'basement-flooding',
            name: 'Basement Flooding',
            description: 'Complete basement flood cleanup, drying, and waterproofing solutions.',
            type: 'service',
            path: '/services/residential/specialty-services/basement-flooding',
          },
          {
            slug: 'crawl-space-drying',
            name: 'Crawl Space Drying',
            description: 'Specialized crawl space moisture removal and encapsulation.',
            type: 'service',
            path: '/services/residential/specialty-services/crawl-space-drying',
          },
          {
            slug: 'hardwood-floor-drying',
            name: 'Hardwood Floor Drying',
            description: 'Precision drying systems to save and restore water-damaged hardwood floors.',
            type: 'service',
            path: '/services/residential/specialty-services/hardwood-floor-drying',
          },
          {
            slug: 'roof-leak-water-damage',
            name: 'Roof Leak Water Damage',
            description: 'Roof leak detection, emergency tarping, and interior water damage repair.',
            type: 'service',
            path: '/services/residential/specialty-services/roof-leak-water-damage',
          },
        ],
      },
    ],
  },
  {
    slug: 'commercial',
    name: 'Commercial Services',
    description: 'Enterprise-grade restoration and cleanup services for businesses and facilities.',
    type: 'hub',
    path: '/services/commercial',
    icon: 'server',
    children: [
      {
        slug: 'restoration-services',
        name: 'Restoration Services',
        description: 'Large-scale water and flood damage restoration for commercial properties.',
        type: 'category',
        path: '/services/commercial/restoration-services',
        icon: 'wrench-screwdriver',
        children: [
          {
            slug: 'commercial-water-damage',
            name: 'Commercial Water Damage',
            description: 'Large-scale water damage restoration minimizing business downtime.',
            type: 'service',
            path: '/services/commercial/restoration-services/commercial-water-damage',
          },
          {
            slug: 'commercial-flood-cleanup',
            name: 'Commercial Flood Cleanup',
            description: 'Rapid commercial flood response to get your business operational fast.',
            type: 'service',
            path: '/services/commercial/restoration-services/commercial-flood-cleanup',
          },
          {
            slug: 'large-loss-restoration',
            name: 'Large Loss Restoration',
            description: 'Complex multi-million dollar restoration projects with dedicated project management.',
            type: 'service',
            path: '/services/commercial/restoration-services/large-loss-restoration',
          },
        ],
      },
      {
        slug: 'cleanup-services',
        name: 'Cleanup Services',
        description: 'Commercial-grade cleanup for sewage, mold, and fire damage.',
        type: 'category',
        path: '/services/commercial/cleanup-services',
        icon: 'shield-check',
        children: [
          {
            slug: 'commercial-sewage-cleanup',
            name: 'Commercial Sewage Cleanup',
            description: 'OSHA-compliant sewage remediation for commercial and industrial facilities.',
            type: 'service',
            path: '/services/commercial/cleanup-services/commercial-sewage-cleanup',
          },
          {
            slug: 'commercial-mold-remediation',
            name: 'Commercial Mold Remediation',
            description: 'Large-scale mold remediation meeting EPA and OSHA workplace standards.',
            type: 'service',
            path: '/services/commercial/cleanup-services/commercial-mold-remediation',
          },
          {
            slug: 'commercial-fire-smoke-cleanup',
            name: 'Commercial Fire & Smoke Cleanup',
            description: 'Comprehensive commercial fire damage restoration and business recovery.',
            type: 'service',
            path: '/services/commercial/cleanup-services/commercial-fire-smoke-cleanup',
          },
        ],
      },
      {
        slug: 'specialty-services',
        name: 'Specialty Services',
        description: 'Industry-specific restoration solutions for specialized facilities.',
        type: 'category',
        path: '/services/commercial/specialty-services',
        icon: 'cog-6-tooth',
        children: [
          {
            slug: 'healthcare-facilities',
            name: 'Healthcare Facilities',
            description: 'HIPAA-compliant restoration for hospitals, clinics, and medical offices.',
            type: 'service',
            path: '/services/commercial/specialty-services/healthcare-facilities',
          },
          {
            slug: 'hospitality-multifamily',
            name: 'Hospitality & Multifamily',
            description: 'Restoration for hotels, apartments, and multi-unit residential properties.',
            type: 'service',
            path: '/services/commercial/specialty-services/hospitality-multifamily',
          },
          {
            slug: 'municipal-education',
            name: 'Municipal & Education',
            description: 'Restoration services for government buildings, schools, and public facilities.',
            type: 'service',
            path: '/services/commercial/specialty-services/municipal-education',
          },
          {
            slug: 'industrial-facilities',
            name: 'Industrial Facilities',
            description: 'Heavy-duty restoration for warehouses, manufacturing plants, and industrial sites.',
            type: 'service',
            path: '/services/commercial/specialty-services/industrial-facilities',
          },
        ],
      },
      {
        slug: 'technical-services',
        name: 'Technical Services',
        description: 'Consulting, testing, and diagnostic services for moisture and air quality.',
        type: 'category',
        path: '/services/commercial/technical-services',
        icon: 'beaker',
        children: [
          {
            slug: 'moisture-mapping-consulting',
            name: 'Moisture Mapping & Consulting',
            description: 'Scientific moisture assessment and expert consulting for complex projects.',
            type: 'service',
            path: '/services/commercial/technical-services/moisture-mapping-consulting',
          },
          {
            slug: 'indoor-air-quality',
            name: 'Indoor Air Quality',
            description: 'Comprehensive IAQ testing, monitoring, and remediation services.',
            type: 'service',
            path: '/services/commercial/technical-services/indoor-air-quality',
          },
          {
            slug: 'environmental-testing',
            name: 'Environmental Testing',
            description: 'Certified environmental testing for asbestos, lead, and other hazardous materials.',
            type: 'service',
            path: '/services/commercial/technical-services/environmental-testing',
          },
        ],
      },
    ],
  },
]

export function getServiceTree(): ServiceNode[] {
  return serviceTree
}

function flattenNodes(nodes: ServiceNode[]): ServiceNode[] {
  const result: ServiceNode[] = []
  for (const node of nodes) {
    if (node.type === 'service') {
      result.push(node)
    }
    if (node.children) {
      result.push(...flattenNodes(node.children))
    }
  }
  return result
}

function flattenAllNodes(nodes: ServiceNode[]): ServiceNode[] {
  const result: ServiceNode[] = []
  for (const node of nodes) {
    result.push(node)
    if (node.children) {
      result.push(...flattenAllNodes(node.children))
    }
  }
  return result
}

export function getAllServiceNodes(): ServiceNode[] {
  return flattenNodes(serviceTree)
}

export function getNodeByPath(path: string): ServiceNode | undefined {
  const all = flattenAllNodes(serviceTree)
  return all.find((n) => n.path === path)
}

export function getCategoryServices(division: string, category: string): ServiceNode[] {
  const hub = serviceTree.find((h) => h.slug === division)
  if (!hub?.children) return []
  const cat = hub.children.find((c) => c.slug === category)
  if (!cat?.children) return []
  return cat.children.filter((n) => n.type === 'service')
}

export function getServiceBySlug(slug: string): ServiceNode | undefined {
  const all = flattenAllNodes(serviceTree)
  return all.find((n) => n.slug === slug && n.type === 'service')
}

export function getDivisionCategories(division: 'residential' | 'commercial'): ServiceNode[] {
  const hub = serviceTree.find((h) => h.slug === division)
  return hub?.children || []
}
