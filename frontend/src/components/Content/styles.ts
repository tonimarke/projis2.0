import styled from 'styled-components';

export const Container = styled.div`
  background: gray;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Grid = styled.div`
  background: pink;
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 100px 100px;
  gap: 10px;
`;