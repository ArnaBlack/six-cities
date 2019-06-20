import axios from 'axios';

const BASE_URL = `https://es31-server.appspot.com/six-cities`;
const TIMEOUT = 5000;

export const createAPI = (failCallback) => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOUT,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response && err.response.status === 403) {
      failCallback();
    }
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
