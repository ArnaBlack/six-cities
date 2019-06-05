import ActionCreator from '../action-creator/action-creator';
import {adaptUserData} from '../util';

const STATUS_OK = 200;

export default {
  checkAuth: () => (dispatch, _getState, api) => api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreator.requireAuthorization(response.status === STATUS_OK));
    }),
  login: ({email, password}) => (dispatch, _getState, api) => api.post(`/login`, {
    email,
    password,
  })
    .then((response) => {
      const user = adaptUserData(response.data);
      dispatch(ActionCreator.getUser(user));
      dispatch(ActionCreator.requireAuthorization(false));
    }),
};
