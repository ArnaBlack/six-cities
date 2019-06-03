import {createSelector} from 'reselect';
import NameSpace from '../name-space';

export const getOffers = (state) => state[NameSpace.DATA].offers;
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

export const getOffersByCity = (state, city) => createSelector(
    getOffers,
    (offers) => offers.filter((it) => it.city.name === city.name)
)(state);
