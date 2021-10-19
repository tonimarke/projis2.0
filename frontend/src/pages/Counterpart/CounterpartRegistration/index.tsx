import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, InputStyle } from './styles';
import AsyncSelect from '../../../components/AsyncSelect';
import getValidationErrors from '../../../utils/getValidationErrors';

interface EstadoCivil {
  id: string;
  estado_civil: string;
}

interface Endereco {
  id: string;
}

interface TipoDePessoa {
  id: string;
  tipo_de_pessoa: string;
}

interface EstadoCivil {
  id: string;
  estado_civil: string;
}

interface Options {
  label: string;
  value: string;
}

interface CounterpartFormData {
  nome: string;
  rg: string;
  cpf: string;
  ocupacao: string;

  estado_civil_id: string;

  logradouro: string;
  numero: string;
  bairro: string;
  complemento: string;
  cep: string;
  cidade: string;
  estado: string;
}

function CounterpartRegistration() {
  const formRef = useRef<FormHandles>(null);
  const [civil, setCivil] = useState<Options[]>([]);
  
  useEffect(() => {
    async function loadData() {
      const response = await api.get<EstadoCivil[]>('/estados_civis');
    
      const civilOptions = response.data.map(option => {
        return {
          label: option.estado_civil,
          value: option.id
        }
      });

      setCivil(civilOptions);
    }

    loadData();
  }, []);

  const handleFormSubmit = useCallback(async ({
    nome,
    rg,
    cpf,
    ocupacao,
    estado_civil_id,
    logradouro,
    numero,
    bairro,
    complemento,
    cep,
    cidade,
    estado
  }: CounterpartFormData, { reset }) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'),
        rg: Yup.string().required('RG é obrigatório'),
        cpf: Yup.string().required('CPF é obrigatório'),
        ocupacao: Yup.string().required('Ocupação é obrigatório'),

        estado_civil_id:  Yup.string().required('Estado Civil é obrigatório'),

        logradouro: Yup.string().required('Logradouro obrigatório'),
        numero: Yup.string().required('Numero obrigatório'),
        bairro: Yup.string().required('Bairro obrigatório'),
        complemento: Yup.string().required('Complemento obrigatório'),
        cep: Yup.string().required('Cep obrigatório'),
        cidade: Yup.string().required('Cidade obrigatório'),
        estado: Yup.string().max(2).min(2).required('Estado obrigatório')
      });

      await schema.validate({
        nome,
        rg,
        cpf,
        ocupacao,
        estado_civil_id,
        logradouro,
        numero,
        bairro,
        complemento,
        cep,
        cidade,
        estado
      }, {
        abortEarly: false
      });

      const endereco = await api.post<Endereco>('/endereco', {
        logradouro,
        numero,
        bairro,
        complemento,
        cep,
        cidade,
        estado
      });
      
      const tipoDePessoa = await api.get<TipoDePessoa>('/tipo_de_pessoa_by_name/Parte Contraria');

      await api.post('/pessoa', {
        nome,
        rg,
        cpf,
        ocupacao,
        endereco_id: endereco.data.id,
        estado_civil_id,
        tipo_de_pessoa_id: tipoDePessoa.data.id,
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
        <h1>Cadastro da parte contrária</h1>

        <Form ref={formRef} onSubmit={handleFormSubmit} >
          <InputStyle>
            <Input name="nome" label="Nome" placeholder="Insira o nome...." />
            <Input name="rg" label="RG" placeholder="Insira o RG...." />
            <Input name="cpf" label="CPF" placeholder="Insira o CPF...." />
            <Input name="ocupacao" label="Ocupação" placeholder="Insira a ocupação" />

            <AsyncSelect name="estado_civil_id" options={civil} label="Estado Civil" />
            
            <Input name="logradouro" label="Rua" placeholder="Insira o nome da rua... " />
            <Input name="numero" label="Número" placeholder="Insira o numero da casa... " />
            <Input name="bairro" label="Bairro" placeholder="Insira o nome do bairro... " />
            <Input name="complemento" label="Complemento" placeholder="Insira o complemento... " />
            <Input name="cep" label="CEP" placeholder="Insira o cep... " />
            <Input name="cidade" label="Cidade" placeholder="Insira o nome da cidade... " />
            <Input name="estado" label="Estado" placeholder="Insira o nome do estado... " />
          </InputStyle>
          <Button type="submit">Cadastro</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CounterpartRegistration;
