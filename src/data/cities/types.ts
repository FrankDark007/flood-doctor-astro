export interface CityData {
  slug: string
  name: string
  state: string
  stateAbbr: string
  fullName: string
  phone: string
  address: string
  zipCode: string
  serviceArea: string[]
  googleMapsEmbed: string
  coordinates: { lat: number; lng: number }
  meta: {
    title: string
    description: string
  }
}
