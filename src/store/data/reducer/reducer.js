import {
  LOAD_OFFERS,
  CHANGE_CITY,
  LOAD_FAVORITES,
} from '../action-types';

const initialState = {
  offers: [],
  favorites: [],
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
    default:
      return state;
  }
};
