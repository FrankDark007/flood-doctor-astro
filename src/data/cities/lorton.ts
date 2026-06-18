import type { CityData } from './types'

const lorton: CityData = {
  slug: 'lorton',
  name: 'Lorton',
  state: 'Virginia',
  stateAbbr: 'VA',
  fullName: 'Lorton, Virginia',
  phone: '(877) 497-0007',
  address: '8466D Tyco Rd, Vienna, VA 22182',
  zipCode: '22079',
  serviceArea: [
    'Lorton', 'Newington', 'Mason Neck', 'Gunston',
    'South Run', 'Laurel Hill', 'Fort Belvoir', 'Woodbridge',
  ],
  googleMapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24950.0!2d-77.2275!3d38.7043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7a8!2sLorton%2C+VA!5e0!3m2!1sen!2sus!4v1',
  coordinates: { lat: 38.7043, lng: -77.2275 },
  meta: {
    title: 'Flood Doctor Lorton | 24/7 Water Damage Restoration',
    description: '24/7 emergency water damage restoration serving Lorton, VA and nearby neighborhoods. Water extraction, structural drying, mold remediation, flood cleanup, and insurance documentation help. Call (877) 497-0007.',
  },
}

export default lorton
