import {
  CHANGE_CITY,
  GET_OFFERS,
} from '../actions/action-types';
import reducer from './reducer';

it(`Should change city`, () => {
  const state = {
    city: `Amsterdam`,
    offers: [],
  };

  const action = {
    type: CHANGE_CITY,
    city: `Paris`,
  };

  const expected = {
    city: `Paris`,
    offers: [],
  };

  expect(reducer(state, action)).toEqual(expected);
});

it(`Should get offers`, () => {
  const offers = [
    {
      id: 1,
      city: `Amsterdam`,
      mark: `Premium`,
      imageSrc: `img/apartment-01.jpg`,
      price: 120,
      inBookmarks: true,
      rating: 4,
      title: `Beautiful luxurious apartment at great location`,
      type: `Apartment`,
      coordinates: [52.3909553943508, 4.85309666406198],
    },
    {
      id: 5,
      city: `Paris`,
      mark: `Premium`,
      imageSrc: `img/apartment-01.jpg`,
      price: 100,
      inBookmarks: false,
      rating: 3.1,
      title: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      coordinates: [48.85341, 2.3488],
    },
    {
      id: 7,
      city: `Brussels`,
      imageSrc: `img/apartment-01.jpg`,
      price: 100,
      inBookmarks: false,
      rating: 3.1,
      title: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      coordinates: [50.8505, 4.3488],
    },
    {
      id: 8,
      city: `Hamburg`,
      imageSrc: `img/apartment-01.jpg`,
      price: 100,
      inBookmarks: false,
      rating: 3.1,
      title: `Nice, cozy, warm big bed apartment`,
      type: `Apartment`,
      coordinates: [53.551086, 9.993682],
    },
  ];

  const state = {
    city: `Amsterdam`,
    offers: [],
  };

  const action = {
    type: GET_OFFERS,
    offers,
  };

  const expected = {
    city: `Amsterdam`,
    offers,
  };

  expect(reducer(state, action)).toEqual(expected);
});
