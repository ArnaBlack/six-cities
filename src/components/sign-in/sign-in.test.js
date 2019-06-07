import React from 'react';
import renderer from 'react-test-renderer';
import {SignIn} from './sign-in.tsx';

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

it(`SignIn correctly renders`, () => {
  const {currentCity} = mock;
  const onLogin = jest.fn();
  const tree = renderer
    .create(<SignIn
      currentCity={currentCity}
      onLogin={onLogin}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
