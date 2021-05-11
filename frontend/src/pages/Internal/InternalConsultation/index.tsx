import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef, useState } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Menu from '../../../components/Menu';
import api from '../../../services/api';

import { Container, Content, TablePerson } from './styles';

interface Person {
  id: string;
  nome: string;
  email: string;
  tipo_de_pessoa: {
    id: string;
    tipo_de_pessoa: string;
  }
}

function InternalConsultation() {
  const [users, setUsers] = useState<Person[]>([]);
  const formRef = useRef<FormHandles>(null);

  const hanbleSubmitForm = useCallback(async () => {
    const response = await api.get('pessoas_typeesa');

    console.log(response.data);

    setUsers(response.data);
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Consulta dos internos</h1>

        <Form ref={formRef} onSubmit={hanbleSubmitForm}>
          <Input name="search" placeholder="Buscar...." />
          <Button type="submit">Buscar</Button>
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
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.nome}</td>
                <td>{user.email}</td>
                <td>{user.tipo_de_pessoa.tipo_de_pessoa}</td>
              </tr>
            ))}
          </tbody>
        </TablePerson>
      </Content>
    </Container>
  );
};

export default InternalConsultation;
