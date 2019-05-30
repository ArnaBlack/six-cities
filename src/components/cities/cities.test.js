import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Cities} from './cities.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  currentCity: `Amsterdam`,
  cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`],
};

it(`Cities renders correctly`, () => {
  const {
    currentCity,
    cities,
  } = mock;
  const tree = shallow(<Cities
    currentCity={currentCity}
    cities={cities}
  />);

  expect(tree).toMatchSnapshot();
});

