const getEnv = (varName: string) => {
  return process.env[varName];
};

const PUBLIC_URL = getEnv("PUBLIC_URL");

const SERVER_API_URL = getEnv("REACT_APP_SERVER_API_URL");

export {SERVER_API_URL, PUBLIC_URL};
