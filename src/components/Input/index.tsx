import {Props} from './types';
import styles from './.module.css';

const Input: React.FC<Props> = ({
  placeholder,
  className,
  style,
  value,
  prefix,
  onChange = () => {},
}) => {
  return (
    <div className={`${styles['input-pane']} ${className}`}>
      {prefix}
      <input
        className={styles['input']}
        style={style}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};

export default Input;
