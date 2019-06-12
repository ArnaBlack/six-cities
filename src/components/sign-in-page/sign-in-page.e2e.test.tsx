import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {SignInPage} from './sign-in-page';

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

it(`Should prevent default behaviour of form on submit`, () => {
  const {currentCity} = mock;
  const onLogin = jest.fn();
  const signIn = shallow(<SignInPage
    currentCity={currentCity}
    onLogin={onLogin}
  />);

  const preventDefault = jest.fn();
  const form = signIn.find(`form`);

  form.simulate(`submit`, {
    preventDefault,
  });

  expect(preventDefault).toHaveBeenCalledTimes(1);
});
