import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Places} from './places';

configure({adapter: new Adapter()});

const mock = {
  offers: [],
  currentCity: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
};

it(`Places correctly renders`, () => {
  const {
    offers,
    currentCity,
  } = mock;
  const onSelectOffer = jest.fn();
  const onSortingTypeChange = jest.fn();
  const tree = shallow(<Places
    offers={offers}
    currentCity={currentCity}
    onSelectOffer={onSelectOffer}
    onSortingTypeChange={onSortingTypeChange}
  />);

  expect(tree).toMatchSnapshot();
});
