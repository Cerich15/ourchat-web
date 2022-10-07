const getEnv = (varName: string) => {
  return process.env[varName];
};

const SERVER_API_URL = getEnv("REACT_APP_SERVER_API_URL");

export {SERVER_API_URL};
