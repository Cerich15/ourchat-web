import {Props} from './types';

const SearchBar: React.FC<Props> = ({className, style, children, onChange = () => {}}) => {
    return (
      <input className={className} style={style}  onChange={(e) => onChange(e.target.value)}/>
    );
  };


export default SearchBar