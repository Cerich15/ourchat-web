import {all} from "redux-saga/effects";

import {authSaga} from "./auth";

function* saga() {
  return all([authSaga()]);
}

export default saga;
