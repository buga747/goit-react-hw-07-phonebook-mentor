import styled from 'styled-components';
import { FormControlLabel } from '@mui/material';

export const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-left: auto;
  align-items: center;
`;

export const Label = styled(FormControlLabel)`
  && {
    margin-right: 0px;
    margin-left: 0px;
  }
`;
