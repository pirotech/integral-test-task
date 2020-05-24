import axios from 'axios';
import * as Promise from 'bluebird';
import instance from './index';
const CancelToken = axios.CancelToken;

const usersApi = {
  login: (username, password) => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          data: { token: '12345' }
        });
      }, 1000);
    });
    return [promise, promise.cancel];
  },
  getPosts: () => {
    let cancel;
    const cancelToken = new CancelToken(c => (cancel = c));
    const promise = instance.get('/posts', { cancelToken });
    return [promise, cancel];
  }
};

export default usersApi;
