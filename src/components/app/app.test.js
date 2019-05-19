import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';

const mock = {
  cityCoordinates: [52.38333, 4.9],
  offers: [
    {
      id: 1,
      mark: `Premium`,
      imageSrc: `img/apartment-01.jpg`,
      price: 120,
      inBookmarks: true,
      rating: 4,
      title: `Beautiful luxurious apartment at great location`,
      type: `Apartment`,
      coordinates: [52.3909553943508, 4.85309666406198],
    },
    {
      id: 2,
      imageSrc: `img/room.jpg`,
      price: 80,
      inBookmarks: false,
      rating: 4.5,
      title: `Wood and stone place`,
      type: `Private room`,
      coordinates: [52.369553943508, 4.85309666406198],
    },
    {
      id: 3,
      imageSrc: `img/apartment-02.jpg`,
      price: 132,
      inBookmarks: true,
      rating: 2.3,
      title: `Canal View Prinsengracht`,
      type: `Apartment`,
      coordinates: [52.3909553943508, 4.929309666406198],
    },
    {
      id: 4,
      mark: `Premium`,
      imageSrc: `img/apartment-03.jpg`,
      price: 180,
      inBookmarks: false,
      rating: 3.1,
      title: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      coordinates: [52.3809553943508, 4.939309666406198],
    },
  ],
};

it(`App correctly renders`, () => {
  const {
    cityCoordinates,
    offers
  } = mock;
  const tree = renderer
    .create(<App
      cityCoordinates={cityCoordinates}
      offers={offers}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
