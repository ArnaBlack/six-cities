import {CHANGE_CITY} from '../action-types';
import ActionCreator from './action-creator';

it(`Action creator for changing city returns correct action`, () => {
  const city = `Paris`;
  const expected = {
    type: CHANGE_CITY,
    payload: city,
  };

  expect(ActionCreator.changeCity(city)).toEqual(expected);
});
