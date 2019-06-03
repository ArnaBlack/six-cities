import {
  CHANGE_CITY,
} from '../action-types';
import reducer from './reducer';

it(`Should change city`, () => {
  const state = {
    city: `Amsterdam`,
    offers: [],
  };

  const action = {
    type: CHANGE_CITY,
    payload: `Paris`,
  };

  const expected = {
    city: `Paris`,
    offers: [],
  };

  expect(reducer(state, action)).toEqual(expected);
});


