import React from 'react';
import {Props} from './types';

const Container: React.FC<Props> = ({style, className, children}) => {
  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

export default Container;
