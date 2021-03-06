import {
  LOAD_OFFERS,
  UPDATE_OFFERS,
} from '../action-types';

export default {
  loadOffers: (offers) => ({
    type: LOAD_OFFERS,
    payload: offers,
  }),
  updateOffers: (offer) => ({
    type: UPDATE_OFFERS,
    payload: offer,
  }),
};
