import {
  LOAD_REVIEWS,
  SEND_REVIEW,
  SEND_REVIEW_SUCCESS,
  SEND_REVIEW_ERROR,
} from '../action-types';
import ActionCreator from './action-creator';

const mock = {
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

it(`Action creator for getting reviews returns correct action`, () => {
  const {reviews} = mock;
  const expected = {
    type: LOAD_REVIEWS,
    payload: reviews,
  };

  expect(ActionCreator.loadReviews(reviews)).toEqual(expected);
});

it(`Action creator for sending review returns correct action`, () => {
  const expected = {
    type: SEND_REVIEW,
  };

  expect(ActionCreator.sendReview()).toEqual(expected);
});

it(`Action creator for success sending review returns correct action`, () => {
  const expected = {
    type: SEND_REVIEW_SUCCESS,
  };

  expect(ActionCreator.sendReviewSuccess()).toEqual(expected);
});

it(`Action creator for error sending review returns correct action`, () => {
  const error = `error`;
  const expected = {
    type: SEND_REVIEW_ERROR,
    payload: error,
  };

  expect(ActionCreator.sendReviewError(error)).toEqual(expected);
});
