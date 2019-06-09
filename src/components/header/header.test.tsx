import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Header} from './header';

configure({adapter: new Adapter()});

const mock = {
  user: {
    avatarUrl: ``,
    id: 1,
    isPro: false,
    name: ``,
  }
};

it(`Header renders correctly`, () => {
  const {user} = mock;
  const tree = shallow(<Header
    user={user}
  />);

  expect(tree).toMatchSnapshot();
});
