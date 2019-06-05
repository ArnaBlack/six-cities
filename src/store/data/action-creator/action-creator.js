import {
  LOAD_OFFERS,
  CHANGE_CITY,
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
};
