import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {MAX_NEAREST_OFFERS} from '../../constants';

export const getLoadingState = (state) => state[NameSpace.DATA].isLoading;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getOffer = (state, id) => state[NameSpace.DATA].offers.find((it) => it.id === +id);
export const getNearestOffers = (state, id) => state[NameSpace.DATA].offers
  .filter((it) => it.id !== id && it.city.name === state[NameSpace.DATA].city.name)
  .slice(0, MAX_NEAREST_OFFERS);
export const getOffersByCity = (state) => createSelector(
    getOffers,
    (offers) => offers.filter((it) => it.city.name === state[NameSpace.DATA].city.name)
)(state);

export const getCurrentCity = (state) => state[NameSpace.DATA].city;
export const getCities = createSelector(
    getOffers,
    (offers) => {
      const uniqueCities = offers.reduce((accum, {city}) => {
        if (!accum[city.name]) {
          accum[city.name] = city;
        }

        return accum;
      }, {});

      return Object.values(uniqueCities);
    }
);

export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;
