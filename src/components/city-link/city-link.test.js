import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {shallowToJson} from 'enzyme-to-json';
import {CityLink} from './city-link.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  city: `Amsterdam`,
  isActive: true,
};

it(`CityLink renders correctly`, () => {
  const {
    city,
    isActive
  } = mock;
  const clickHandler = jest.fn();
  const tree = shallow(<CityLink
    city={city}
    isActive={isActive}
    onClick={clickHandler}
  />);

  expect(shallowToJson(tree)).toMatchSnapshot();
});
