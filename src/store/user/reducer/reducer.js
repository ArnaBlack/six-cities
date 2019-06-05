import {
  REQUIRED_AUTHORIZATION,
  GET_USER,
} from '../action-types';

const initialState = {
  isAuthorizationRequired: true,
  user: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case REQUIRED_AUTHORIZATION: {
      return {
        ...state,
        isAuthorizationRequired: action.payload,
      };
    }
    case GET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }
    default:
      return state;
  }
};
