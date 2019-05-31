import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import withTransformProps from './with-transform-props.jsx';

Enzyme.configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const transformFunc = (oldProps) => ({
  newProp: oldProps.oldProp,
});
const MockComponentWrapped = withTransformProps(transformFunc)(MockComponent);

it(`Should transform props`, () => {
  const oldPropValue = `bar`;
  const wrapper = shallow(<MockComponentWrapped
    oldProp={oldPropValue}
  />);

  const expectedOldPropValue = undefined;
  const expectedNewPropValue = oldPropValue;

  expect(wrapper.props().oldProp).toEqual(expectedOldPropValue);
  expect(wrapper.props().newProp).toEqual(expectedNewPropValue);
});
