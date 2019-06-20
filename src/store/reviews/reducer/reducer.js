import {
  LOAD_REVIEWS,
  SEND_REVIEW,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR,
} from '../action-types';

const initialState = {
  reviews: [],
  isLoading: true,
  isSending: false,
  sendingError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS: {
      return {
        ...state,
        reviews: action.payload,
        isLoading: false,
        isSending: false,
        sendingError: null,
      };
    }
    case SEND_REVIEW: {
      return {
        ...state,
        isSending: true,
        sendingError: null,
      };
    }
    case SEND_REVIEW_SUCCESS: {
      return {
        ...state,
        isSending: false,
        sendingError: null,
      };
    }
    case SEND_REVIEW_ERROR: {
      return {
        ...state,
        isSending: false,
        sendingError: action.payload,
      };
    }
    default:
      return state;
  }
};
