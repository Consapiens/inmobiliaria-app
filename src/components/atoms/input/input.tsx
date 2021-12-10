import * as React from 'react';
import TextField from '@mui/material/TextField';

interface Props {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = (props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <TextField
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}
    />
  );
};

export default Input;
