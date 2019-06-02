import {LOAD_OFFERS} from '../action-types';

export default {
  loadOffers(offers) {
    return {
      type: LOAD_OFFERS,
      payload: offers,
      isLoading: false,
    };
  },
};
