import React from 'react';
import renderer from 'react-test-renderer';
import PlaceCard from './place-card.jsx';

const mock = {
  offer: {
    id: 1,
    mark: `Premium`,
    imageSrc: `img/apartment-01.jpg`,
    price: 120,
    inBookmarks: true,
    rating: 4,
    title: `Beautiful luxurious apartment at great location`,
    type: `Apartment`,
  },
};

it(`PlaceCard correctly renders`, () => {
  const {offer} = mock;
  const clickHandler = jest.fn();
  const tree = renderer
    .create(<PlaceCard
      offer={offer}
      onTitleClick={clickHandler}
      onImageClick={clickHandler}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
