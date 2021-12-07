import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { selectItem } from '../../../shared/models/select.model';

interface Props {
  items: selectItem[];
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const _Select: React.FC<Props> = (props) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.value = event.target.value;
  };

  return (
    <Select label={props.label} value={props.value} onChange={handleChange}>
      {props.items.map((item, i) => {
        return <MenuItem value={item.value}>{item.description}</MenuItem>;
      })}
    </Select>
  );
};

export default _Select;
