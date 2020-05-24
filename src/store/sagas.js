import { takeEvery, put } from 'redux-saga/effects';
import { usersService } from '../services';
import { LOGIN_REQUESTED, LOGIN_SUCCESS, LOGIN_FAILURE } from './actionTypes';

function* loginRequested({ payload }) {
  try {
    const { username, password } = payload;
    const [promise] = usersService.login(username, password);
    const { token } = yield promise;
    yield put({
      type: LOGIN_SUCCESS,
      payload: {
        token
      }
    });
  } catch (e) {
    yield put({
      type: LOGIN_FAILURE
    });
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_REQUESTED, loginRequested);
}

export default authSaga;
