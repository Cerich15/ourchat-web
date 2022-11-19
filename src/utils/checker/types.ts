type DataType = "string" | "boolean" | "number" | "array" | "object";

type IsType = {
  (dataType: DataType, value1: any, value2: any): any;
};

export type {DataType, IsType};
