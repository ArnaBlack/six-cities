import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Bookmark} from './bookmark';

configure({adapter: new Adapter()});

const mock = {
  id: 1,
  isFavorite: false,
  className: ``,
  width: 18,
  height: 19,
};

it(`Favorite state and id correctly pass to callback on click`, () => {
  const {
    id,
    isFavorite,
    className,
    width,
    height,
  } = mock;
  const onClick = jest.fn();
  const updateFavorites = jest.fn();
  const wrapper = shallow(<Bookmark
    id={id}
    isFavorite={isFavorite}
    className={className}
    width={width}
    height={height}
    onClick={onClick}
    updateFavorites={updateFavorites}
  />);

  const button = wrapper.find(`button`);
  const clickEvent = new Event(`click`);
  const favoriteStatus = Number(!isFavorite);

  button.simulate(`click`, clickEvent);
  expect(updateFavorites).toHaveBeenCalledTimes(1);
  expect(updateFavorites).toHaveBeenCalledWith({isFavorite: favoriteStatus, id});
});
