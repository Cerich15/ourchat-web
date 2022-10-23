import {takeLatest} from "redux-saga/effects";
import {SIGNIN_AUTH} from "../types";

import signIn from "./sign_in";

function* authSaga() {
  yield takeLatest(SIGNIN_AUTH, signIn);
}

export default authSaga;
