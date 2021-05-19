import { FormHandles } from '@unform/core';
import { useRouteMatch } from 'react-router';
import { useEffect, useRef, useState } from 'react';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';
import ButtonArrow from '../../../components/ButtonBack';

import { Container, Content, InputGroup, Form, ButtonGroup } from './styles';

interface IdParams {
  id: string;
}

interface Options {
  label: string;
  value: string;
}

interface Actions {
  id: string;
  providencias: string;
}

interface Person {
  id: string;
  nome: string; 
}

interface Prontuario {
  id: string;
  motivo_procura: string
}


function RecordInformation() {
  const formRef = useRef<FormHandles>(null);
  const { params } = useRouteMatch<IdParams>();
  const [prontuario, setProntuario] = useState<Prontuario>();

  const [actions, setActions] = useState<Options[]>([]);
  const [estagiarios, setEstagiarios] = useState<Options[]>([]);
  const [encaminhados, setEncaminhados] = useState<Options[]>([]);
  const [entrevistados, setEntrevistados] = useState<Options[]>([]);


  useEffect(() => {
    async function loadData () {

      const [prontuarioRes, actionRes, estagiarioRes, encaminhadoRes, EntrevistadoRes ] = await Promise.all([
        api.get<Prontuario>(`prontuario/${params.id}`),
        api.get<Actions[]>('/acoes'),
        api.get<Person[]>('/pessoas_type/Estagiário'),
        api.get<Person[]>('/pessoas'),
        api.get<Person[]>('/pessoas'),
      ]);

      const actionOptions = actionRes.data.map(option => {
        return {
          label: option.providencias,
          value: option.id,
        };
      });

      const estagiariOptions = estagiarioRes.data.map(option => {
        return {
          label: option.nome,
          value: option.id,
        };
      });

      const encaminhadOptions = encaminhadoRes.data.map(option => {
        return {
          label: option.nome,
          value: option.id,
        };
      });

      const entrevistadoOptions = EntrevistadoRes.data.map(option => {
        return {
          label: option.nome,
          value: option.id,
        };
      });

      setProntuario(prontuarioRes.data);
      setActions(actionOptions);
      setEstagiarios(estagiariOptions);
      setEncaminhados(encaminhadOptions);
      setEntrevistados(entrevistadoOptions);
    }
    
    loadData();
  }, [params.id]);

  return (
    <Container>
      <Menu />
      <Content>
        <ButtonArrow />
        <Form initialData={prontuario} ref={formRef} onSubmit={() => {}}>
          <InputGroup lg={4}>
            <Input name="motivo_procura" label="Motivo da Procura" placeholder="Motivo da Procura" />
          </InputGroup>
          <InputGroup lg={4}>
            <Input name="data_abertura" label="Data da Abertura" placeholder="Data da Abertura" />
          </InputGroup>
          <InputGroup lg={4}>
            <Input name="data_encerramento" label="Data de Encerramento" placeholder="Data de Encerramento" />
          </InputGroup>
          <InputGroup>
            <Input name="gasto_familiar" label="Gasto Familiar" placeholder="Gasto Familiar" />
          </InputGroup>
          <InputGroup>
            <Input name="status_habitacao" label="Status da Familia" placeholder="Status da Familia" />
          </InputGroup>
          <InputGroup>
            <Input name="status_saude" label="Status da Saúde" placeholder="Status da Saúde" />
          </InputGroup>
          <InputGroup>
            <Input name="valor_bens_imoveis" label="Valor do bens imoveis" placeholder="Valor do bens imoveis" />
          </InputGroup>
          <InputGroup>
            <Input name="valor_bens_moveis" label="Valor do bens moveis" placeholder="Valor do bens moveis" />
          </InputGroup>
          
          <InputGroup>
            <AsyncSelect name="acao" options={actions} label="Ação" />
          </InputGroup>
          <InputGroup>
            <AsyncSelect name="estagiario" options={estagiarios} label="Estagiário" />
          </InputGroup>
          <InputGroup>
            <AsyncSelect name="encaminhado" options={encaminhados} label="Encaminhado" />
          </InputGroup>
          <InputGroup>
            <AsyncSelect name="entrevistado" options={entrevistados} label="Entrevistado" />
          </InputGroup>

          <InputGroup>
            <Input name="sinotico" label="Sinótico" placeholder="Sinótico" />
          </InputGroup>

          <ButtonGroup>
            <Button className="first-button" type="submit">Salvar</Button>

            <Button className="last-button" type="submit">Delete</Button>
          </ButtonGroup>
        </Form>
      </Content>
    </Container>
  );
};

export default RecordInformation;
