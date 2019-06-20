import ActionCreator from '../action-creator/action-creator';
import {adaptUserData} from '../util';
import history from '../../../history';

export default {
  checkAuth: () => (dispatch, _getState, api) => api.get(`/login`)
    .then((response) => {
      const user = adaptUserData(response.data);
      dispatch(ActionCreator.requireAuthorization(false));
      dispatch(ActionCreator.getUser(user));
    })
    .catch(() => {}),
  login: ({email, password}) => (dispatch, _getState, api) => api.post(`/login`, {
    email,
    password,
  })
    .then((response) => {
      const user = adaptUserData(response.data);
      dispatch(ActionCreator.getUser(user));
      dispatch(ActionCreator.requireAuthorization(false));
      history.push(`/`);
    })
    .catch(() => {}),
};
