import {Event, SetState} from 'constants/types';

type Layout = {
  field: string;
  placeholder: string;
  type: string;
  icon: string;
};

type Key =
  | 'username'
  | 'password'
  | 'sign-in'
  | 'sign-up'
  | 'google'
  | 'facebook';
type Val = string;

type LoginEvent = Event<Key, Val>;
type LoginSetState = SetState<Key, Val>;

export type {Layout, LoginEvent, LoginSetState};
