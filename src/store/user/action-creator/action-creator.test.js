import {
  REQUIRED_AUTHORIZATION,
  GET_USER,
} from '../action-types';
import ActionCreator from './action-creator';

it(`Action creator for getting authorization status returns correct action`, () => {
  const status = true;
  const expected = {
    type: REQUIRED_AUTHORIZATION,
    payload: status,
  };

  expect(ActionCreator.requireAuthorization(status)).toEqual(expected);
});

it(`Action creator for getting user data returns correct action`, () => {
  const user = {
    id: 1,
    email: `username@gmail.com`,
    name: ``,
    avatarUrl: ``,
    isPro: false,
  };

  const expected = {
    type: GET_USER,
    payload: user,
  };

  expect(ActionCreator.getUser(user)).toEqual(expected);
});
