import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';

import { Container, Content, InputStyle } from './styles';

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

function RecordRegistration() {
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
;

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Cadastro dos internos</h1>

        <Form ref={formRef} onSubmit={() => {}} >
          <InputStyle>
            <Input name="motivo" label="Motivo da Produra" placeholder="Insira o motivo...." />
            <Input name="dec" label="Dec hipo" placeholder="Insira o Dec hipo...." />
            <Input name="abertura" label="Data da Abertura" placeholder="Insira a data da abertura...." />
            <Input name="encerramento" label="Data de Encerramento" placeholder="Insira a data de encerramento...." />
            <Input name="gasto" label="Gasto Familiar" placeholder="Insira o gasto familiar...." />
            <Input name="familia" label="Status da Familia" placeholder="Insira o status da familia...." />
            <Input name="saude" label="Status da Saude" placeholder="Insira o status de saude...." />
            <Input name="imovel" label="Valor do bens imoveis" placeholder="Insira o valor total do bem imovel...." />
            <Input name="movel" label="Valor do bens moveis" placeholder="Insira o valor total do bem movel...." />
            <Input name="sinotico" label="Sinotico" placeholder="Insira o sinotico...." />

            <AsyncSelect name="acao" options={actions} label="Ação" />
            <AsyncSelect name="estagiario" options={estagiarios} label="Estagiarios" />
            <AsyncSelect name="encaminhado" options={encaminhados} label="Encaminhado" />
            <AsyncSelect name="entrevistado" options={entrevistados} label="Entrevistado" />
          </InputStyle>
          <Button type="submit">Cadastro</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default RecordRegistration;
