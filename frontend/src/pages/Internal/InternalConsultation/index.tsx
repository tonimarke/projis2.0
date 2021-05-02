import { Form } from '@unform/web';
import { useCallback, useRef } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Menu from '../../../components/Menu';
import api from '../../../services/api';

import { Container, Content, TablePerson } from './styles';

function InternalConsultation() {
  const formRef = useRef(null);

  const hanbleSubmitForm = useCallback(async () => {
    const response = await api.get('usuarios');

    console.log(response.data);
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Consultar internoss cadastrados</h1>

        <Form ref={formRef} onSubmit={hanbleSubmitForm}>
          <Input name="search" placeholder="Buscar...." />
          <Button>Buscar</Button>
        </Form>

        <TablePerson>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Cargo</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>José</td>
              <td>lol@email.com</td>
              <td>Faxineiro</td>
            </tr>

            <tr>
              <td>Maria</td>
              <td>lol@email.com</td>
              <td>Faxineiro</td>
            </tr>
          </tbody>
        </TablePerson>
      </Content>
    </Container>
  );
};

export default InternalConsultation;
