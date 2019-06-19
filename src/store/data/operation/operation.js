import ActionCreator from '../action-creator/action-creator';
import {
  adaptOfferData,
  adaptReviewData,
} from '../util';

export default {
  loadOffers: () => (dispatch, _getState, api) => api.get(`/hotels`)
    .then((response) => {
      const data = response.data.map(adaptOfferData);
      const city = data[0].city;
      dispatch(ActionCreator.changeCity(city));
      dispatch(ActionCreator.loadOffers(data));
    }),
  loadFavorites: () => (dispatch, _getState, api) => api.get(`/favorite`)
    .then((response) => {
      const data = response.data.map(adaptOfferData);
      dispatch(ActionCreator.loadFavorites(data));
    }),
  loadReviews: (id) => (dispatch, _getState, api) => api.get(`/comments/${id}`)
    .then((response) => {
      const data = response.data.map(adaptReviewData);
      dispatch(ActionCreator.loadReviews(data));
    }),
  sendReview: ({id, rating, comment}) => (dispatch, _getState, api) => api.post(`/comments/${id}`, {
    rating,
    comment,
  })
    .then((response) => {
      if (!response) {
        return;
      }

      const data = response.data.map(adaptReviewData);
      dispatch(ActionCreator.loadReviews(data));
    }),
  updateOffer: ({isFavorite, id}) => (dispatch, _getState, api) => api.post(`/favorite/${id}/${isFavorite}`)
    .then((response) => {
      if (!response) {
        return;
      }

      const data = adaptOfferData(response.data);
      dispatch(ActionCreator.updateOffer(data));
      dispatch(ActionCreator.updateFavoriteOffers(data));
    }),
};
