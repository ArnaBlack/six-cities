import {
  CHANGE_CITY,
} from '../action-types';
import ActionCreators from './action-creator';

it(`Action creator for changing city returns correct action`, () => {
  const city = `Paris`;
  const expected = {
    type: CHANGE_CITY,
    payload: city,
  };

  expect(ActionCreators.changeCity(city)).toEqual(expected);
});
