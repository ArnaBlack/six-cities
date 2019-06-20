import MockAdapter from 'axios-mock-adapter';

import {createAPI} from '../../../api';
import Operation from './operation';
import {
  LOAD_FAVORITES,
  UPDATE_FAVORITES,
} from '../action-types';
import {UPDATE_OFFERS} from '../../offers/action-types';
import {adaptOfferData} from '../../offers/util';

const mock = {
  favorite: {
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
};

it(`Should make a correct API call to /favorite`, () => {
  const {favorite} = mock;
  const adaptedFavorite = adaptOfferData(favorite);
  const SUCCESS_STATUS = 200;
  const FAVORITES_URL = `/favorite`;
  const dispatch = jest.fn();
  const _getState = jest.fn();
  const onSuccess = jest.fn();
  const api = createAPI(() => jest.fn());
  const apiMock = new MockAdapter(api);
  const loadFavorites = Operation.loadFavorites(onSuccess);
  const data = [favorite];

  apiMock
    .onGet(FAVORITES_URL)
    .reply(SUCCESS_STATUS, data);

  return loadFavorites(dispatch, _getState, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: LOAD_FAVORITES,
        payload: [adaptedFavorite],
      });
    });
});

it(`Should change favorite state by post call to /favorite`, () => {
  const {favorite} = mock;
  const adaptedFavorite = adaptOfferData(favorite);
  const SUCCESS_STATUS = 200;
  const FAVORITES_URL = `/favorite`;
  const dispatch = jest.fn();
  const _getState = jest.fn();
  const api = createAPI(() => jest.fn());
  const apiMock = new MockAdapter(api);
  const updateFavorites = Operation.updateFavorites({id: adaptedFavorite.id, isFavorite: Number(!adaptedFavorite.isFavorite)});

  apiMock
    .onPost(`${FAVORITES_URL}/${adaptedFavorite.id}/${Number(!adaptedFavorite.isFavorite)}`)
    .reply(SUCCESS_STATUS, favorite);

  return updateFavorites(dispatch, _getState, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: UPDATE_FAVORITES,
        payload: adaptedFavorite,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: UPDATE_OFFERS,
        payload: adaptedFavorite,
      });
    });
});
