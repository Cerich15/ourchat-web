import {Props} from './types';

const Text: React.FC<Props> = ({className, style, children}) => {
  return (
    <p className={className} style={style}>
      {children}
    </p>
  );
};

export default Text;
