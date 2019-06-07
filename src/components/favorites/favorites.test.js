import React from 'react';
import renderer from 'react-test-renderer';
import {Favorites} from './favorites.tsx';

it(`Favorites renders correctly`, () => {
  const loadFavorites = jest.fn();
  const tree = renderer
    .create(<Favorites
      loadFavorites={loadFavorites}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
