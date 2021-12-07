import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface Props {
  placeholder: string;
  onChange: (value: string) => void;
}

const Input: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    props.onChange(value);
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        placeholder={props.placeholder}
        value={value}
        maxRows={10}
        onChange={handleChange}
      />
    </Box>
  );
};
export default Input;
