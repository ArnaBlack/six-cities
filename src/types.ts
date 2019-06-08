export interface Location {
  latitude: number,
    longitude: number,
    zoom: number,
}

export interface City {
  name: string,
  location: Location,
}

export interface User {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
  email?: string,
}

export interface Offer {
  bedrooms: number,
  city: City,
  description: string,
  goods: string[],
  host: User
  id: number,
  images: string[],
  isFavorite: boolean,
  isPremium: boolean,
  location: Location,
  maxAdults: number,
  previewImage: string,
  price: number,
  rating: number,
  title: string,
  type: string,
}
