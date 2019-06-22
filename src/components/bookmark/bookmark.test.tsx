import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Bookmark} from './bookmark';

const mock = {
  id: 1,
  isFavorite: false,
  className: ``,
  width: 18,
  height: 19,
};

it(`Bookmark renders correctly`, () => {
  const {
    id,
    isFavorite,
    className,
    width,
    height,
  } = mock;
  const onClick = jest.fn();
  const updateFavorites = jest.fn();
  const tree = renderer
    .create(<Bookmark
      id={id}
      isFavorite={isFavorite}
      className={className}
      width={width}
      height={height}
      onClick={onClick}
      updateFavorites={updateFavorites}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
