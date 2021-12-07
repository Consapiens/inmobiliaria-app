import Select, { SelectChangeEvent } from '@mui/material/Select';
import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import { selectItem } from '../../../shared/models/select.model';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';

interface Props {
  items: selectItem[];
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const CustomStyles = styled(Select)(() => ({
  backgroundColor: '#fff',
}));

const _Select: React.FC<Props> = (props) => {
  const handleChange = (event: SelectChangeEvent) => {
    props.onChange(event.target.value);
  };

  return (
    <>
      <FormControl sx={{ minWidth: 200 }}>
        <Select
          label={props.label}
          value={props.value}
          onChange={handleChange}
          displayEmpty
          input={<CustomStyles />}
        >
          <MenuItem value="">
            <em>{props.label}</em>
          </MenuItem>
          {props.items.map((item, i) => {
            return <MenuItem value={item.value}>{item.description}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </>
  );
};

export default _Select;
