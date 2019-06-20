import {
  LOAD_REVIEWS,
  SEND_REVIEW,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR,
} from '../action-types';

export default {
  loadReviews: (reviews) => ({
    type: LOAD_REVIEWS,
    payload: reviews,
  }),
  sendReview: () => ({
    type: SEND_REVIEW,
  }),
  sendReviewSuccess: () => ({
    type: SEND_REVIEW_SUCCESS,
  }),
  sendReviewError: (error) => ({
    type: SEND_REVIEW_ERROR,
    payload: error,
  }),
};
