import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {SignIn} from './sign-in';

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

it(`SignIn correctly renders`, () => {
  const {currentCity} = mock;
  const onLogin = jest.fn();
  const tree = shallow(<SignIn
    currentCity={currentCity}
    onLogin={onLogin}
  />);

  expect(tree).toMatchSnapshot();
});
