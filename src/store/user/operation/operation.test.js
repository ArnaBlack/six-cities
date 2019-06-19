import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../../api';
import {
  REQUIRED_AUTHORIZATION,
  GET_USER,
} from '../action-types';
import Operation from './operation';
import {adaptUserData} from '../util';

const mock = {
  user: {
    'id': 1,
    'email': `username@gmail.com`,
    'name': ``,
    'avatar_url': ``,
    'is_pro': false,
  },
  email: `username@gmail.com`,
  password: 1234,
};

it(`Should make a correct GET request to /login`, () => {
  const {
    user,
  } = mock;

  const SUCCESS_STATUS = 200;
  const LOGIN_URL = `/login`;
  const dispatch = jest.fn();
  const _getState = jest.fn();
  const api = createAPI(() => jest.fn());
  const apiMock = new MockAdapter(api);
  const checkingAuth = Operation.checkAuth();

  apiMock
    .onGet(LOGIN_URL)
    .reply(SUCCESS_STATUS, user);

  return checkingAuth(dispatch, _getState, api)
    .then(() => {
      const adaptedUserData = adaptUserData(user);

      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: REQUIRED_AUTHORIZATION,
        payload: false,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: GET_USER,
        payload: adaptedUserData,
      });
    });
});

it(`Should make a correct POST request to /login`, () => {
  const {
    user,
    email,
    password,
  } = mock;

  const SUCCESS_STATUS = 200;
  const LOGIN_URL = `/login`;
  const dispatch = jest.fn();
  const _getState = jest.fn();
  const api = createAPI(() => jest.fn());
  const apiMock = new MockAdapter(api);
  const login = Operation.login({email, password});

  apiMock
    .onPost(LOGIN_URL)
    .reply(SUCCESS_STATUS, user);

  return login(dispatch, _getState, api)
    .then(() => {
      const adaptedUserData = adaptUserData(user);

      expect(dispatch).toHaveBeenCalledTimes(2);

      expect(dispatch).toHaveBeenNthCalledWith(1, {
        type: GET_USER,
        payload: adaptedUserData,
      });

      expect(dispatch).toHaveBeenNthCalledWith(2, {
        type: REQUIRED_AUTHORIZATION,
        payload: false,
      });
    });
});
