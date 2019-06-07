import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Cities} from './cities.tsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  currentCity: {
    name: `Amsterdam`,
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13,
    },
  },
  cities: [
    {
      name: `Amsterdam`,
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13,
      },
    },
    {
      name: `Paris`,
      location: {
        latitude: 51.37454,
        longitude: 3.897976,
        zoom: 10,
      },
    }
  ],
};

it(`Cities renders correctly`, () => {
  const {
    currentCity,
    cities,
  } = mock;
  const onCityClick = jest.fn();
  const tree = shallow(<Cities
    currentCity={currentCity}
    cities={cities}
    onCityClick={onCityClick}
  />);

  expect(tree).toMatchSnapshot();
});

