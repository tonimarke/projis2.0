import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #E5E5E5;
  gap: 20px;

  form {
    display: flex;
    align-items: center;
    
    div {
      flex: 1;
      margin-right: 20px;
    }

    button {
      margin-top: 0;
      max-width: 150px;
    }
  }
`;

export const TablePerson = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead th {
    color: #999;
    text-align: center;
    padding: 12px;

    &:nth-child(3n) {
      padding-left: 25px;
    }
  }

  tbody td {
    padding: 12px;
    text-align: center;
    border-bottom: 1px solid #FAFAFA;
  }
`;

