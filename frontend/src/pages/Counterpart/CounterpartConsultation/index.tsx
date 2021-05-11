import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef, useState } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Menu from '../../../components/Menu';
import api from '../../../services/api';

import { Container, Content, TablePerson } from './styles';

interface Counterpert {
  id: string;
  nome: string;
  email: string;
  tipo_de_pessoa: {
    id: string;
    tipo_de_pessoa: string;
  }
}

interface CounterpartConsultationForm {
  search: string;
}

function CounterpartConsultation() {
  const [users, setUsers] = useState<Counterpert[]>([]);
  const formRef = useRef<FormHandles>(null);

  const hanbleSubmitForm = useCallback(async (data: CounterpartConsultationForm) => {
    console.log(data.search);
    try {
      if (data.search) {
        const response = await api.get(`pessoas_search/Parte Contraria/?search=${data.search}`);
        
        setUsers(response.data);
      } else {
        const response = await api.get(`pessoas_type/Parte Contraria`);
        
        setUsers(response.data);
      }
    } catch (err) {
      setUsers([]);
    }
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Consulta das partes contrária</h1>

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

export default CounterpartConsultation;
