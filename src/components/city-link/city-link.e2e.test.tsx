import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {CityLink} from './city-link';

configure({adapter: new Adapter()});

const mock = {
  city: {
    name: `Amsterdam`,
    location: {
      longitude: 1,
      latitude: 1,
      zoom: 1,
    },
  },
  isActive: false,
};

it(`Object with current city correctly passes to callback on click`, () => {
  const {
    city,
    isActive,
  } = mock;
  const onClick = jest.fn();
  const onCityClick = jest.fn();
  const cityLink = shallow(<CityLink
    city={city}
    isActive={isActive}
    onClick={onClick}
    onCityClick={onCityClick}
  />);

  const link = cityLink.find(`a`);
  const clickEvent = new Event(`click`);
  link.simulate(`click`, clickEvent);
  expect(onCityClick).toHaveBeenCalled();
  expect(onClick).toHaveBeenCalledWith(city);
});
