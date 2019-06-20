import {
  LOAD_REVIEWS,
  SEND_REVIEW,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR,
} from '../action-types';
import reducer from './reducer';

const mock = {
  reviews: [
    {
      id: 1,
      comment: ``,
      date: ``,
      rating: 1,
    },
  ],
};

it(`Should get reviews`, () => {
  const {reviews} = mock;
  const state = {
    reviews: [],
    isLoading: true,
  };

  const action = {
    type: LOAD_REVIEWS,
    payload: reviews,
  };

  const expected = {
    reviews,
    isLoading: false,
    isSending: false,
    sendingError: null,
  };

  expect(reducer(state, action)).toEqual(expected);
});

it(`Should set sending state`, () => {
  const state = {
    isSending: false,
  };

  const action = {
    type: SEND_REVIEW,
  };

  const expected = {
    isSending: true,
    sendingError: null,
  };

  expect(reducer(state, action)).toEqual(expected);
});

it(`Should set success sending state`, () => {
  const state = {
    isSending: true,
  };

  const action = {
    type: SEND_REVIEW_SUCCESS,
  };

  const expected = {
    isSending: false,
    sendingError: null,
  };

  expect(reducer(state, action)).toEqual(expected);
});

it(`Should set error sending state`, () => {
  const state = {
    isSending: true,
  };

  const action = {
    type: SEND_REVIEW_ERROR,
    payload: `error`,
  };

  const expected = {
    isSending: false,
    sendingError: `error`,
  };

  expect(reducer(state, action)).toEqual(expected);
});
