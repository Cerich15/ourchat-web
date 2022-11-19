import {Props} from './types';

const Button: React.FC<Props> = ({className, style, children, onClick}) => {
  return (
    <button className={className} style={style} onClick={onClick}>
      {children || 'Button'}
    </button>
  );
};

export default Button;
