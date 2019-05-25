import {
  CHANGE_CITY,
  GET_OFFERS,
} from '../actions/action-types';

const initialState = {
  city: `Amsterdam`,
  offers: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        city: action.city,
      };
    case GET_OFFERS:
      return {
        ...state,
        offers: action.offers,
      };
    default:
      return state;
  }
};
