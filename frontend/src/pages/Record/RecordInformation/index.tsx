import { FormHandles } from '@unform/core';
import { useHistory, useRouteMatch } from 'react-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';
import ButtonArrow from '../../../components/ButtonBack';

import { Container, Content, InputGroup, Form, ButtonGroup } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';

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

function RecordInformation() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
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

  const handleFormSubmit = useCallback(async ({
    motivo_procura,
    data_abertura,
    data_encerramento,
    gasto_familiar,
    status_habitacao,
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

      await api.put('/prontuario', {
        id: prontuario?.id,
        motivo_procura,
        data_abertura,
        data_encerramento,
        gasto_familiar,
        status_habitacao,
        status_saude,
        valor_bens_imoveis,
        valor_bens_moveis,
        acao_id,
        estagiario_id,
        encaminhado_por_id,
        entrevistado_por_id,
        sinotico,
      });
      
      history.goBack();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return
      }
    }
    
  }, [history, prontuario?.id]);

  const handleDeleteRecord = useCallback((id: string | undefined) => {
    if (id) {
      api.delete(`/prontuario/${id}`);

      history.goBack();
    }
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <ButtonArrow />
        <Form initialData={prontuario} ref={formRef} onSubmit={handleFormSubmit}>
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
            <AsyncSelect name="acao_id" options={actions} label="Ação" />
          </InputGroup>
          <InputGroup>
            <AsyncSelect name="estagiario_id" options={estagiarios} label="Estagiário" />
          </InputGroup>
          <InputGroup>
            <AsyncSelect name="encaminhado_por_id" options={encaminhados} label="Encaminhado" />
          </InputGroup>
          <InputGroup>
            <AsyncSelect name="entrevistado_por_id" options={entrevistados} label="Entrevistado" />
          </InputGroup>

          <InputGroup>
            <Input name="sinotico" label="Sinótico" placeholder="Sinótico" />
          </InputGroup>

          <ButtonGroup>
            <Button className="first-button" type="submit">Salvar</Button>

            <Button className="last-button" type="button" onClick={() => handleDeleteRecord(prontuario?.id)}>Delete</Button>
          </ButtonGroup>
        </Form>
      </Content>
    </Container>
  );
};

export default RecordInformation;
