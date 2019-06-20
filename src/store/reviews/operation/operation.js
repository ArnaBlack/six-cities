import ActionCreator from '../action-creator/action-creator';
import {adaptReviewData} from '../util';

export default {
  loadReviews: (id) => (dispatch, _getState, api) => api.get(`/comments/${id}`)
    .then((response) => {
      const data = response.data.map(adaptReviewData);
      dispatch(ActionCreator.loadReviews(data));
    })
    .catch(() => {}),
  sendReview: ({id, rating, comment}) => (dispatch, _getState, api) => {
    dispatch(ActionCreator.sendReview());

    return api.post(`/comments/${id}`, {
      rating,
      comment,
    })
      .then((response) => {
        const data = response.data.map(adaptReviewData);
        dispatch(ActionCreator.sendReviewSuccess());
        dispatch(ActionCreator.loadReviews(data));
      })
      .catch((err) => {
        let error = `Error!`;

        if (err.response && err.response.data && err.response.data.error) {
          error = err.response.data.error;
        }

        dispatch(ActionCreator.sendReviewError(error));
      });
  },
};
