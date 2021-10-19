import styled from 'styled-components';

export const Container = styled.div`
  background: #E5E5E5;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
`;


export const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 200px 200px 200px 200px;
  grid-template-rows: 200px 200px;
  grid-gap: 10px;
`;