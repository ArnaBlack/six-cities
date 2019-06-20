import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {
  CITIES_AMOUNT,
  MAX_NEAREST_OFFERS,
} from '../../constants';

export const getLoadingState = (state) => state[NameSpace.OFFERS].isLoading;
export const getOffers = (state) => state[NameSpace.OFFERS].offers;
export const getOffer = (state, id) => state[NameSpace.OFFERS].offers.find((it) => `${it.id}` === id);
export const getNearestOffers = (state, id) => state[NameSpace.OFFERS].offers
  .filter((it) => `${it.id}` !== id && it.city.name === state[NameSpace.CITY].city.name)
  .slice(0, MAX_NEAREST_OFFERS);
export const getOffersByCity = (state) => createSelector(
    getOffers,
    (offers) => offers.filter((it) => it.city.name === state[NameSpace.CITY].city.name)
)(state);
export const getCities = createSelector(
    getOffers,
    (offers) => {
      const uniqueCities = offers.reduce((obj, {city}) => {
        if (!obj[city.name]) {
          obj[city.name] = city;
        }

        return obj;
      }, {});

      return Object.values(uniqueCities).slice(0, CITIES_AMOUNT);
    }
);
