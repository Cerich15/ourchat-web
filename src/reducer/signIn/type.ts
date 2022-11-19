import {Action, Reducer} from "ducks/types";
import {SignIn} from "ducks/auth/types";
import {ActionType} from "reducer/type";

type SignInAction = Action<ActionType, SignIn>;

type SignInReducer = Reducer<SignIn, SignInAction>;

export type {SignIn, SignInAction, SignInReducer};
