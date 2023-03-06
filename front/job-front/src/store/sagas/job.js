import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import { getJobRequest } from "api";

function* getJob(action) {
  console.log(action.payload.accessToken + "!!!!!");
  const res = yield call(getJobRequest, action.payload);
  console.log(res);
}

export function* doJob() {
  yield takeLatest("TRY_GETJOB", getJob);
}
