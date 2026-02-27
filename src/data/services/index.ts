import type { ServiceData } from './types'

// Residential - Restoration Services
import waterDamageRestoration from './water-damage-restoration'
import floodCleanup from './flood-cleanup'
import stormDamageRestoration from './storm-damage-restoration'
import burstPipeCleanup from './burst-pipe-cleanup'
import structuralDrying from './structural-drying'

// Residential - Cleanup Services
import sewageCleanup from './sewage-cleanup'
import moldRemediation from './mold-remediation'
import fireSmokeCleanup from './fire-smoke-cleanup'
import odorRemoval from './odor-removal'
import contentsCleaningPackout from './contents-cleaning-packout'

// Residential - Specialty Services
import basementFlooding from './basement-flooding'
import crawlSpaceDrying from './crawl-space-drying'
import hardwoodFloorDrying from './hardwood-floor-drying'
import roofLeakWaterDamage from './roof-leak-water-damage'

// Commercial - Restoration Services
import commercialWaterDamage from './commercial-water-damage'
import commercialFloodCleanup from './commercial-flood-cleanup'
import largeLossRestoration from './large-loss-restoration'

// Commercial - Cleanup Services
import commercialSewageCleanup from './commercial-sewage-cleanup'
import commercialMoldRemediation from './commercial-mold-remediation'
import commercialFireSmokeCleanup from './commercial-fire-smoke-cleanup'

// Commercial - Specialty Services
import healthcareFacilities from './healthcare-facilities'
import hospitalityMultifamily from './hospitality-multifamily'
import municipalEducation from './municipal-education'
import industrialFacilities from './industrial-facilities'

// Commercial - Technical Services
import moistureMappingConsulting from './moisture-mapping-consulting'
import indoorAirQuality from './indoor-air-quality'
import environmentalTesting from './environmental-testing'

export type { ServiceData }
export { type ServiceFeature, type ServiceStat, type ServiceTestimonial, type ServiceFAQ, type ServiceLogo, type ServiceRelatedFeature } from './types'
export { serviceTree, getAllServiceNodes, getNodeByPath, getCategoryServices, getDivisionCategories, getServiceBySlug } from './service-tree'
export type { ServiceNode } from './service-tree'

const services: Record<string, ServiceData> = {
  [waterDamageRestoration.slug]: waterDamageRestoration,
  [floodCleanup.slug]: floodCleanup,
  [stormDamageRestoration.slug]: stormDamageRestoration,
  [burstPipeCleanup.slug]: burstPipeCleanup,
  [structuralDrying.slug]: structuralDrying,
  [sewageCleanup.slug]: sewageCleanup,
  [moldRemediation.slug]: moldRemediation,
  [fireSmokeCleanup.slug]: fireSmokeCleanup,
  [odorRemoval.slug]: odorRemoval,
  [contentsCleaningPackout.slug]: contentsCleaningPackout,
  [basementFlooding.slug]: basementFlooding,
  [crawlSpaceDrying.slug]: crawlSpaceDrying,
  [hardwoodFloorDrying.slug]: hardwoodFloorDrying,
  [roofLeakWaterDamage.slug]: roofLeakWaterDamage,
  [commercialWaterDamage.slug]: commercialWaterDamage,
  [commercialFloodCleanup.slug]: commercialFloodCleanup,
  [largeLossRestoration.slug]: largeLossRestoration,
  [commercialSewageCleanup.slug]: commercialSewageCleanup,
  [commercialMoldRemediation.slug]: commercialMoldRemediation,
  [commercialFireSmokeCleanup.slug]: commercialFireSmokeCleanup,
  [healthcareFacilities.slug]: healthcareFacilities,
  [hospitalityMultifamily.slug]: hospitalityMultifamily,
  [municipalEducation.slug]: municipalEducation,
  [industrialFacilities.slug]: industrialFacilities,
  [moistureMappingConsulting.slug]: moistureMappingConsulting,
  [indoorAirQuality.slug]: indoorAirQuality,
  [environmentalTesting.slug]: environmentalTesting,
}

export const allServices = Object.values(services)
export const getService = (slug: string): ServiceData | undefined => services[slug]
export default services
