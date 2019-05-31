import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withActiveItem from './with-actvie-item.jsx';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const MockComponentWrapped = withActiveItem(MockComponent);

it(`Should change active item`, () => {
  const onSelectItem = jest.fn();
  const wrapper = shallow(<MockComponentWrapped
    activeItem={-1}
    onSelectItem={onSelectItem}
  />);

  const selectedItemId = 123;

  wrapper.props().onSelectItem(selectedItemId);
  expect(wrapper.state().activeItem).toEqual(selectedItemId);
});
