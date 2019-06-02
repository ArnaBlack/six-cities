import {
  CHANGE_CITY,
  LOAD_OFFERS,
} from '../actions/action-types';

const initialState = {
  city: null,
  offers: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    case LOAD_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};
