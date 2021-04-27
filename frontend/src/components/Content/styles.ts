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
  grid-template-columns: 200px 200px 200px;
  grid-template-rows: 200px 200px;
  grid-gap: 10px;

  a {
    background: #FFFF;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    border-radius: 10px;
    box-shadow: 0 0 5px #6A736F;
    transition: 0.5s;

    p {
      font-family: 'Inter';
      font-weight: 500;
      font-size: 20px;
    }

    &:hover {
      box-shadow: 0 0 5px #B0B6BA;
    }
  }
`;