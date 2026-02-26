import type { CityData } from './types'

import ashburn from './ashburn'
import alexandria from './alexandria'
import arlington from './arlington'
import centreville from './centreville'
import chantilly from './chantilly'
import fairfax from './fairfax'
import herndon from './herndon'
import leesburg from './leesburg'
import mclean from './mclean'
import reston from './reston'
import springfield from './springfield'
import sterling from './sterling'
import vienna from './vienna'

const cities: Record<string, CityData> = {
  ashburn,
  alexandria,
  arlington,
  centreville,
  chantilly,
  fairfax,
  herndon,
  leesburg,
  mclean,
  reston,
  springfield,
  sterling,
  vienna,
}

const citySlug = import.meta.env.CITY || 'ashburn'

export const cityData: CityData = cities[citySlug] || ashburn
export const allCities = cities
export type { CityData }
