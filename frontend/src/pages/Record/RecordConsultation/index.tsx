import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { useCallback, useRef, useState } from 'react';
import { useHistory } from 'react-router';

import api from '../../../services/api';
import formatDate from '../../../utils/formatDate';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Menu from '../../../components/Menu';


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

interface IProntuarios {
  id: string;
  motivo_procura: string;
  dec_hipo: string;
  data_abertura: string;
  data_encerramento: string;
  telefone: string;
  gasto_familiar: string;
  status_habitacao: string;
  status_saude: string;
  valor_bens_imoveis: string;
  valor_bens_moveis: string;
  sinotico: string;
  dateFormatOpen: string;
  dateFormatClose: string;
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
}

function RecordConsultation() {
  const [records, setRecords] = useState<IProntuarios[]>([]);
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const hanbleSubmitForm = useCallback(async () => {
    const response = await api.get<IProntuarios[]>('prontuarios');

    const prontuarios = response.data.map(pront => {
      return {
        ...pront,
        dateFormatOpen: formatDate(pront.data_abertura),
        dateFormatClose: formatDate(pront.data_encerramento),
      }
    });

    setRecords(prontuarios);
  }, []);

  const handleTableInformation = useCallback((id: string) => {
    history.push(`/record_information/${id}`);
  }, [history]);

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
              <tr key={record.id} onClick={() => handleTableInformation(record.id)}>
                <td>{record.motivo_procura}</td>
                <td>{record.estagiarios.nome}</td>
                <td>{record.encaminhados.nome}</td>
                <td>{record.entrevistados.nome}</td>
                <td>{record.acao.providencias}</td>
                <td>{record.dateFormatOpen}</td>
                <td>{record.dateFormatClose}</td>
              </tr>
            ))}
          </tbody>
        </TablePerson>
      </Content>
    </Container>
  );
};

export default RecordConsultation;
