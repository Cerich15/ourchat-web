import {Action, Dispatch, Reducer, State} from "ducks/types";

type Entity = {
  authenticated?: boolean;
};

type AuthType =
  | "SET-AUTH"
  | "SIGN-IN-AUTH"
  | "SIGN-UP-AUTH"
  | "GOOGLE-AUTH"
  | "FACEBOOK-AUTH";

type AuthState = State<Entity>;

type AuthAction = Action<AuthType, AuthState>;

type AuthDispatch = Dispatch<AuthType, AuthState>;

type AuthReducer = Reducer<AuthState, AuthAction>;

const SET_AUTH: AuthType = "SET-AUTH";
const SIGNIN_AUTH: AuthType = "SIGN-IN-AUTH";
const SIGNUP_AUTH: AuthType = "SIGN-UP-AUTH";
const GOOGLE_AUTH: AuthType = "GOOGLE-AUTH";
const FACEBOOK_AUTH: AuthType = "FACEBOOK-AUTH";

export type {
  Entity,
  AuthType,
  AuthState,
  AuthAction,
  AuthDispatch,
  AuthReducer,
};
export {SET_AUTH, SIGNIN_AUTH, SIGNUP_AUTH, GOOGLE_AUTH, FACEBOOK_AUTH};
