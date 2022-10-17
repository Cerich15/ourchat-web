import {Props} from "./types";
import styles from "./.module.css";

const Text: React.FC<Props> = ({text, className}) => {
  return (
    <div className={`${styles.text} ${className}`}>
      <label>{text}</label>
    </div>
  );
};

export default Text;
