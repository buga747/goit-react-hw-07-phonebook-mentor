import styled from 'styled-components';
import TextField from '@mui/material/TextField';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 400px;
`;

export const StyledTextField = styled(TextField)`
  && {
    margin-bottom: 20px;
    width: 100%;
  }
`;
