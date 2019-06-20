import ActionCreator from '../action-creator/action-creator';
import CityActionCreator from '../../city/action-creator/action-creator';
import {adaptOfferData} from '../util';

export default {
  loadOffers: () => (dispatch, _getState, api) => api.get(`/hotels`)
    .then((response) => {
      const data = response.data.map(adaptOfferData);
      const randomIndex = Math.floor(Math.random() * data.length);
      const city = data[randomIndex].city;
      dispatch(CityActionCreator.changeCity(city));
      dispatch(ActionCreator.loadOffers(data));
    })
    .catch(() => {}),
};
