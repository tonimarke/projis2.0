import styled from 'styled-components';

export const Ps = styled.div`
  height: 100%;
  display: flex;
  opacity: 0;
  transition: opacity 0.5s;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  p {
    font-family: 'Inter';
    font-weight: 600;
    font-size: 20px;
  }
`;

export const Links = styled.div`
  position: absolute;
  top: 0;   // top right left bottom 0
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;

  opacity: 0;
  transition: opacity 0.5s;

  a {
    display: flex;
    font-family: 'Inter';
    font-weight: 500;
    font-size: 20px;
    background: #3183FF;
    padding: 5px;
    border-radius: 10px;
    width: 120px;
    height: 48px;
    color: #FFFF;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.35s, transform 1s;

    &:hover {
      box-shadow: 0 0 10px #6A736F;

      transform: translateY(-3px);
    }
  }

`;

export const Container = styled.div`
 background: #FFFF;
  border-radius: 10px;
  box-shadow: 0 0 10px #6A736F;
  position: relative; // <====
  &:hover {
    box-shadow: 0 0 5px #B0B6BA;
  }

  ${Ps} {
    opacity: 1;
    transition: opacity 0.5s;
    transition-delay: 0.5s;
  }

  ${Links} {
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover {
    ${Ps} {
      opacity: 0;
      transition-delay: 0s;
    }

    ${Links} {
      opacity: 1;
      transition-delay: 0.5s;
    }
  }
`;
