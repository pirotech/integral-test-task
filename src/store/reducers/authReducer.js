import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actionTypes';

const token = localStorage.getItem('token') || '';
const initialState = {
  token
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED: {
      return state;
    }
    case LOGIN_SUCCESS: {
      const { token } = action.payload;
      localStorage.setItem('token', token);
      return {
        ...state,
        token
      };
    }
    case LOGIN_FAILURE: {
      return state;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
