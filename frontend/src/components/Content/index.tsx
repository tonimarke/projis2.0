import { Link } from 'react-router-dom';
import { Container, Grid } from './styles';

interface ContentProps {
}

function Content({ }: ContentProps) {
  return (
    <Container>
      <h1>Início - Bem vindo!</h1>
      <Grid>
        <Link to="">
          <p>Estagiários</p>
          <p>Supervisores</p>
          <p>Admins</p>
        </Link>

        <Link to="">
          <p>Clientes</p>
        </Link>

        <Link to="">
          <p>Partes Contrarias</p>
        </Link>

        <Link to="">
          <p>Ações</p>
        </Link>

        <Link to="">
          <p>Prontuário</p>
        </Link>

        <Link to="">
          <p>Dados</p>
        </Link>
      </Grid>
    </Container>
  );
};

export default Content;
