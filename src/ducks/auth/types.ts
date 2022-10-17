import {Action, Dispatch, Reducer, State} from "ducks/types";

type AuthType =
  | "SET-AUTH"
  | "SIGN-IN-AUTH"
  | "SIGN-UP-AUTH"
  | "GOOGLE-AUTH"
  | "FACEBOOK-AUTH";

type Auth = {
  authenticated?: boolean;
};
type SignIn = {
  username?: string;
  password?: string;
};
type SignUp = {
  firstname?: string;
  lastname?: string;
  headline?: string;
  email?: string;
  mobile_no?: string;
} & SignIn;

type AuthState = State<Auth & SignIn & SignUp>;

type AuthAction = Action<AuthType, AuthState>;

type AuthDispatch = Dispatch<AuthType, AuthState>;

type AuthReducer = Reducer<AuthState, AuthAction>;

const SET_AUTH: AuthType = "SET-AUTH";
const SIGNIN_AUTH: AuthType = "SIGN-IN-AUTH";
const SIGNUP_AUTH: AuthType = "SIGN-UP-AUTH";
const GOOGLE_AUTH: AuthType = "GOOGLE-AUTH";
const FACEBOOK_AUTH: AuthType = "FACEBOOK-AUTH";

export type {
  Auth,
  SignIn,
  SignUp,
  AuthType,
  AuthState,
  AuthAction,
  AuthDispatch,
  AuthReducer,
};
export {SET_AUTH, SIGNIN_AUTH, SIGNUP_AUTH, GOOGLE_AUTH, FACEBOOK_AUTH};
