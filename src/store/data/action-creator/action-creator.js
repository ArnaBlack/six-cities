import {
  LOAD_OFFERS,
  UPDATE_OFFER,
  UPDATE_FAVORITE_OFFERS,
  CHANGE_CITY,
  LOAD_FAVORITES,
  LOAD_REVIEWS,
} from '../action-types';

export default {
  loadOffers: (offers) => ({
    type: LOAD_OFFERS,
    payload: offers,
    isLoading: false,
  }),
  updateOffer: (offer) => ({
    type: UPDATE_OFFER,
    payload: offer,
  }),
  updateFavoriteOffers: (offer) => ({
    type: UPDATE_FAVORITE_OFFERS,
    payload: offer,
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
  loadReviews: (reviews) => ({
    type: LOAD_REVIEWS,
    payload: reviews,
    isLoading: true,
  }),
};
