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

interface Pessoa {
  id: string;
  nome: string; 
}

interface Tipo_de_Acao {
  id: string;
  nome: string;
}


interface Options {
  label: string;
  value: string;
}

interface ActionRegistrationFormData {
  providencias: string;
  data_atendimento: string;
  cliente_id: string;
  parte_contraria_id: string;
  tipos_de_acoes: string[];
}

function ActionRegistration() {
  const [acoes, setAcoes] = useState<Options[]>([]);
  const [cliente, setCliente] = useState<Options[]>([]);
  const [contraria, setContraria] = useState<Options[]>([]);

  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function loadTipoDePessoa () {

      const [tiposAcaoRes, clienteRes, parteContrariaRes] = await Promise.all([
        api.get<Tipo_de_Acao[]>('/tipos_acoes'),
        api.get<Pessoa[]>('/pessoas_type/Cliente'),
        api.get<Pessoa[]>('/pessoas_type/Parte Contraria')
      ]);

      const tipoAcaoOptions = tiposAcaoRes.data.map(option => {
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

      const parteContrariaOptions = parteContrariaRes.data.map(option => {
        return {
          label: option.nome,
          value: option.id,
        };
      });

      setAcoes(tipoAcaoOptions);
      setCliente(clienteOptions);
      setContraria(parteContrariaOptions);
    }
    
    loadTipoDePessoa();
  }, []);

  const handleFormSubmit = useCallback(async ({
    data_atendimento,
    cliente_id,
    parte_contraria_id,
    tipos_de_acoes,
    providencias,
  }: ActionRegistrationFormData, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const shema = Yup.object().shape({
        data_atendimento: Yup.string().required('Data de atendimento é obrigatória'),
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

      await api.post('/acao', {
        data_atendimento,
        cliente_id,
        parte_contraria_id,
        tipos_de_acoes,
        providencias,
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
        <h1>Cadastro das ações</h1>

        <Form ref={formRef} onSubmit={handleFormSubmit} >
          <InputStyle>
            <Input name="data_atendimento" label="Data de Atendimento" placeholder="Insira a data de atendimento...." />
            <AsyncSelect name="cliente_id" options={cliente} label="Nome do cliente" />
            <AsyncSelect name="parte_contraria_id" options={contraria} label="Nome da parte contrária" />
            <AsyncSelect name="tipos_de_acoes" options={acoes} label="Ações" />
            <Input name="providencias" label="Providências" placeholder="Insira a providência...." />
          </InputStyle>
          <Button type="submit">Cadastro</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ActionRegistration;
