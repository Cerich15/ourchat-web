import {AuthDispatch} from "./types";

const setAuth: AuthDispatch = ({payload}) => ({
  type: "SET-AUTH",
  payload,
});

const signInAuth: AuthDispatch = () => ({
  type: "SIGN-IN-AUTH",
});

const signUpAuth: AuthDispatch = ({payload}) => ({
  type: "SIGN-UP-AUTH",
  payload,
});

export {setAuth, signInAuth, signUpAuth};
