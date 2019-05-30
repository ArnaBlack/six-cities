import {
  CHANGE_CITY,
  GET_OFFERS,
} from '../actions/action-types';
import offersMock from '../../mocks/offers';
import citiesMock from '../../mocks/cities';

const initialState = {
  city: `Amsterdam`,
  offers: offersMock,
  cities: citiesMock,
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
