import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { loginRequest, joinRequest } from "api";

function* login(action) {
  console.log("로그인 시도");
  try {
    const res = yield call(loginRequest, action.payload);
  } catch (e) {
    console.log(e);
  }
}

function* join(action) {
  try {
    const res = yield call(joinRequest, action.payload);
    yield put({ type: "login/SET_USER", payload: res });
  } catch (e) {
    console.log(e);
  }
}

export function* doLogin() {
  yield takeLatest("TRY_LOGIN", login);
}

export function* doJoin() {
  yield takeLatest("TRY_JOIN", join);
}
