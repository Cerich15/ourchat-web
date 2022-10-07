import axios from "axios";

import {SERVER_API_URL} from "constants/env";

const serverConfig = axios.create({
  baseURL: SERVER_API_URL,
});

export default serverConfig;
