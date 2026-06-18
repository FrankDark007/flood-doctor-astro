import type { CityData } from './types'

const alexandria: CityData = {
  slug: 'alexandria',
  name: 'Alexandria',
  state: 'Virginia',
  stateAbbr: 'VA',
  fullName: 'Alexandria, Virginia',
  phone: '(877) 497-0007',
  address: '100 King St, Alexandria, VA 22301',
  zipCode: '22301',
  serviceArea: ["Old Town","Del Ray","Potomac Yard","Eisenhower Valley","Seminary Hill","Landmark","Arlandria","Carlyle"],
  googleMapsEmbed: '',
  coordinates: { lat: 38.8048, lng: -77.0469 },
  meta: {
    title: 'Flood Doctor Alexandria | 24/7 Water Damage Restoration',
    description: '24/7 emergency water damage restoration in Alexandria, VA. IICRC certified technicians respond in 60 minutes. Mold remediation, flood cleanup & insurance claims help. Call (877) 497-0007.',
  },
}

export default alexandria
