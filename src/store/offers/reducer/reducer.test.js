import {
  LOAD_OFFERS,
  UPDATE_OFFERS,
} from '../action-types';
import reducer from './reducer';
import {updateOffers} from '../util';

const mock = {
  offers: [
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
      isFavorite: false,
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

it(`Should get offers`, () => {
  const {offers} = mock;
  const state = {
    offers: [],
    isLoading: true,
  };

  const action = {
    type: LOAD_OFFERS,
    payload: offers,
  };

  const expected = {
    offers,
    isLoading: false,
  };

  expect(reducer(state, action)).toEqual(expected);
});

it(`Should update offers`, () => {
  const {offers} = mock;
  const state = {
    offers,
  };

  const updatedOffer = {
    ...offers[0],
    isFavorite: !offers[0].isFavorite,
  };

  const action = {
    type: UPDATE_OFFERS,
    payload: updatedOffer,
  };

  const expected = {
    offers: updateOffers(offers, updatedOffer),
  };

  expect(reducer(state, action)).toEqual(expected);
});
