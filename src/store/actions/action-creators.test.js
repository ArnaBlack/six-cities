import {
  CHANGE_CITY,
  GET_OFFERS,
} from './action-types';
import ActionCreators from './action-creators';

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing city returns correct action`, () => {
    const city = `Paris`;
    const expected = {
      type: CHANGE_CITY,
      city,
    };

    expect(ActionCreators.changeCity(city)).toEqual(expected);
  });

  it(`Action creator for getting offers returns correct action`, () => {
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
        id: 2,
        city: `Amsterdam`,
        imageSrc: `img/room.jpg`,
        price: 80,
        inBookmarks: false,
        rating: 4.5,
        title: `Wood and stone place`,
        type: `Private room`,
        coordinates: [52.369553943508, 4.85309666406198],
      },
      {
        id: 3,
        city: `Amsterdam`,
        imageSrc: `img/apartment-02.jpg`,
        price: 132,
        inBookmarks: true,
        rating: 2.3,
        title: `Canal View Prinsengracht`,
        type: `Apartment`,
        coordinates: [52.3909553943508, 4.929309666406198],
      },
      {
        id: 4,
        city: `Amsterdam`,
        mark: `Premium`,
        imageSrc: `img/apartment-03.jpg`,
        price: 180,
        inBookmarks: false,
        rating: 3.1,
        title: `Nice, cozy, warm big bed apartment`,
        type: `Apartment`,
        coordinates: [52.3809553943508, 4.939309666406198],
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
        id: 6,
        city: `Cologne`,
        imageSrc: `img/apartment-01.jpg`,
        price: 100,
        inBookmarks: false,
        rating: 3.1,
        title: `Nice, cozy, warm big bed apartment`,
        type: `Apartment`,
        coordinates: [50.941357, 6.958307],
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
      {
        id: 9,
        city: `Dusseldorf`,
        imageSrc: `img/apartment-01.jpg`,
        price: 100,
        inBookmarks: false,
        rating: 3.1,
        title: `Nice, cozy, warm big bed apartment`,
        type: `Apartment`,
        coordinates: [51.217941, 6.761680],
      },
    ];
    const expected = {
      type: GET_OFFERS,
      offers,
    };

    expect(ActionCreators.getOffers()).toEqual(expected);
  });
});
