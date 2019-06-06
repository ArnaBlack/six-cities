import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  isLoading: true,
  isAuthorizationRequired: true,
};

it(`App correctly renders`, () => {
  const {
    isLoading,
    isAuthorizationRequired,
  } = mock;
  const loadOffers = jest.fn();
  const checkAuth = jest.fn();
  const tree = shallow(<App
    isLoading={isLoading}
    isAuthorizationRequired={isAuthorizationRequired}
    loadOffers={loadOffers}
    checkAuth={checkAuth}
  />);

  expect(tree).toMatchSnapshot();
});
