import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCard from './place-card.tsx';

Enzyme.configure({adapter: new Adapter()});

const mock = {
  offer: {
    bedrooms: 1,
    city: {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    description: `Description`,
    goods: [`Washer`, `Towels`],
    host: {
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 25,
      isPro: true,
      name: `Name`,
    },
    id: 1,
    images: [`https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`],
    isFavorite: true,
    isPremium: false,
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
    maxAdults: 3,
    previewImage: `https://es31-server.appspot.com/six-cities/static/hotel/4.jpg`,
    price: 117,
    rating: 3.4,
    title: `The house among olive`,
    type: `room`,
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

  it(`Active offer correctly passes to callback on image click`, () => {
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
    expect(imageClickHandler).toHaveBeenCalledWith(offer);
  });
});
