import { Container, Grid } from './styles';

import Card from '../Card';

function Content() {
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
            { label: "Cadastro", to:"/client_registration" },
            { label: "Consulta", to:"/client_consultation" }
          ]}
        />

        <Card
          ps={['Partes Contrarias']}
          links={[
            { label: "Cadastro", to:"/counterpart_registration" },
            { label: "Consulta", to:"/counterpart_consultation" }
          ]}
        />

        <Card
          ps={['Ações']}
          links={[
            { label: "Cadastro", to:"/action_registration" },
            { label: "Consulta", to:"/action_consultation" }
          ]}
        />

        <Card
          ps={['Prontuários']}
          links={[
            { label: "Cadastro", to:"/record_registration" },
            { label: "Consulta", to:"/record_consultation" }
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