import * as React from 'react';
import TextField from '@mui/material/TextField';
import { InputWrapper } from './Filter.styled';
import { selectFilterValue } from 'redux/words/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from 'redux/filter/filterSlice';

export default function SearchInput() {
  const filterValue = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(setFilterValue(value));
  };
  return (
    <InputWrapper>
      <TextField
        id="outlined-basic"
        label="Search words"
        variant="outlined"
        value={filterValue}
        onChange={handleChange}
      />
    </InputWrapper>
  );
}
