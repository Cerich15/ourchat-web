import {Resolve, Reject} from "./types";

const resolve: Resolve = (store) => (config) => {
  return config;
};

const reject: Reject = (store: object) => () => {
  return Promise.reject("ERROR");
};

const response = {resolve, reject};

export default response;
