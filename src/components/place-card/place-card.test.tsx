import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card';

configure({adapter: new Adapter()});

const mock = {
  offer: {
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
};

it(`PlaceCard correctly renders`, () => {
  const {offer} = mock;
  const clickHandler = jest.fn();
  const tree = shallow(<PlaceCard
    offer={offer}
    onImageClick={clickHandler}
  />);

  expect(tree).toMatchSnapshot();
});
