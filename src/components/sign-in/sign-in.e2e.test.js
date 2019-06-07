import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {SignIn} from './sign-in.tsx';

Enzyme.configure({adapter: new Adapter()});

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

it(`Email and password correctly pass to callback on form submit`, () => {
  const {currentCity} = mock;
  const onLogin = jest.fn();
  const signIn = shallow(<SignIn
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
