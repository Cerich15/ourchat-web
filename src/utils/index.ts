import {PUBLIC_URL} from "constants/env";

const getIcon = (file: string) => {
  return PUBLIC_URL + "/assets/icons" + file;
};

export {getIcon};
