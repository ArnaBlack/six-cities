export const BASE_URL = `https://es31-server.appspot.com/six-cities`;
export const CITIES_AMOUNT = 6;
export const MAX_RATING = 5;
export const MAX_GALLERY_IMAGES = 6;
export const MAX_REVIEWS = 10;
export const MAX_NEAREST_OFFERS = 3;
export const PlaceType = {
  APARTMENT: `Apartment`,
  ROOM: `Private Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`,
};
export const SortingType = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Low to high`,
  HIGH_TO_LOW: `High to low`,
  TOP_RATED: `Top rated first`,
};
export const MapParam = {
  TEMPLATE_URL: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  TILE_OPTIONS: {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
  },
};
export const PinParam = {
  SIZES: [27, 39],
  URL: `img/pin.svg`,
  ACTIVE_URL: `img/pin-active.svg`,
};
export const Review = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
};
