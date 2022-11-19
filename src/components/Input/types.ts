type Props = {
  value?: any;
  name?: string;
  placeholder?: string;
  className?: any;
  style?: any;
  prefix?: any;
  type?: 'text' | 'numeric' | 'password';
  onChange?: (val: string) => void;
};

export type {Props};
