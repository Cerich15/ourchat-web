import serverConfig from ".";

import {PlainRequest, Request} from "./types";

const get: PlainRequest = async (url, config) => {
  return await serverConfig.get(url, config);
};

const post: Request = async (url, body, config) => {
  return await serverConfig.post(url, body, config);
};

const put: Request = async (url, body, config) => {
  return await serverConfig.put(url, body, config);
};

const del: Request = async (url, body, config) => {
  return await serverConfig.delete(url, {
    data: body,
    ...config,
  });
};

const server = {
  get,
  post,
  put,
  del,
};

export default server;
