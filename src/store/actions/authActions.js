import { LOGIN_REQUESTED } from '../actionTypes';

const authActions = {
  login: (username, password) => ({
    type: LOGIN_REQUESTED,
    payload: {
      username,
      password
    }
  })
};

export default authActions;
