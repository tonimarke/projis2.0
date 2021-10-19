import { Link } from 'react-router-dom';
import { IconBaseProps } from 'react-icons/lib';
import { FaUserTie, FaUser, FaUserTimes, FaGavel, FaFile } from 'react-icons/fa';

import { Container, NavIcons } from './styles';

import logoImg from '../../assets/logo.svg';

interface MenuProps {
  icon?: React.ComponentType<IconBaseProps>
}

function Menu({ icon }: MenuProps) {
  return (
    <Container>
      <Link to="/dashboard">
        <img src={logoImg} alt="Projis"/>
      </Link>
      <h1>Projis</h1>

      <NavIcons>
        <Link to="/internal_registration">
          <FaUserTie size={50} color="#000" />
        </Link>
        <Link to="/client_registration">
          <FaUser size={50} color="#000" />
        </Link>
        <Link to="/counterpart_registration">
        <FaUserTimes size={50} color="#000" />
        </Link>
        <Link to="/action_registration">
          <FaGavel size={50} color="#000" />
        </Link>
        <Link to="/record_registration">
          <FaFile size={50} color="#000" />
        </Link>
      </NavIcons>
    </Container>
  );
};

export default Menu;
