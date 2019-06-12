import * as React from 'react';
import {
  configure,
  shallow,
} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {FavoritesPage} from './favorites-page';

configure({adapter: new Adapter()});

it(`Favorites renders correctly`, () => {
  const loadFavorites = jest.fn();
  const tree = shallow(<FavoritesPage loadFavorites={loadFavorites} />);

  expect(tree).toMatchSnapshot();
});
