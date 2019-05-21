import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.jsx';

Enzyme.configure({adapter: new Adapter()});

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
    coordinates: [52.3909553943508, 4.85309666406198],
  },
};

describe(`Check click events`, () => {
  it(`Click on place card title correctly works`, () => {
    const {offer} = mock;
    const titleClickHandler = jest.fn();
    const imageClickHandler = jest.fn();
    const app = shallow(<PlaceCard
      offer={offer}
      onTitleClick={titleClickHandler}
      onImageClick={imageClickHandler}
    />);

    const placeCardTitle = app.find(`.place-card__name a`);
    const clickEvent = new Event(`click`);
    placeCardTitle.simulate(`click`, clickEvent);
    expect(titleClickHandler).toHaveBeenCalledTimes(1);
  });

  it(`Active card's id correctly passes to callback on image click`, () => {
    const {offer} = mock;
    const titleClickHandler = jest.fn();
    const imageClickHandler = jest.fn();
    const app = shallow(<PlaceCard
      offer={offer}
      onTitleClick={titleClickHandler}
      onImageClick={imageClickHandler}
    />);

    const placeCardImage = app.find(`.place-card__image-wrapper a`);
    const clickEvent = new Event(`click`);
    placeCardImage.simulate(`click`, clickEvent);
    expect(imageClickHandler).toHaveBeenCalledTimes(1);
    expect(imageClickHandler).toHaveBeenCalledWith(offer.id);
  });
});
