import {
  REQUIRED_AUTHORIZATION,
} from '../action-types';

export default {
  requireAuthorization(status) {
    return {
      type: REQUIRED_AUTHORIZATION,
      payload: status,
    };
  }
};
