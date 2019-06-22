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
  disabled: true,
  formData: {
    email: `test1234@gmail.com`,
    password: `1234`,
  },
};

it(`SignIn correctly renders`, () => {
  const {
    currentCity,
    disabled,
    formData,
  } = mock;
  const onLogin = jest.fn();
  const onSubmit = jest.fn();
  const onChange = jest.fn();
  const tree = shallow(<SignInPage
    currentCity={currentCity}
    disabled={disabled}
    formData={formData}
    onLogin={onLogin}
    onSubmit={onSubmit}
    onChange={onChange}
  />);

  expect(tree).toMatchSnapshot();
});
