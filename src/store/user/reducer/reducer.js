import {
  REQUIRED_AUTHORIZATION,
} from '../action-types';

const initialState = {
  isAuthorizationRequired: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        isAuthorizationRequired: action.payload,
      };
    }
    default:
      return state;
  }
};
