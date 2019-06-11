import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import withTransformProps from './with-transform-props';

configure({adapter: new Adapter()});

const MockComponent = () => <div />;
const transformFunc = (oldProps) => ({
  newProp: oldProps.oldProp,
});
const MockComponentWrapped = withTransformProps(transformFunc)(MockComponent);

it(`Should transform props`, () => {
  const oldPropValue = `bar`;
  const wrapper = shallow(<MockComponentWrapped oldProp={oldPropValue} />);
  const expectedOldPropValue = undefined;
  const expectedNewPropValue = oldPropValue;

  expect(wrapper.props().oldProp).toEqual(expectedOldPropValue);
  expect(wrapper.props().newProp).toEqual(expectedNewPropValue);
});
