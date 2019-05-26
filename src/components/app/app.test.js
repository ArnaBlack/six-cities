import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
import {App} from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  currentCity: `Amsterdam`,
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
  ],
};

it(`App correctly renders`, () => {
  const {
    currentCity,
    cityCoordinates,
    offers
  } = mock;
  const tree = shallow(<App
    currentCity={currentCity}
    cityCoordinates={cityCoordinates}
    offers={offers}
    getOffers={jest.fn()}
  />);

  expect(shallowToJson(tree)).toMatchSnapshot();
});
