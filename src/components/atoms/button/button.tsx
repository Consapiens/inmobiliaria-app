import React from 'react';
import Button from '@mui/material/Button';
import './button.scss';

interface Props {
  text: string;
}

const _Button: React.FC<Props> = (props) => {
  return (
    <Button variant="outlined" size="small">
      {props.text}
    </Button>
  );
};

export default _Button;
