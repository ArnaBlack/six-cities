import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from './map.jsx';

const mock = {
  currentCity: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    }
  },
  offers: [
    {
      bedrooms: 1,
      city: {
        name: `Brussels`,
        location: {
          latitude: 50.846557,
          longitude: 4.351697,
          zoom: 13,
        },
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
  selectedOffer: {
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
};

it(`Map correctly renders`, () => {
  const {
    currentCity,
    offers,
    selectedOffer,
  } = mock;
  const tree = renderer
    .create(<Map
      currentCity={currentCity}
      offers={offers}
      selectedOffer={selectedOffer}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
