import { Container, Grid } from './styles';

interface ContentProps {
}

function Content({ }: ContentProps) {
  return (
    <Container>
      <Grid>
        <div>
          <p>Arroz</p>
          <p>Arroz</p>
          <p>Arroz</p>
          <p>Arroz</p>
        </div>
      </Grid>
    </Container>
  );
};

export default Content;
