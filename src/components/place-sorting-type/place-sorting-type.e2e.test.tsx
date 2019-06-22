import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import PlaceSortingType from './place-sorting-type';
import {SortingType} from '../../constants';

configure({adapter: new Adapter()});

const mock = {
  type: `TOP_RATED`,
  isActive: false,
};

it(`Should pass correct sorting type to callback on click`, () => {
  const {
    type,
    isActive,
  } = mock;
  const onSelectType = jest.fn();
  const placeSortingType = shallow(<PlaceSortingType
    type={type}
    isActive={isActive}
    onSelectType={onSelectType}
  />);

  const placeSortingTypeItem = placeSortingType.find(`li`);
  const clickEvent = new Event(`click`);

  placeSortingTypeItem.simulate(`click`, clickEvent);
  expect(onSelectType).toHaveBeenCalledWith(type);
});
