import {
  LOAD_OFFERS,
  CHANGE_CITY,
} from '../action-types';

const initialState = {
  offers: [],
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
    default:
      return state;
  }
};
