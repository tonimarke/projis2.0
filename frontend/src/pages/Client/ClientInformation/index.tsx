import { FormHandles, Scope } from '@unform/core';
import { useRouteMatch } from 'react-router';
import { useEffect, useRef, useState } from 'react';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';

import { Container, Content, InputGroup, Form, ButtonGroup, Row } from './styles';

interface IdParams {
  id: string;
}

interface ICliente {
  nome: string;
  rg: string;
  cpf: string;
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

function ClientInformation() {
  const formRef = useRef<FormHandles>(null);
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

  return (
    <Container>
      <Menu />
      <Content>
        <Form initialData={cliente} ref={formRef} onSubmit={() => {}}>
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

            <Button className="last-button" type="submit">Delete</Button>
          </ButtonGroup>

        </Form>
      </Content>
    </Container>
  );
};

export default ClientInformation;
