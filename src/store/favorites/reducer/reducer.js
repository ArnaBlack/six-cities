import {
  LOAD_FAVORITES,
  UPDATE_FAVORITES,
} from '../action-types';
import {updateFavorites} from '../util';

const initialState = {
  favorites: [],
  isLoading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FAVORITES: {
      return {
        ...state,
        favorites: action.payload,
        isLoading: false,
      };
    }
    case UPDATE_FAVORITES:
      return {
        ...state,
        favorites: updateFavorites(state.favorites, action.payload),
      };
    default:
      return state;
  }
};
