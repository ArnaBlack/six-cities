import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {PlacesEmpty} from './places-empty';

configure({adapter: new Adapter()});

const mock = {
  currentCity: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
};

it(`NoPlaces correctly renders`, () => {
  const {currentCity} = mock;
  const tree = shallow(<PlacesEmpty currentCity={currentCity} />);

  expect(tree).toMatchSnapshot();
});
