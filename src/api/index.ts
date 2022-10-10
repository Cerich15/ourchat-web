import server from "./server";

import {request, response} from "./interceptor";

const apiConfig = (store: object) => {
  server.interceptors.request.use(
    request.resolve(store),
    request.reject(store),
  );
  server.interceptors.response.use(
    response.resolve(store),
    response.reject(store),
  );
};

export {server};
export default apiConfig;
