import {LOAD_OFFERS} from '../action-types';

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
    default:
      return state;
  }
};
