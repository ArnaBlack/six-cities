import ActionCreator from '../action-creator/action-creator';
import {adaptOfferData} from '../util';

export default {
  loadOffers: (onSuccess) => (dispatch, _getState, api) => api.get(`/hotels`)
    .then((response) => {
      const data = response.data.map(adaptOfferData);
      const city = data[0].city;
      onSuccess(city);
      dispatch(ActionCreator.loadOffers(data));
    })
};
