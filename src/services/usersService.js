import { usersApi } from '../api';

const usersService = {
  login: (username, password) => {
    const [apiPromise, apiCancel] = usersApi.login(username, password);

    const promise = (async () => {
      const response = await apiPromise;
      return response.data;
    })();

    const cancel = () => {
      apiCancel && apiCancel();
    };

    return [promise, cancel];
  },

  getPosts: () => {
    // api calls
    const [apiPromise, apiCancel] = usersApi.getPosts();

    // collect promise
    const promise = (async () => {
      const posts = await apiPromise;
      // ... some handling ...
      return posts.data;
    })();

    // collect cancel function
    const cancel = () => {
      apiCancel && apiCancel();
    };

    return [promise, cancel];
  }
};

export default usersService;
