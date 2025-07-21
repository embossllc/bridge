import axios from 'axios';

// TODO Should be fetched form the env file
const baseURL = 'https://buildjoy.co/old/valulife/api/';

export const instance = axios.create({
  baseURL,
  timeout: 100000,
});

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
);

export default instance;
