import styled from 'styled-components';

import { Form as FormBase } from '@unform/web';

interface InputGroupProps {
  md?: number;
  lg?: number;
}

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  background: #E5E5E5;
  overflow: hidden;
  display: flex;
`;

export const Form = styled(FormBase)`
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 10px;
`;

export const Row = styled.div`
  --gap: 20px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 calc(var(--gap) * -1) calc(var(--gap) * -1) 0;
  padding: 20px;
`;

export const InputGroup = styled.div<InputGroupProps>`
  width: 100%;
  padding: 0 var(--gap) var(--gap) 0;

  @media(min-width: 500px) {
    width: ${props => ((props.md || 6) / 12) * 100}%;
  }

  @media(min-width: 900px) {
    width: ${props => ((props.lg || 4 ) / 12) * 100}%;
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  padding: 20px;

  .first-button {
    margin-right: 8px;
    background: green;
  }

  .last-button {
    margin-right: 8px;
  }

  button {
    width: 200px;
  }
`;