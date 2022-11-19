import {History} from "history";
import {EnhancedStore} from "@reduxjs/toolkit";
import {Action as ReduxAction, Dispatch as ReduxDispatch} from "redux";

import {AuthState} from "./auth/types";

type MapProps = {
  store?: EnhancedStore;
  auth?: AuthState;
  router?: History;
  history?: History;
};

type MapState = {
  (state: MapProps): MapProps;
};

type MapDispatch = {
  (dispatch: ReduxDispatch): {
    dispatch?: (action: ReduxAction) => ReduxAction;
  };
};

type Reducer<State, Action> = {
  (state: State, action: Action): State;
};

type ActionProps<State> = {
  payload?: State;
  path?: string;
  params?: any;
};

type Action<Type, State> = {
  type: Type;
} & ActionProps<State>;

type State<Entity, AddProps = {}> = {
  data?: Entity;
  page?: number;
  size?: number;
  total_data?: number;
  error?: string;
  loading?: boolean;
} & AddProps;

type Dispatch<Type, State> = {
  (payload: ActionProps<State>): Action<Type, State>;
};

export type {Reducer, Action, State, Dispatch, MapState, MapDispatch, MapProps};
