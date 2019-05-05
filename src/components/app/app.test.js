import React from 'react';
import renderer from 'react-test-renderer';
import App from './app.jsx';
import offersMock from '../../mocks/offers';

it(`App correctly renders`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<App
      offers={offersMock}
      onOfferTitleClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
