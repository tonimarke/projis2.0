import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef, useState } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Menu from '../../../components/Menu';
import api from '../../../services/api';

import { Container, Content, TablePerson } from './styles';

interface Action {
  id: string;
  providencias: string;
  data_atendimento: Date;
  cliente: {
    nome: string;
  },
  parte_contraria: {
    nome: string;
  }
}

function ActionConsultation() {
  const [actions, setActions] = useState<Action[]>([]);
  const formRef = useRef<FormHandles>(null);

  const hanbleSubmitForm = useCallback(async () => {
    const response = await api.get('acoes');

    console.log(response.data);

    setActions(response.data);
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
              <th>Cliente</th>
              <th>Parte Contraria</th>
              <th>Providencias</th>
              <th>Data do Atendimento</th>
            </tr>
          </thead>

          <tbody>
            {actions.map(action => (
              <tr key={action.id}>
                <td>{action.cliente.nome}</td>
                <td>{action.parte_contraria.nome}</td>
                <td>{action.providencias}</td>
                <td>{action.data_atendimento}</td>
              </tr>
            ))}
          </tbody>
        </TablePerson>
      </Content>
    </Container>
  );
};

export default ActionConsultation;
