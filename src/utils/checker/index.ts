import {IsType} from "./types";

const isType: IsType = (dataType, value1, value2) => {
  if (dataType === "array") {
    return Array.isArray(value1) ? value1 : value2;
  }
  return typeof value1 == dataType ? value1 : value2;
};

export {isType};
