import React from "react";
import {Props} from "./types";
import styles from "./.module.css";

const Container: React.FC<Props> = ({style, className, children}) => {
  return (
    <div style={style && style} className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
