import * as React from 'react';
import {
  shallow,
  configure,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {CityLink} from './city-link';

configure({adapter: new Adapter()});

const mock = {
  city: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  isActive: true,
};

it(`CityLink renders correctly`, () => {
  const {
    city,
    isActive
  } = mock;
  const onClick = jest.fn();
  const onCityClick = jest.fn();
  const tree = shallow(<CityLink
    city={city}
    isActive={isActive}
    onClick={onClick}
    onCityClick={onCityClick}
  />);

  expect(tree).toMatchSnapshot();
});
