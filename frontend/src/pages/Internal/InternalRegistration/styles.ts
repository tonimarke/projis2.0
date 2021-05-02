import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  background: #E5E5E5;
  /* display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column; */
  padding: 20px;
  width: 100%;
  form {
    height: 100%;
    display: flex;
    flex-direction: column;

    button {
      margin-top: auto;
      
    }
  }
`;

export const InputStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;
