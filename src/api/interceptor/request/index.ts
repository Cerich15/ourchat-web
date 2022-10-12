import {Reject, Resolve} from "./types";

const resolve: Resolve = (store) => (config) => {
  return config;
};

const reject: Reject = () => () => {
  return Promise.reject("ERROR");
};

const request = {resolve, reject};

export default request;
