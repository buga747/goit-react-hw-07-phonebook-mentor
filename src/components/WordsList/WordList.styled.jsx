import styled from 'styled-components';

export const Table = styled.table`
  width: auto;
  margin: 0 auto;
  text-align: center;
  border-collapse: collapse;
  border-radius: 10px;
  overflow: hidden;
  width: 800px;

  th {
    border: 1px solid #ddd;
    padding: 12px 8px;
    background-color: #00bcd5;
    color: white;
  }

  th:nth-child(1) {
    width: 24px;
  }
  td {
    border: 1px solid #ddd;
    padding: 8px;
    color: black;
    text-transform: capitalize;
  }

  tr:nth-child(1) {
    width: 24px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;
