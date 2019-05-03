import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import offersMock from '../../mocks/offers';

it(`Main correctly renders`, () => {
  const tree = renderer
    .create(<Main
      offers={offersMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
