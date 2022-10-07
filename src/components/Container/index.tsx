import React from "react";
import {Props} from "./types";
import styles from "./.module.css";

const Container: React.FC<Props> = ({className, children}) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
