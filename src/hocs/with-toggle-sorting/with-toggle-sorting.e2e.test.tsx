import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withToggleSorting from './with-toggle-sorting';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withToggleSorting(MockComponent);

it(`Should save active item to state`, () => {
  const wrapper = shallow(<MockComponentWrapped />);

  wrapper.props().onToggleSorting();
  expect(wrapper.state().isOpened).toEqual(true);

  wrapper.props().onToggleSorting();
  expect(wrapper.state().isOpened).toEqual(false);
});
