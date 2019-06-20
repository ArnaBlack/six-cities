import {
  LOAD_OFFERS,
  UPDATE_OFFERS,
} from '../action-types';
import ActionCreator from './action-creator';

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

it(`Action creator for getting offers returns correct action`, () => {
  const {offers} = mock;
  const expected = {
    type: LOAD_OFFERS,
    payload: offers,
  };

  expect(ActionCreator.loadOffers(offers)).toEqual(expected);
});

it(`Action creator for update offers returns correct action`, () => {
  const {offers} = mock;
  const expected = {
    type: UPDATE_OFFERS,
    payload: offers[0],
  };

  expect(ActionCreator.updateOffers(offers[0])).toEqual(expected);
});
