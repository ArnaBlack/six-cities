import React from 'react';
import renderer from 'react-test-renderer';
import {Map} from './map.jsx';

const mock = {
  center: [52.38333, 4.9],
  cityCoordinates: [52.38333, 4.9],
  offers: [
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
  ],
  activeOfferId: 2,
};

it(`Map correctly renders`, () => {
  const {
    center,
    cityCoordinates,
    offers,
    activeOfferId,
  } = mock;
  const tree = renderer
    .create(<Map
      center={center}
      cityCoordinates={cityCoordinates}
      offers={offers}
      activeOfferId={activeOfferId}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
