import {Event, SetState} from "types";

type ActionEvent = "sign-in" | "sign-up" | "google" | "facebook";
type Key = "";
type Value = "";

type LoginEvent = Event<ActionEvent>;

type LoginSetState = SetState<Key, Value>;

export type {LoginEvent, LoginSetState};
