export const BASE_URL = `https://es31-server.appspot.com/six-cities`;
export const MAX_NEAREST_OFFERS = 3;
export const MAX_GALLERY_IMAGES = 6;
export const MAX_RATING = 5;
export const PlaceTypes = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};
export const SortingTypes = {
  POPULAR: `Popular`,
  LOW_TO_HIGH: `Low to high`,
  HIGH_TO_LOW: `High to low`,
  TOP_RATED: `Top rated first`,
};
export const MapParams = {
  TEMPLATE_URL: `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
  TILE_OPTIONS: {
    attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`,
  },
};
export const PinParams = {
  SIZES: [27, 39],
  URL: `/img/pin.svg`,
  ACTIVE_URL: `/img/pin-active.svg`,
};
