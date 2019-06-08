import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Favorites} from './favorites';

it(`Favorites renders correctly`, () => {
  const loadFavorites = jest.fn();
  const tree = renderer
    .create(<Favorites
      loadFavorites={loadFavorites}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
