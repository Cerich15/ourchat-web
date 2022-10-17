import {AxiosRequestConfig} from "axios";

type Resolve = {
  (store: object): (config: AxiosRequestConfig) => AxiosRequestConfig;
};

type Reject = {
  (store: object): (response: object) => void;
};

export type {Resolve, Reject};
