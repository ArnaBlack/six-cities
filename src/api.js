import axios from 'axios';

const BASE_URL = `https://es31-server.appspot.com/six-cities`;
const TIMEOUT = 5000;
const FORBIDDEN_STATUS = 403;

export const createAPI = (onLoginFail) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.status === FORBIDDEN_STATUS) {
      onLoginFail();
      return;
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
