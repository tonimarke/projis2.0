import { FormHandles } from '@unform/core';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';
import ButtonArrow  from '../../../components/ButtonBack';

import { Container, Content, InputGroup, Form, ButtonGroup, Row } from './styles';
import { useHistory, useRouteMatch } from 'react-router';
import getValidationErrors from '../../../utils/getValidationErrors';

interface Tipo_de_Acao {
  id: string;
  nome: string;
}

interface Cliente {
  id: string;
  nome: string;
}

interface ParteContraria {
  id: string;
  nome: string;
}

interface Options {
  label: string;
  value: string;
}

interface IAcao {
  id: string;
  providencias: string,
  cliente_id: string;
  data_atendimento: string,
  parte_contraria_id: string;
  tipos_de_acoes: string;
}

interface IdParams {
  id: string;
}

interface CounterPartFormData {
  id: string;
  providencias: string,
  cliente_id: string;
  data_atendimento: Date,
  parte_contraria_id: string;
  tipos_de_acoes: string;
}

function ActionInformation() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { params } = useRouteMatch<IdParams>();

  const [action, setAction] = useState<IAcao>();
  const [tipoDeAcoes, setTipoDeAcoes] = useState<Options[]>([]);
  const [clientes, setClientes] = useState<Options[]>([]);
  const [contraria, setContraria] = useState<Options[]>([]);

  useEffect(() => {

    async function loadData () {
      const [ acaoRes, tipoAcaoRes, clienteRes, contrariaRes ] = await Promise.all([
        api.get<IAcao>(`/acao/${params.id}`),
        api.get<Tipo_de_Acao[]>('/tipos_acoes'),
        api.get<Cliente[]>('/pessoas_type/Cliente'),
        api.get<ParteContraria[]>('pessoas_type/Parte Contraria')
      ]);
      
    
      const tipoAcaoOptions = tipoAcaoRes.data.map(option => {
        return {
          label: option.nome,
          value: option.id,
        };
      });

      const clienteOptions = clienteRes.data.map(option => {
        return {
          label: option.nome,
          value: option.id,
        };
      });

      const contrariaOptions = contrariaRes.data.map(option => {
        return {
          label: option.nome,
           value: option.id,
        }
      });

      setAction(acaoRes.data);
      setTipoDeAcoes(tipoAcaoOptions);
      setClientes(clienteOptions);
      setContraria(contrariaOptions);
    }
    
    loadData();
  }, [params.id]);
  
  const handleFormSubmit = useCallback(async ({
    id,
    providencias,
    data_atendimento,
    cliente_id,
    parte_contraria_id,
    tipos_de_acoes,
  }: CounterPartFormData) => {
    try {
      const shema = Yup.object().shape({
        data_atendimento: Yup.date().required('Data de atendimento é obrigatória'),
        cliente_id: Yup.string().required('Cliente é obrigatório'),
        parte_contraria_id: Yup.string().required('Parte Cintrária obrigatória'),
        tipos_de_acoes: Yup.string().required('Tipo de ação é obrigatória'),
        providencias: Yup.string().required('Providência é obrigatória')
      });

      await shema.validate({
        data_atendimento,
        cliente_id,
        parte_contraria_id,
        tipos_de_acoes,
        providencias,
      }, { 
        abortEarly: false
      });

      history.goBack();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return
      }
    }
    await api.put('/acao', {
      id: action?.id,
      providencias,
      data_atendimento,
      cliente_id,
      parte_contraria_id,
      tipos_de_acoes,
    });
  }, [action?.id, history]);

  const hanbleDeleteAction = useCallback(async (id: string | undefined) => {
    if (id) {
      await api.delete(`/acao/${id}`)
      
      history.goBack();
    }
  }, [history]);

  return (
    <Container>
      <Menu />
      <Content>
        <ButtonArrow />
        <Form initialData={action} ref={formRef} onSubmit={handleFormSubmit}>
          <Row>
            <InputGroup lg={4}>
              <Input name="data_atendimento" label="Data de Atendimento" placeholder="Data de atendimento...." />
            </InputGroup>
            <InputGroup lg={4}>
              <AsyncSelect name="cliente_id" options={clientes} label="Nome do cliente" />
            </InputGroup>
            <InputGroup lg={4}>
              <AsyncSelect name="parte_contraria_id" options={contraria} label="Nome da parte contraria" />
            </InputGroup>
            <InputGroup>
              <AsyncSelect name="tipos_de_acoes" options={tipoDeAcoes} label="Ações" />
            </InputGroup>
            <InputGroup>
              <Input className="input-providencia" name="providencias" label="Providências" placeholder="Providência...." />
            </InputGroup>
          </Row>
          <ButtonGroup>
            <Button className="first-button" type="submit">Salvar</Button>

            <Button className="last-button" type="button" onClick={() => hanbleDeleteAction(action?.id)}>Delete</Button>
          </ButtonGroup>
        </Form>
      </Content>
    </Container>
  );
};

export default ActionInformation;
