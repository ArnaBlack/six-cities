import {createSelector} from 'reselect';
import NameSpace from '../name-space';

export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getCurrentCity = (state) => state[NameSpace.DATA].city;
export const getLoadingState = (state) => state[NameSpace.DATA].isLoading;
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

export const getOffersByCity = (state) => createSelector(
    getOffers,
    (offers) => offers.filter((it) => it.city.name === state[NameSpace.DATA].city.name)
)(state);
export const getFavorites = (state) => state[NameSpace.DATA].favorites;
