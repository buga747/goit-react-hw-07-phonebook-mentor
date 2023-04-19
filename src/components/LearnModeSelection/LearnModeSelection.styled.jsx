import styled from 'styled-components';
import { Button } from '@mui/material';

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-around;
`;

export const StyledButton = styled(Button)`
  padding: 16px;
  background-color: #2525f2;
  border-radius: 8px;
  height: 120px;
  width: 480px;
  display: block;
`;

export const Wrapper = styled.div`
  text-align: center;
`;
