import {Props} from "./types";
import styles from "./.module.css";
import Container from "components/Container";

const InputField: React.FC<Props> = ({
  value,
  onChange,
  name,
  placeholder,
  className,
  style,
}) => {
  return (
    <Container className={`${styles.input} ${className}`}>
      {/* {name} */}
      <input
        value={value || ""}
        // placeholder={placeholder}
        style={style}
        onChange={(e) => onChange(e.target.value)}
      />
    </Container>
  );
};

export default InputField;
