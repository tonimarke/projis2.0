import { Container, Grid } from './styles';

import Card from '../Card';

interface ContentProps {
}

function Content({ }: ContentProps) {
  return (
    <Container>
      <h1>Início - Bem vindo!</h1>
      <Grid>
        <Card
          ps={['Estagiário', 'Supervisores', 'Admins']}
          links={[
            { label: "Cadastro", to:"/internal_registration" },
            { label: "Consulta", to:"/internal_consultation" }
          ]}
        />

        <Card
          ps={['Clientes']}
          links={[
            { label: "Cadastro", to:"" },
            { label: "Consulta", to:"" }
          ]}
        />

        <Card
          ps={['Partes Contrarias']}
          links={[
            { label: "Cadastro", to:"" },
            { label: "Consulta", to:"" }
          ]}
        />

        <Card
          ps={['Ações']}
          links={[
            { label: "Cadastro", to:"" },
            { label: "Consulta", to:"" }
          ]}
        />

        <Card
          ps={['Prontuários']}
          links={[
            { label: "Cadastro", to:"" },
            { label: "Consulta", to:"" }
          ]}
        />

        <Card
          ps={['Dados']}
        />
      </Grid>
    </Container>
  );
};

export default Content;