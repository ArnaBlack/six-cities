import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Sprite from './sprite';

it(`Sprite correctly renders`, () => {
  const tree = renderer
    .create(<Sprite />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
