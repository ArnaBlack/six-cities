import {
  CHANGE_CITY,
  LOAD_OFFERS,
} from './action-types';

export default {
  changeCity(city) {
    return {
      type: CHANGE_CITY,
      payload: city,
    };
  },
  loadOffers(offers) {
    return {
      type: LOAD_OFFERS,
      payload: offers,
      isLoading: false,
    };
  },
};
