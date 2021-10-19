import styled from 'styled-components';

export const Container = styled.div`
  overflow-y: scroll;
  height: 100vh;
  width: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    display: none;
  }

  img {
    height: 100px;
    width: 100px;
  }

`;

export const NavIcons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;

  svg {
    margin-top: 45px;
    padding: 5px;
    border-radius: 50%;
    transition: 0.5s;
    &:hover {
      background: #bcbaba;
    }
  }
`;
