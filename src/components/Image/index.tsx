import React from "react";
import {Props} from "./types";

const Image: React.FC<Props> = ({style, className, src}) => {
  return (
    <img
      alt={src.substring(0, 5)}
      className={className}
      style={style}
      src={src}
    />
  );
};

export default Image;
