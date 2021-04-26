import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  padding: 10px;

  border: 2px solid #232312;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    padding: 5px;
    border: 0;
    background: transparent;
  }

  ${props => props.isFocused &&
    css`
      color: #2b98d4;
      border-color: #2b98d4;
    `
  }

  ${props => props.isFilled &&
    css`
      color: #2b98d4;
    `
  }

  ${props => props.isErrored &&
    css`
      color: #c54230;
      border-color: #c54230;
    `
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #232129 inset !important;
    -webkit-text-fill-color: #F4EDE8 !important;
  }

  svg {
    margin-right: 10px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c54230;
    color: #fff;

    &::before {
      border-color: #c54230 transparent;
    }
  }
`;
