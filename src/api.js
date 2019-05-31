import axios from 'axios';

const BASE_URL = `https://es31-server.appspot.com/six-cities`
const TIMEOUT = 5000;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
  withCredentials: true,
});

export default () => {
  return api;
};
