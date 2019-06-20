import {
  LOAD_OFFERS,
  UPDATE_OFFERS,
} from '../action-types';
import {updateOffers} from '../util';

const initialState = {
  offers: [],
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
    case UPDATE_OFFERS:
      return {
        ...state,
        offers: updateOffers(state.offers, action.payload),
      };
    default:
      return state;
  }
};
