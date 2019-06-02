import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import Operation from './operation';
import {
  CHANGE_CITY,
  LOAD_OFFERS,
} from '../actions/action-types';

const mock = {
  rawOffer: {
    "bedrooms": 1,
    "city": {
      name: `Brussels`,
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13,
      },
    },
    "description": `Description`,
    "goods": [`Washer`, `Towels`],
    "host": {
      "avatar_url": `img/avatar-angelina.jpg`,
      "id": 25,
      "is_pro": true,
      "name": `Name`,
    },
    "id": 1,
    "images": [`https://es31-server.appspot.com/six-cities/static/hotel/19.jpg`],
    "is_favorite": true,
    "is_premium": false,
    "location": {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13,
    },
    "max_adults": 3,
    "preview_image": `https://es31-server.appspot.com/six-cities/static/hotel/4.jpg`,
    "price": 117,
    "rating": 3.4,
    "title": `The house among olive`,
    "type": `room`,
  },
  adaptedOffer: {
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

it(`Should make a correct API call to /hotels`, () => {
  const {
    rawOffer,
    adaptedOffer,
  } = mock;

  const dispatch = jest.fn();
  const _getState = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const offersLoader = Operation.loadOffers();
  const SUCCESS_STATUS = 200;
  const OFFERS_URL = `/hotels`;
  const data = [rawOffer];

  apiMock
    .onGet(OFFERS_URL)
    .reply(SUCCESS_STATUS, data);

  return offersLoader(dispatch, _getState, api)
    .then(() => {
      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: CHANGE_CITY,
        payload: [adaptedOffer][0].city,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: LOAD_OFFERS,
        payload: [adaptedOffer],
        isLoading: false,
      });
    });
});
