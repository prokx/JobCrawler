import { call, all, put, takeEvery, takeLatest, fork } from "redux-saga/effects";
import { doLogin, doJoin } from "store/sagas/user";

export default function* rootSaga() {
  yield all([fork(doLogin), fork(doJoin)]);
}
