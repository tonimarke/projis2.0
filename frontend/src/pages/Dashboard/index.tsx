import { Container } from './styles';

import Menu from '../../components/Menu';
import Content from '../../components/Content';

function Dashboard() {
  return (
    <Container>
      <Menu />

      <Content/>
    </Container>
  );
};

export default Dashboard;
