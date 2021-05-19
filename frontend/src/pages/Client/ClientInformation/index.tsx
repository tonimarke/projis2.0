import { FormHandles, Scope } from '@unform/core';
import { useHistory, useRouteMatch } from 'react-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';
import ButtonArrow  from '../../../components/ButtonBack';

import { Container, Content, InputGroup, Form, ButtonGroup, Row } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';

interface IdParams {
  id: string;
}

interface ICliente {
  id: string;
  nome: string;
  rg: string;
  cpf: string;
  email: string;
  estado_civil_id: string;
  nome_pai: string;
  nome_mae: string;
  data_nascimento: string;
  endereco_id: string;
  religiao: string;
  previdencia_social: string;
  bpc: string;
  sindicalizado: string;
  situacao: string;
  observacoes: string;
  inicio_vinculo: string;
  termino_vinculo: string;
  curso: string;
  periodo: string;
  profissao: string;
  oab: string;
  ocupacao: string;
  tipo_de_pessoa_id: string;
  endereco: {
    id: string;
    logradouro: string;
    numero: string;
    bairro: string;
    complemento: string;
    cep: string;
    cidade: string;
    estado: string;
  },
  estado_civil: {
    id: string;
    estado_civil: string;
  },
  tipo_de_pessoa: {
    id: string;
    tipo_de_pessoa: string;
  }
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

interface ClientInformationFormData {
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

  endereco: {
    logradouro: string;
    numero: string;
    bairro: string;
    complemento: string;
    cep: string;
    cidade: string;
    estado: string;
  }
}
function ClientInformation() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { params } = useRouteMatch<IdParams>();
  const [cliente, setCliente] = useState<ICliente>();

  const [civil, setCivil] = useState<Options[]>([]);
  const [tipoDePessoa, setTipoDePessoa] = useState<Options[]>([]);

  useEffect(() => {
    async function loadCliente() {
      const response = await api.get<ICliente>(`/pessoa/${params.id}`);
      
      setCliente(response.data)
    }

    async function loadData() {
      const [civilRes, tipoDePessoaRes] = await Promise.all([
        api.get<EstadoCivil[]>('/estados_civis'),
        api.get<TipoDePessoa[]>('/tipos_de_pessoas')
      ]);
      
      const civilOptions = civilRes.data.map(option => {
        return {
          label: option.estado_civil,
          value: option.id
        }
      });

      const tipoDePessoaOptions = tipoDePessoaRes.data.map(option => {
        return {
          label: option.tipo_de_pessoa,
          value: option.id,
        }
      });

      setCivil(civilOptions);
      setTipoDePessoa(tipoDePessoaOptions);
    }
  
    loadCliente();
    loadData();
  }, [params.id]);


  const handleFormSubmit = useCallback(async ({
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

    estado_civil_id,
    tipo_de_pessoa_id,

    endereco: {
      logradouro,
      numero,
      bairro,
      complemento,
      cep,
      cidade,
      estado
    }
  }: ClientInformationFormData, { reset }) => {
    /*
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
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return
      }
    }
    */
    
    await api.put('/endereco', {
      id: cliente?.endereco_id,
      logradouro,
      numero,
      bairro,
      complemento,
      cep,
      cidade,
      estado
    });

    await api.put('/pessoa', {
      id: cliente?.id,
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
      estado_civil_id,
      tipo_de_pessoa_id
    });
    
    reset();
    history.goBack()
  }, [cliente?.endereco_id, cliente?.id, history]);

  const handleDeleteClient = useCallback(async (id: string | undefined) => {
    if (id) {
      await api.delete(`pessoa/${id}`);

      history.goBack();
    }
  }, [history]);

  return (
    <Container>
      <Menu />
      <Content>
        <ButtonArrow />
        <Form initialData={cliente} ref={formRef} onSubmit={handleFormSubmit}>
          <Row>
            <InputGroup lg={6}>
              <Input name="nome" label="Nome do Cliente" placeholder="Nome do cliente" />
            </InputGroup>
            <InputGroup lg={3}>
              <Input name="rg" label="RG" placeholder="RG do cliente" />
            </InputGroup>
            <InputGroup lg={3}>
              <Input name="cpf" label="CPF" placeholder="CPF do cliente" />
            </InputGroup>
            <InputGroup>
              <Input name="email" label="Email" placeholder="Email do cliente" />
            </InputGroup>
            <InputGroup>
              <Input name="nome_pai" label="Nome do pai" placeholder="Pai do cliente" />
            </InputGroup>
            <InputGroup>
              <Input name="nome_mae" label="Nome da mãe" placeholder="Mãe do cliente" />
            </InputGroup>
            <InputGroup>
              <Input name="data_nascimento" label="Data de nascimento" placeholder="Data de nascimento" />
            </InputGroup>
            <InputGroup>
              <Input name="religiao" label="Religião" placeholder="Religião" />
            </InputGroup>

            <InputGroup>
              <AsyncSelect name="estado_civil_id" options={civil} label="Estado Civil" />
            </InputGroup>
            <InputGroup>
              <AsyncSelect name="tipo_de_pessoa_id" options={tipoDePessoa} label="Cargo" />
            </InputGroup>

            <InputGroup>
              <Input name="previdencia_social" label="Previdência Social" placeholder="Previdência Social" />
            </InputGroup>
            <InputGroup>
              <Input name="bpc" label="BPC" placeholder="BPC" />
            </InputGroup>
            <InputGroup>
              <Input name="sindicalizado" label="Sindicalizado" placeholder="Sindicalizado" />
            </InputGroup>
            <InputGroup>
              <Input name="situacao" label="Situação" placeholder="Situação" />
            </InputGroup>
            <InputGroup>
              <Input name="observacoes" label="Observações" placeholder="Observações" />
            </InputGroup>
            
            <Scope path="endereco">
              <InputGroup>
                <Input name="logradouro" label="Logradouro" placeholder="Logradouro" />
              </InputGroup>
              <InputGroup>
                <Input name="numero" label="Número" placeholder="Número" />
              </InputGroup>
              <InputGroup>
                <Input name="bairro" label="Bairro" placeholder="Bairro" />
              </InputGroup>
              <InputGroup>
                <Input name="complemento" label="Complemento" placeholder="Complemento" />
              </InputGroup>
              <InputGroup>
                <Input name="cep" label="CEP" placeholder="CEP" />
              </InputGroup>
              <InputGroup>
                <Input name="cidade" label="Cidade" placeholder="Cidade" />
              </InputGroup>
              <InputGroup>
                <Input name="estado" label="Estado" placeholder="Estado" />
              </InputGroup>
            </Scope>
          </Row>

          <ButtonGroup>
            <Button className="first-button" type="submit">Salvar</Button>

            <Button className="last-button" type="button" onClick={() => handleDeleteClient(cliente?.id)} >Delete</Button>
          </ButtonGroup>

        </Form>
      </Content>
    </Container>
  );
};

export default ClientInformation;
