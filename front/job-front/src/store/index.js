import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import rootSaga from "./sagas";

import LoginReducer from "./reducer/loginReducer";

import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware();

// 객체의 형태를 정의하기 위해 ES6의 객체리터럴 단축문법을 사용
const rootReducer = combineReducers({
  login: LoginReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
