import { FormHandles } from '@unform/core';
import { useEffect, useRef, useState } from 'react';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';

import { Container, Content, InputGroup, Form, ButtonGroup } from './styles';

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


function RecordInformation() {
  const formRef = useRef<FormHandles>(null);
  const [actions, setActions] = useState<Options[]>([]);
  const [estagiarios, setEstagiarios] = useState<Options[]>([]);
  const [encaminhados, setEncaminhados] = useState<Options[]>([]);
  const [entrevistados, setEntrevistados] = useState<Options[]>([]);


  useEffect(() => {
    async function loadData () {

      const [actionRes, estagiarioRes, encaminhadoRes, EntrevistadoRes ] = await Promise.all([
        api.get<Actions[]>('acoes'),
        api.get<Person[]>('pessoas'),
        api.get<Person[]>('pessoas'),
        api.get<Person[]>('pessoas'),
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

      setActions(actionOptions);
      setEstagiarios(estagiariOptions);
      setEncaminhados(encaminhadOptions);
      setEntrevistados(entrevistadoOptions);
    }
    
    loadData();
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <Form ref={formRef} onSubmit={() => {}}>
          <InputGroup lg={4}>
            <Input name="motivo" label="Motivo da Procura" placeholder="Motivo da Procura" />
          </InputGroup>
          <InputGroup lg={4}>
            <Input name="abertura" label="Data da Abertura" placeholder="Data da Abertura" />
          </InputGroup>
          <InputGroup lg={4}>
            <Input name="encerramento" label="Data de Encerramento" placeholder="Data de Encerramento" />
          </InputGroup>
          <InputGroup>
            <Input name="gasto" label="Gasto Familiar" placeholder="Gasto Familiar" />
          </InputGroup>
          <InputGroup>
            <Input name="familia" label="Status da Familia" placeholder="Status da Familia" />
          </InputGroup>
          <InputGroup>
            <Input name="saude" label="Status da Saúde" placeholder="Status da Saúde" />
          </InputGroup>
          <InputGroup>
            <Input name="imovel" label="Valor do bens imoveis" placeholder="Valor do bens imoveis" />
          </InputGroup>
          <InputGroup>
            <Input name="movel" label="Valor do bens moveis" placeholder="Valor do bens moveis" />
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
