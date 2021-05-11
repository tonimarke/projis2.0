import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  background: #E5E5E5;
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;

  h1 {
    margin-bottom: 20px;
  }

  form {
    height: 100%;
    display: flex;
    flex-direction: column;

    .input-sinotico {
      height: 100px;
      width: 300px;
      display: flex;
      ::placeholder,
      ::-webkit-input-placeholder {
        align-self: flex-end;
        justify-content: flex-end;
      }
    }

    button {
      margin-top: auto;
      max-width: 300px;
      align-self: flex-end;
    }
  }
`;

export const InputStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;
