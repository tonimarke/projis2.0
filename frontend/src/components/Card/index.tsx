import { Link } from 'react-router-dom';
import { Container, Ps, Links } from './styles';

interface CardProps {
  ps: string[];
  links?: {
    label: string;
    to: string;
  }[];
}

function Card({ ps, links }: CardProps) {
  return (
    <Container>
      <Ps>
        {ps.map((p) => <p>{p}</p>)}
      </Ps>

      <Links>
        {links && links.map((link) => <Link to={link.to}>{link.label}</Link>)}
      </Links>
    </Container>
  );
};

export default Card;
