import * as React from 'react';
import {
  configure,
  mount,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import PlaceSorting from './place-sorting';
import {SortingType} from '../../constants';

configure({adapter: new Adapter()});

const mock = {
  activeItem: `TOP_RATED`,
  isOpened: true,
};

it(`Should pass correct sorting type to callback on click`, () => {
  const {
    activeItem,
    isOpened,
  } = mock;
  const onSelectItem = jest.fn();
  const onToggleSorting = jest.fn();
  const onChangeType = jest.fn();
  const placeSorting = mount(<PlaceSorting
    activeItem={activeItem}
    isOpened={isOpened}
    onChangeType={onChangeType}
    onSelectItem={onSelectItem}
    onToggleSorting={onToggleSorting}
  />);

  const index = 0;
  const sortingType = Object.keys(SortingType)[index];
  const placeSortingItem = placeSorting.find(`li`).at(index);
  const clickEvent = new Event(`click`);

  placeSortingItem.simulate(`click`, clickEvent);
  expect(onChangeType).toHaveBeenCalledWith(sortingType);
  expect(onSelectItem).toHaveBeenCalledWith(sortingType);
  expect(onToggleSorting).toHaveBeenCalled();
});
