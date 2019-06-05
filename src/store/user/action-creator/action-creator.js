import {
  REQUIRED_AUTHORIZATION,
  GET_USER,
} from '../action-types';

export default {
  requireAuthorization: (status) => ({
    type: REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  getUser: (user) => ({
    type: GET_USER,
    payload: user,
  }),
};
