import {
  LOAD_FAVORITES,
  UPDATE_FAVORITES,
} from '../action-types';

export default {
  loadFavorites: (favorites) => ({
    type: LOAD_FAVORITES,
    payload: favorites,
  }),
  updateFavorites: (offer) => ({
    type: UPDATE_FAVORITES,
    payload: offer,
  }),
};
