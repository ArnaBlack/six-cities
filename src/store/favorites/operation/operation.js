import ActionCreator from '../action-creator/action-creator';
import OffersActionCreator from '../../offers/action-creator/action-creator';
import {adaptOfferData} from '../../offers/util';

export default {
  loadFavorites: () => (dispatch, _getState, api) => api.get(`/favorite`)
    .then((response) => {
      const data = response.data.map(adaptOfferData);
      dispatch(ActionCreator.loadFavorites(data));
    })
    .catch(() => {}),
  updateFavorites: ({isFavorite, id}) => (dispatch, _getState, api) => api.post(`/favorite/${id}/${isFavorite}`)
    .then((response) => {
      const data = adaptOfferData(response.data);
      dispatch(ActionCreator.updateFavorites(data));
      dispatch(OffersActionCreator.updateOffers(data));
    })
    .catch(() => {}),
};
