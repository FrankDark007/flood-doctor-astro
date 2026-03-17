import type { CityData } from './types'

const main: CityData = {
  slug: 'main',
  name: 'Northern Virginia',
  state: 'Virginia',
  stateAbbr: 'VA',
  fullName: 'Northern Virginia & DC Metro',
  phone: '(877) 497-0007',
  address: '8466D Tyco Rd, Vienna, VA 22182',
  zipCode: '22182',
  serviceArea: [
    'Fairfax',
    'Arlington',
    'Alexandria',
    'McLean',
    'Vienna',
    'Tysons',
    'Reston',
    'Herndon',
    'Ashburn',
    'Springfield',
    'Falls Church',
    'Great Falls',
    'Centreville',
    'Chantilly',
    'Leesburg',
    'Lorton',
    'Sterling',
  ],
  googleMapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199412.5234!2d-77.4291!3d38.8951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b64e!2sNorthern+Virginia!5e0!3m2!1sen!2sus!4v1',
  coordinates: { lat: 38.8816, lng: -77.1714 },
  meta: {
    title: 'Flood Doctor | 24/7 Water Damage Restoration in Northern Virginia',
    description:
      '24/7 emergency water damage restoration serving all of Northern Virginia & DC Metro. IICRC certified, VA Class-A contractor. 60-minute response guarantee. Call (877) 497-0007.',
  },
}

export default main
