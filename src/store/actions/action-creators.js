import {
  CHANGE_CITY,
  GET_OFFERS,
} from './action-types';
import offersMock from '../../mocks/offers';

export default {
  changeCity(city) {
    return {
      type: CHANGE_CITY,
      city,
    };
  },
  getOffers() {
    return {
      type: GET_OFFERS,
      offers: offersMock,
    };
  },
};
