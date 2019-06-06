import ActionCreator from '../action-creator/action-creator';
import {adaptUserData} from '../util';


export default {
  checkAuth: () => (dispatch, _getState, api) => api.get(`/login`)
    .then((response) => {
      if (!response) {
        return;
      }

      const user = adaptUserData(response.data);
      dispatch(ActionCreator.requireAuthorization(false));
      dispatch(ActionCreator.getUser(user));
    })
    .catch(() => dispatch(ActionCreator.requireAuthorization(true))),
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
