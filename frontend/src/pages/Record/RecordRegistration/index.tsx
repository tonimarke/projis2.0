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
import getValidationErrors from '../../../utils/getValidationErrors';

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

interface RecordRegistrationFormData {
  motivo_procura: string;
  data_abertura: string;
  data_encerramento: string;
  gasto_familiar: string;
  status_habitacao: string;
  status_familia: string;
  status_saude: string;
  valor_bens_imoveis: string;
  valor_bens_moveis: string;
  acao_id: string;
  estagiario_id: string;
  encaminhado_por_id: string;
  entrevistado_por_id: string;
  sinotico: string;
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

  const handleFormSubmit = useCallback(async ({
    motivo_procura,
    data_abertura,
    data_encerramento,
    gasto_familiar,
    status_habitacao,
    status_familia,
    status_saude,
    valor_bens_imoveis,
    valor_bens_moveis,
    acao_id,
    estagiario_id,
    encaminhado_por_id,
    entrevistado_por_id,
    sinotico,
  }: RecordRegistrationFormData, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        motivo_procura: Yup.string().required('Motivo da procura é obrigatório'),
        data_abertura: Yup.date().required('Data de abertura é obrigatório'),
        data_encerramento: Yup.date().required('Data de encerramento é obrigatório'),
        gasto_familiar: Yup.string().required('Gasto familiar é obrigatório'),
        status_habitacao: Yup.string().required('Status da habitação é obrigatório'),
        status_familia: Yup.string().required('Status da familia é obrigatório'),
        status_saude: Yup.string().required('Status da saude é obrigatório'),
        valor_bens_imoveis: Yup.string().required('Valor dos bens imoveis é obrigatório'),
        valor_bens_moveis: Yup.string().required('Valor dos bens moveis é obrigatório'),
        acao_id: Yup.string().required('Ação é obrigatório'),
        estagiario_id: Yup.string().required('Estagiario é obrigatório'),
        encaminhado_por_id: Yup.string().required('Encaminhado é obrigatório'),
        entrevistado_por_id: Yup.string().required('Entrevistado é obrigatório'),
        sinotico: Yup.string().required('Sinótico é obrigatório'),
      });

      await schema.validate({
        motivo_procura,
        data_abertura,
        data_encerramento,
        gasto_familiar,
        status_habitacao,
        status_familia,
        status_saude,
        valor_bens_imoveis,
        valor_bens_moveis,
        acao_id,
        estagiario_id,
        encaminhado_por_id,
        entrevistado_por_id,
        sinotico,
      }, {
        abortEarly: false
      });

      await api.post('/prontuario', {
        motivo_procura,
        data_abertura,
        data_encerramento,
        gasto_familiar,
        status_habitacao,
        status_familia,
        status_saude,
        valor_bens_imoveis,
        valor_bens_moveis,
        acao_id,
        estagiario_id,
        encaminhado_por_id,
        entrevistado_por_id,
        sinotico,
      });

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return
      }
    }
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Cadastro dos prontuários</h1>

        <Form ref={formRef} onSubmit={handleFormSubmit} >
          <InputStyle>
            <Input name="motivo_procura" label="Motivo da Procura" placeholder="Insira o motivo da procura...." />
            <Input name="data_abertura" label="Data da Abertura" placeholder="Insira a data da abertura...." />
            <Input name="data_encerramento" label="Data de Encerramento" placeholder="Insira a data de encerramento...." />
            <Input name="gasto_familiar" label="Gasto Familiar" placeholder="Insira o gasto familiar...." />
            <Input name="status_habitacao" label="Staus Habitação" placeholder="Insira o status habitção...." />
            <Input name="status_familia" label="Status da Familia" placeholder="Insira o status da familia...." />
            <Input name="status_saude" label="Status da Saúde" placeholder="Insira o status de saude...." />
            <Input name="valor_bens_imoveis" label="Valor do bens imoveis" placeholder="Insira o valor total do bem imovel...." />
            <Input name="valor_bens_moveis" label="Valor do bens moveis" placeholder="Insira o valor total do bem movel...." />

            <AsyncSelect name="acao_id" options={actions} label="Ação" />
            <AsyncSelect name="estagiario_id" options={estagiarios} label="Estagiário" />
            <AsyncSelect name="encaminhado_por_id" options={encaminhados} label="Encaminhado" />
            <AsyncSelect name="entrevistado_por_id" options={entrevistados} label="Entrevistado" />

            <Input className="input-sinotico" name="sinotico" label="Sinótico" placeholder="Insira o sinótico...." />
          </InputStyle>
          <Button type="submit">Cadastro</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default RecordRegistration;
