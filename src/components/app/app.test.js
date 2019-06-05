import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {App} from './app.jsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  isLoading: true,
};

it(`App correctly renders`, () => {
  const {isLoading} = mock;
  const loadOffers = jest.fn();
  const tree = shallow(<App
    isLoading={isLoading}
    loadOffers={loadOffers}
  />);

  expect(tree).toMatchSnapshot();
});
