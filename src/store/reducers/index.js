import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const createRootReducer = history => {
  return combineReducers({
    router: connectRouter(history),
    auth: authReducer
  });
};

export default createRootReducer;
