import {
  LOAD_FAVORITES,
  UPDATE_FAVORITES,
} from '../action-types';
import reducer from './reducer';
import {updateFavorites} from '../util';

const mock = {
  favorites: [
    {
      bedrooms: 1,
      city: {
        name: `Brussels`,
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13,
        }
      },
      description: `Description`,
      goods: [`Washer`, `Towels`],
      host: {
        avatarUrl: `img/avatar-angelina.jpg`,
        id: 25,
        isPro: true,
        name: `Name`,
      },
      id: 1,
      images: [`https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`],
      isFavorite: true,
      isPremium: false,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
      maxAdults: 3,
      previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/4.jpg`,
      price: 117,
      rating: 3.4,
      title: `The house among olive`,
      type: `room`,
    },
  ],
};

it(`Should get favorites`, () => {
  const {favorites} = mock;
  const state = {
    favorites: [],
    isLoading: true,
  };

  const action = {
    type: LOAD_FAVORITES,
    payload: favorites,
  };

  const expected = {
    favorites,
    isLoading: false,
  };

  expect(reducer(state, action)).toEqual(expected);
});

it(`Should update favorites`, () => {
  const {favorites} = mock;
  const state = {
    favorites,
  };

  const updatedFavorite = {
    ...favorites[0],
    isFavorite: false,
  };

  const action = {
    type: UPDATE_FAVORITES,
    payload: updatedFavorite,
  };

  const expected = {
    favorites: updateFavorites(favorites, updatedFavorite),
  };

  expect(reducer(state, action)).toEqual(expected);
});
