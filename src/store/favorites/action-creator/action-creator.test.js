import {
  LOAD_FAVORITES,
  UPDATE_FAVORITES,
} from '../action-types';
import ActionCreator from './action-creator';

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

it(`Action creator for getting favorites returns correct action`, () => {
  const {favorites} = mock;
  const expected = {
    type: LOAD_FAVORITES,
    payload: favorites,
  };

  expect(ActionCreator.loadFavorites(favorites)).toEqual(expected);
});

it(`Action creator for update favorites returns correct action`, () => {
  const {favorites} = mock;
  const expected = {
    type: UPDATE_FAVORITES,
    payload: favorites[0],
  };

  expect(ActionCreator.updateFavorites(favorites[0])).toEqual(expected);
});
