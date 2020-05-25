import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import createRootReducer from './reducers';
import rootSaga from './sagas';

export const history = createBrowserHistory();

const sagaMiddleWare = createSagaMiddleware();

export const store = createStore(
  createRootReducer(history),
  {},
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleWare, logger)),
);

sagaMiddleWare.run(rootSaga);
