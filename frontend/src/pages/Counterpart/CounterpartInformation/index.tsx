import { useCallback, useEffect, useRef, useState } from 'react';
import { FormHandles, Scope } from '@unform/core';
import { useHistory, useRouteMatch } from 'react-router';

import api from '../../../services/api';

import AsyncSelect from '../../../components/AsyncSelect';
import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ButtonArrow  from '../../../components/ButtonBack';

import { Container, Content, InputGroup, Form, ButtonGroup, Row } from './styles';

interface IdParams {
  id: string;
}

interface IPartContraria {
  id: string;
  nome: string;
  rg: string;
  cpf: string;
  ocupacao: string;

  estado_civil_id: string;
  tipo_de_pessoa_id: string;
  endereco_id: string;

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

interface CounterInformationFormData {
  nome: string;
  rg: string;
  cpf: string;
  ocupacao: string;

  estado_civil_id: string;
  tipo_de_pessoa_id: string;

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

function CounterpartInformation() {
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { params } = useRouteMatch<IdParams>();
  const [partContraria, setPartContraria] = useState<IPartContraria>();
  
  const [civil, setCivil] = useState<Options[]>([]);
  const [tipoDePessoa, setTipoDePessoa] = useState<Options[]>([]);

  useEffect(() => {
    async function loadParteContraria() {
      const response = await api.get(`/pessoa/${params.id}`)
      
      setPartContraria(response.data);
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

    loadParteContraria();
    loadData();
  }, [params.id]);

  const handleFormSubmit = useCallback(async ({
    nome,
    rg,
    cpf,
    ocupacao,

    estado_civil_id,
    tipo_de_pessoa_id,

    endereco: {
      logradouro,
      numero,
      bairro,
      complemento,
      cep,
      cidade,
      estado,
    }
  }: CounterInformationFormData) => {
    await api.put('/endereco', {
      id: partContraria?.endereco_id,
      logradouro,
      numero,
      bairro,
      complemento,
      cep,
      cidade,
      estado
    });

    await api.put('/pessoa', {
      id: partContraria?.id,
      nome,
      rg,
      cpf,
      ocupacao,
      estado_civil_id,
      tipo_de_pessoa_id,
    });

  }, [partContraria?.endereco_id, partContraria?.id]);

  const handleDeleteCounterPart = useCallback(async (id: string | undefined) => {
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
        <Form initialData={partContraria} ref={formRef} onSubmit={handleFormSubmit}>
          <Row>
            <InputGroup lg={4}>
              <Input name="nome" label="Nome do Cliente" placeholder="Nome do cliente" />
            </InputGroup>
            <InputGroup lg={4}>
              <Input name="rg" label="RG" placeholder="RG do cliente" />
            </InputGroup>
            <InputGroup lg={4}>
              <Input name="cpf" label="CPF" placeholder="CPF do cliente" />
            </InputGroup>
            <InputGroup>
              <Input name="ocupacao" label="Ocupação" placeholder="Ocupação" />
            </InputGroup>

            <InputGroup>
              <AsyncSelect name="estado_civil_id" options={civil} label="Estado Civil" />
            </InputGroup>
            <InputGroup>
              <AsyncSelect name="tipo_de_pessoa_id" options={tipoDePessoa} label="Cargo" />
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

            <Button className="last-button" type="button" onClick={() => handleDeleteCounterPart(partContraria?.id)} >Delete</Button>
          </ButtonGroup>
        </Form>
      </Content>
    </Container>
  );
};

export default CounterpartInformation;
