import {
  REQUIRED_AUTHORIZATION,
} from '../action-types';
import reducer from './reducer';

it(`Should change authorization status`, () => {
  const state = {
    isAuthorizationRequired: false,
  };

  const action = {
    type: REQUIRED_AUTHORIZATION,
    payload: true,
  };

  const expected = {
    isAuthorizationRequired: true,
  };

  expect(reducer(state, action)).toEqual(expected);
});
