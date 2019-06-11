import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Footer from './footer';

configure({adapter: new Adapter()});

it(`Footer renders correctly`, () => {
  const tree = shallow(<Footer />);

  expect(tree).toMatchSnapshot();
});
