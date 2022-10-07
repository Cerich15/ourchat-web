import {AxiosResponse} from "axios";

type PlainRequest = {
  (url: string, config?: object): Promise<AxiosResponse>;
};

type Request = {
  (url: string, body?: object, config?: object): Promise<AxiosResponse>;
};

export type {PlainRequest, Request};
