import { IconBaseProps } from 'react-icons/lib';
import { FaUserTie, FaUser, FaUserTimes, FaGavel, FaFile, FaCog } from 'react-icons/fa';

import { Container, NavIcons } from './styles';

import logoImg from '../../assets/logo.svg';

interface MenuProps {
  icon?: React.ComponentType<IconBaseProps>
}

function Menu({ icon }: MenuProps) {
  return (
    <Container>
      <img src={logoImg} alt="Projis"/>
      <h1>Projis</h1>

      <NavIcons>
        <FaUserTie size={40} color="#000" />
        <FaUser size={40} color="#000" />
        <FaUserTimes size={40} color="#000" />
        <FaGavel size={40} color="#000" />
        <FaFile size={40} color="#000" />
        <FaCog size={40} color="#000" />
      </NavIcons>
    </Container>
  );
};

export default Menu;
