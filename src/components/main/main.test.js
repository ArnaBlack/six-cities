import React from 'react';
import renderer from 'react-test-renderer';
import Main from './main.jsx';
import offersMock from '../../mocks/offers';

it(`Main correctly renders`, () => {
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<Main
      offers={offersMock}
      onOfferTitleClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
