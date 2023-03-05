import { call, all, put, takeEvery, takeLatest, fork } from "redux-saga/effects";
import { doLogin, doJoin } from "store/sagas/user";
import { doJob } from "store/sagas/job";
export default function* rootSaga() {
  yield all([fork(doLogin), fork(doJoin), fork(doJob)]);
}
