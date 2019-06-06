import {
  LOAD_OFFERS,
  CHANGE_CITY,
  LOAD_FAVORITES,
} from '../action-types';

export default {
  loadOffers: (offers) => ({
    type: LOAD_OFFERS,
    payload: offers,
    isLoading: false,
  }),
  changeCity: (city) => ({
    type: CHANGE_CITY,
    payload: city,
  }),
  loadFavorites: (favorites) => ({
    type: LOAD_FAVORITES,
    payload: favorites,
    isLoading: true,
  }),
};
