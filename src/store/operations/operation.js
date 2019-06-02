import ActionCreators from '../actions/action-creators';
import {adaptOfferData} from '../utils/util';

export default {
  loadOffers: () => (dispatch, _getState, api) => api.get(`/hotels`)
    .then((response) => {
      const data = response.data.map(adaptOfferData);
      const city = data[0].city;

      dispatch(ActionCreators.changeCity(city));
      dispatch(ActionCreators.loadOffers(data));
    })
};
