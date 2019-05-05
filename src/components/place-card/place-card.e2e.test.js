import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';
import offersMock from '../../mocks/offers';

Enzyme.configure({adapter: new Adapter()});

it(`Click on place card title correctly works`, () => {
  const [offer] = offersMock;
  const clickHandler = jest.fn();
  const app = shallow(<PlaceCard
    mark={offer.mark}
    imageSrc={offer.imageSrc}
    price={offer.price}
    inBookmarks={offer.inBookmarks}
    rating={offer.rating}
    name={offer.name}
    type={offer.type}
    onTitleClick={clickHandler}
  />);

  const placeCardTitle = app.find(`.place-card__name a`);
  placeCardTitle.simulate(`click`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
