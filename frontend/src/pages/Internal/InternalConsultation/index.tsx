import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router-dom';

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

interface InternalConsultationForm {
  search: string;
}

function InternalConsultation() {
  const [users, setUsers] = useState<Person[]>([]);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const hanbleSubmitForm = useCallback(async (data: InternalConsultationForm) => {
    try {
      if (data.search) {
        const response = await api.get(`pessoas_type_esa_search?search=${data.search}`);
        setUsers(response.data);
      } else {
        const response = await api.get('pessoas_type_esa');
      
        setUsers(response.data);
      }
    } catch (err) {
      setUsers([]);
    }

    
  }, []);

  const handleTableInformation = useCallback((id: string) => {
    history.push(`/internal_information/${id}`);
  }, [history]);

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
              <tr key={user.id} onClick={() => handleTableInformation(user.id)}>
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
