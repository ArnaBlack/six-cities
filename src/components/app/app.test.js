import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import offersMock from '../../mocks/offers';

it(`App correctly renders`, () => {
  const tree = renderer
    .create(<App
      offers={offersMock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
