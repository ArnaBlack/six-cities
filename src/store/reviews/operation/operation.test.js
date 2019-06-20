import MockAdapter from 'axios-mock-adapter';

import {createAPI} from '../../../api';
import Operation from './operation';
import {
  LOAD_REVIEWS,
  SEND_REVIEW,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR,
} from '../action-types';
import {adaptReviewData} from '../util';

const mock = {
  id: 0,
  reviews: [
    {
      id: 1,
      user: {
        'id': 0,
        'is_pro': true,
        'name': ``,
        'avatar_url': ``
      },
      rating: 4,
      comment: ``,
      date: ``
    },
  ],
};

it(`Should make a correct API call to /comments`, () => {
  const {
    id,
    reviews,
  } = mock;
  const adaptedReviews = reviews.map(adaptReviewData);
  const SUCCESS_STATUS = 200;
  const FAVORITES_URL = `/comments`;
  const dispatch = jest.fn();
  const _getState = jest.fn();
  const api = createAPI(() => jest.fn());
  const apiMock = new MockAdapter(api);
  const loadReviews = Operation.loadReviews(id);

  apiMock
    .onGet(`${FAVORITES_URL}/${id}`)
    .reply(SUCCESS_STATUS, reviews);

  return loadReviews(dispatch, _getState, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledWith({
        type: LOAD_REVIEWS,
        payload: adaptedReviews,
      });
    });
});

it(`Should send review by post call to /comments`, () => {
  const {
    id,
    reviews,
  } = mock;
  const adaptedReviews = reviews.map(adaptReviewData);
  const SUCCESS_STATUS = 200;
  const FAVORITES_URL = `/comments`;
  const dispatch = jest.fn();
  const _getState = jest.fn();
  const api = createAPI(() => jest.fn());
  const apiMock = new MockAdapter(api);
  const sendReview = Operation.sendReview({id, rating: 3, comment: `test`});

  apiMock
    .onPost(`${FAVORITES_URL}/${id}`)
    .reply(SUCCESS_STATUS, reviews);

  return sendReview(dispatch, _getState, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(3);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: SEND_REVIEW,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: SEND_REVIEW_SUCCESS,
      });

      expect(dispatch).toHaveBeenNthCalledWith(3, {
        type: LOAD_REVIEWS,
        payload: adaptedReviews,
      });
    });
});

it(`Should send review with error by post call to /comments`, () => {
  const {id} = mock;
  const STATUS = 400;
  const error = `Error!`;
  const FAVORITES_URL = `/comments`;
  const dispatch = jest.fn();
  const _getState = jest.fn();
  const api = createAPI(() => jest.fn());
  const apiMock = new MockAdapter(api);
  const sendReview = Operation.sendReview({id, rating: 3, comment: `test`});

  apiMock
    .onPost(`${FAVORITES_URL}/${id}`)
    .reply(STATUS, {error});

  return sendReview(dispatch, _getState, api)
    .then(() => {
      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: SEND_REVIEW,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: SEND_REVIEW_ERROR,
        payload: error,
      });
    });
});
