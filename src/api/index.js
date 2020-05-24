import axios from 'axios';
import usersApi from './usersApi';

// create instance
const instance = axios.create({
  baseURL: process.env.API,
  withCredentials: true
});
// interceptors
instance.interceptors.response.use(undefined, error => {
  return Promise.reject(error);
});

export { usersApi };

export default instance;
