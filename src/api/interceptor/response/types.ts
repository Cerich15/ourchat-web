import {AxiosResponse} from "axios";

type Resolve = {
  (store: object): (config: AxiosResponse) => AxiosResponse;
};

type Reject = {
  (store: object): (response: object) => void;
};

export type {Resolve, Reject};
