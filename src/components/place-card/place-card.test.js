import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';
import offersMock from '../../mocks/offers';

it(`PlaceCard correctly renders`, () => {
  const [offer] = offersMock;
  const tree = renderer
    .create(<PlaceCard
      mark={offer.mark}
      imageSrc={offer.imageSrc}
      price={offer.price}
      inBookmarks={offer.inBookmarks}
      rating={offer.rating}
      name={offer.name}
      type={offer.type}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
