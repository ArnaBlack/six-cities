import {
  CHANGE_CITY,
} from '../action-types';

export default {
  changeCity(city) {
    return {
      type: CHANGE_CITY,
      payload: city,
    };
  },
};
