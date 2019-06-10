import {
  LOAD_OFFERS,
  CHANGE_CITY,
  LOAD_FAVORITES,
  LOAD_REVIEWS,
} from '../action-types';

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
