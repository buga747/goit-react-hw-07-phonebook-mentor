import * as React from 'react';
import TextField from '@mui/material/TextField';
import { InputWrapper } from './SearchInput.styled';

export default function SearchInput() {
  return (
    <InputWrapper>
      <TextField id="outlined-basic" label="Search words" variant="outlined" />
    </InputWrapper>
  );
}
