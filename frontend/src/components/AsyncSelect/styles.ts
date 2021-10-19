import { default as SelectBase } from 'react-select';
import styled from 'styled-components';

import Tooltip from '../Tooltip';

export const Label = styled.div`
`;

export const Container = styled.div`
  border-radius: 10px;
  border: 0;
  display: flex;
  align-items: center;

  .css-yk16xz-control {
    border: 0;
  }

  .css-1pahdxg-control {
    border: 0;
  }

  .select {
    border-radius: 10px;
    border: 2px solid #232312;
    flex: 1;
    padding: 5px;
    background: #FFF;
  }
`;

export const Select = styled(SelectBase)`
  &.error {
    border-color: #C54230
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
