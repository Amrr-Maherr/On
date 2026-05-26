export interface Coordinates {
  lng: number
  lat: number
}

export interface Branch {
  id: string
  name: string
  city: string
  address: string
  phone: string
  workingHours: string
  coordinates: Coordinates
  isHeadquarters?: boolean
  offersInternationalShipping?: boolean
  image?: string
}
