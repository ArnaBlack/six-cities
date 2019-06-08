import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {App} from './app';

configure({adapter: new Adapter()});

const mock = {
  isLoading: true,
  currentCity: {
    name: `Brussels`,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
  },
  isAuthorizationRequired: true,
};

it(`App correctly renders`, () => {
  const {
    isLoading,
    currentCity,
    isAuthorizationRequired,
  } = mock;
  const loadOffers = jest.fn();
  const checkAuth = jest.fn();
  const tree = shallow(<App
    isLoading={isLoading}
    isAuthorizationRequired={isAuthorizationRequired}
    loadOffers={loadOffers}
    checkAuth={checkAuth}
    currentCity={currentCity}
  />);

  expect(tree).toMatchSnapshot();
});
