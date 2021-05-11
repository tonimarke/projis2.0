import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef, useState } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Menu from '../../../components/Menu';
import api from '../../../services/api';

import { Container, Content, TablePerson } from './styles';

interface Record {
  id: string;
  motivo_produra: string;
  estagiarios: {
    nome: string;
  }
  encaminhados: {
    nome: string;
  }
  entrevistados: {
    nome: string;
  }
  acao: {
    providencias: string;
  }
  data_abertura: Date;
  data_encerramento: Date;
}

function RecordConsultation() {
  const [records, setRecords] = useState<Record[]>([]);
  const formRef = useRef<FormHandles>(null);

  const hanbleSubmitForm = useCallback(async () => {
    const response = await api.get('prontuarios');

    console.log(response.data);

    setRecords(response.data);
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Consulta dos prontuários</h1>

        <Form ref={formRef} onSubmit={hanbleSubmitForm}>
          <Input name="search" placeholder="Buscar...." />
          <Button type="submit">Buscar</Button>
        </Form>

        <TablePerson>
          <thead>
            <tr>
              <th>Motivo da Procura</th>
              <th>Nome do estagiario</th>
              <th>Nome do encaminhado</th>
              <th>Nome do entrevistado</th>
              <th>Providencia</th>
              <th>Data da abertura</th>
              <th>Data do encerramento</th>
            </tr>
          </thead>

          <tbody>
            {records.map(record => (
              <tr key={record.id}>
                <td>{record.motivo_produra}</td>
                <td>{record.estagiarios.nome}</td>
                <td>{record.encaminhados.nome}</td>
                <td>{record.entrevistados.nome}</td>
                <td>{record.acao.providencias}</td>
                <td>{record.data_abertura}</td>
                <td>{record.data_encerramento}</td>
              </tr>
            ))}
          </tbody>
        </TablePerson>
      </Content>
    </Container>
  );
};

export default RecordConsultation;
