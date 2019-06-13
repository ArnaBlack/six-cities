import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PlaceSorting from './place-sorting';

const mock = {
  isOpened: true,
  activeItem: ``,
};

it(`PlaceSorting correctly renders`, () => {
  const {
    isOpened,
    activeItem,
  } = mock;
  const onSelectItem = jest.fn();
  const onToggleSorting = jest.fn();
  const onChangeType = jest.fn();
  const tree = renderer
    .create(<PlaceSorting
      isOpened={isOpened}
      activeItem={activeItem}
      onSelectItem={onSelectItem}
      onToggleSorting={onToggleSorting}
      onChangeType={onChangeType}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
