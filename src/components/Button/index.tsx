import Container from "components/Container";
import {Prop} from "./types";
import styles from "./.module.css";

const Button: React.FC<Prop> = ({className, style, onClick, label, icon}) => {
  return (
    <Container className={`${styles.button} ${className}`}>
      <button onClick={onClick}>
        {icon && icon}
        {label}
      </button>
    </Container>
  );
};

export default Button;
