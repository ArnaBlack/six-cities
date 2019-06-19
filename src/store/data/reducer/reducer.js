import {
  LOAD_OFFERS,
  UPDATE_OFFER,
  UPDATE_FAVORITE_OFFERS,
  CHANGE_CITY,
  LOAD_FAVORITES,
  LOAD_REVIEWS,
} from '../action-types';
import {
  updateOffer,
  updateFavoriteOffers,
} from '../util';

const initialState = {
  offers: [],
  favorites: [],
  reviews: [],
  city: null,
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isLoading: false,
      };
    case UPDATE_OFFER:
      return {
        ...state,
        offers: updateOffer(state.offers, action.payload),
      };
    case UPDATE_FAVORITE_OFFERS:
      return {
        ...state,
        favorites: updateFavoriteOffers(state.favorites, action.payload),
      };
    case CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case LOAD_FAVORITES: {
      return {
        ...state,
        favorites: action.payload,
      };
    }
    case LOAD_REVIEWS: {
      return {
        ...state,
        reviews: action.payload,
      };
    }
    default:
      return state;
  }
};
