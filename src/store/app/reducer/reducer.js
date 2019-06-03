import {
  CHANGE_CITY,
} from '../action-types';

const initialState = {
  city: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CITY:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
};
