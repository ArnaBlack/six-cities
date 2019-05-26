import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
import Main from './main.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  currentCity: `Amsterdam`,
  offers: [
    {
      id: 1,
      city: `Amsterdam`,
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

it(`Main correctly renders`, () => {
  const {
    currentCity,
    offers,
  } = mock;
  const tree = shallow(<Main
    currentCity={currentCity}
    offers={offers}
  />);

  expect(shallowToJson(tree)).toMatchSnapshot();
});
