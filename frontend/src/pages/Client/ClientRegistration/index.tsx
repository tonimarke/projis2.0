import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, InputStyle } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';
import AsyncSelect from '../../../components/AsyncSelect';


interface ClientRegistrationFormData {
  nome: string;
  pai: string;
  rg: string;
  cpf: string;
  email: string;
  nome_pai: string;
  nome_mae: string;
  data_nascimento: Date;
  religiao: string;
  previdencia_social: string;
  bpc: string;
  sindicalizado: string;
  situacao: string;
  observacoes: string;

  estado_civil_id: string;
  tipo_de_pessoa_id: string;
  endereco_id: string;

  logradouro: string;
  numero: string;
  bairro: string;
  complemento: string;
  cep: string;
  cidade: string;
  estado: string;
}

interface Endereco {
  id: string;
}

interface EstadoCivil {
  id: string;
  estado_civil: string;
}

interface TipoDePessoa {
  id: string;
  tipo_de_pessoa: string;
}

interface Options {
  label: string;
  value: string;
}

function ClientRegistration() {
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

  const handleFormSubmit = useCallback(async({ 
    nome,
    rg,
    cpf,
    email,
    nome_pai,
    nome_mae,
    data_nascimento,
    religiao,
    previdencia_social,
    bpc,
    sindicalizado,
    situacao,
    observacoes,
    endereco_id,
    estado_civil_id,
    tipo_de_pessoa_id,

    logradouro,
    numero,
    bairro,
    complemento,
    cep,
    cidade,
    estado,

  }: ClientRegistrationFormData, { reset }) => {
    console.log(typeof estado_civil_id)
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatório'),
        rg: Yup.string().required('RG é obrigatório'),
        cpf: Yup.string().required('CPF é obrigatório'),
        email: Yup.string().required('E-mail é obrigatório'),
        nome_pai: Yup.string().required('Nome do pai é obrigatório'),
        nome_mae: Yup.string().required('Nome da mãe é obrigatório'),
        data_nascimento: Yup.date().required('Data de nascimento é obrigatório'),
        religiao: Yup.string().required('Religião é obrigatório'),
        previdencia_social: Yup.string().required('Previdencia é obrigatório'),
        bpc: Yup.string().required('BPC é obrigatório'),
        sindicalizado: Yup.string().required('Sindicalizado é obrigatório'),
        situacao: Yup.string().required('Situação é obrigatório'),
        observacoes: Yup.string().required('Observações é obrigatório'),
        
        estado_civil_id:Yup.string(),

        logradouro: Yup.string().required('Logradouro obrigatório'),
        numero: Yup.string().required('Numero obrigatório'),
        bairro: Yup.string().required('Bairro obrigatório'),
        complemento: Yup.string().required('Complemento obrigatório'),
        cep: Yup.string().required('Cep obrigatório'),
        cidade: Yup.string().required('Cidade obrigatório'),
        estado: Yup.string().max(2).min(2).required('Estado obrigatório')
      });

      await schema.validate({
        logradouro,
        numero,
        bairro,
        complemento,
        cep,
        cidade,
        estado,

        nome,
        rg,
        cpf,
        email,
        nome_pai,
        nome_mae,
        data_nascimento,
        religiao,
        previdencia_social,
        bpc,
        sindicalizado,
        situacao,
        observacoes,
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

     const tipoDePessoa = await api.get<TipoDePessoa>('/tipo_de_pessoa_by_name/Cliente');

      await api.post('/pessoa', {
        nome,
        rg,
        cpf,
        email,
        nome_pai,
        nome_mae,
        data_nascimento,
        religiao,
        previdencia_social,
        bpc,
        sindicalizado,
        situacao,
        observacoes,
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
        <h1>Cadastro dos clientes</h1>

        <Form ref={formRef} onSubmit={handleFormSubmit} >
          <InputStyle>
            <Input name="nome" label="Nome" placeholder="Insira o nome...." />
            <Input name="rg" label="RG" placeholder="Insira o RG...." />
            <Input name="cpf" label="CPF" placeholder="Insira o CPF...." />
            <Input name="email" label="E-mail" placeholder="Insira o e-mail...." />
            <Input name="nome_pai" label="Nome do pai" placeholder="Insira o nome do pai...." />
            <Input name="nome_mae" label="Nome da mãe" placeholder="Insira o nome da mãe...." />
            <Input name="data_nascimento" label="Data de nascimento" placeholder="Insira a data de nascimento...." />
            <Input name="religiao" label="Religião" placeholder="Insira a religião...." />
            <Input name="previdencia_social" label="Previdência Social" placeholder="Insira a previdência social...." />
            <Input name="bpc" label="BPC" placeholder="Insira o BPC...." />
            <Input name="sindicalizado" label="Sindicalizado" placeholder="Insira o sindicalizado...." />
            <Input name="situacao" label="Situação" placeholder="Insira a situação...." />
            <Input name="observacoes" label="Observação" placeholder="Insira a observação...." />
            
            <AsyncSelect name="estado_civil_id" options={civil} label="Estado Civil" />
            
            <Input name="logradouro" label="Rua" placeholder="Insira o nome da rua... " />
            <Input name="numero" label="Número" placeholder="Insira o número da casa... " />
            <Input name="bairro" label="Bairro" placeholder="Insira o nome do bairro... " />
            <Input name="complemento" label="Complemento" placeholder="Insira o complemento... " />
            <Input name="cep" label="Cep" placeholder="Insira o cep... " />
            <Input name="cidade" label="Cidade" placeholder="Insira o nome da cidade... " />
            <Input name="estado" label="Estado" placeholder="Insira o nome do estado... " />
          </InputStyle>
          <Button type="submit">Cadastro</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ClientRegistration;
