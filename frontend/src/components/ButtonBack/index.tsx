import { FaArrowLeft } from 'react-icons/fa';
import { useHistory } from 'react-router';

import { Container, ButtonArrow } from './styles';

function ButtonBack() {
  const history = useHistory();
  return (
    <Container>
      <ButtonArrow onClick={() => {history.goBack()}}>
        <FaArrowLeft size={20} />
      </ButtonArrow>
    </Container>
  );
};

export default ButtonBack;
