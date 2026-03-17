import type { CityData } from './types'

import ashburn from './ashburn'
import alexandria from './alexandria'
import arlington from './arlington'
import centreville from './centreville'
import chantilly from './chantilly'
import fairfax from './fairfax'
import fallschurch from './fallschurch'
import greatfalls from './greatfalls'
import herndon from './herndon'
import leesburg from './leesburg'
import lorton from './lorton'
import mclean from './mclean'
import reston from './reston'
import springfield from './springfield'
import sterling from './sterling'
import tysons from './tysons'
import vienna from './vienna'
import main from './main'

const cities: Record<string, CityData> = {
  ashburn,
  alexandria,
  arlington,
  centreville,
  chantilly,
  fairfax,
  fallschurch,
  greatfalls,
  herndon,
  leesburg,
  lorton,
  main,
  mclean,
  reston,
  springfield,
  sterling,
  tysons,
  vienna,
}

const citySlug = import.meta.env.CITY || 'ashburn'

export const cityData: CityData = cities[citySlug] || ashburn
export const allCities = cities
export type { CityData }
