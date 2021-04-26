import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;

  form {
    margin: 50px 0;
    width: 340px;
    text-align: end;

    h1 {
      margin-bottom: 24px;
      text-align:center;
    }

    button {
      max-width: 140px;
      max-height: 40px;
    }
  }
`;
