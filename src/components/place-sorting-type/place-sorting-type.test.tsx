import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PlaceSortingType from './place-sorting-type';

const mock = {
  type: ``,
  isActive: true,
};

it(`PlaceSortingType correctly renders`, () => {
  const {
    type,
    isActive,
  } = mock;
  const onSelectType = jest.fn();
  const tree = renderer
    .create(<PlaceSortingType
    type={type}
    isActive={isActive}
    onSelectType={onSelectType}
  />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
