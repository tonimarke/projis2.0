import { useEffect, useRef, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { FormHandles } from '@unform/core';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';

import { Container, Content, InputGroup, Form, ButtonGroup, Row } from './styles';

interface Tipo_de_Pessoa {
  id: string;
  tipo_de_pessoa: string;
}

interface Options {
  label: string;
  value: string;
}

interface IdParams {
  id: string;
} 

interface IPessoa {
  nome: string;
  rg: string;
  cpf: string;
}

function InternalInformation() {
  const [cargos, setCargos] = useState<Options[]>([]);
  const [pessoa, setPessoa] = useState<IPessoa>();
  const formRef = useRef<FormHandles>(null);
  const { params } = useRouteMatch<IdParams>();

  useEffect(() => {
    async function loadTipoDePessoa () {
      const response = await api.get<Tipo_de_Pessoa[]>('tipos_de_pessoas');

      const options = response.data.map(option => {
        return {
          label: option.tipo_de_pessoa,
          value: option.id,
        };
      });

      setCargos(options);
    }
    
    async function loadPessoa() {
      const response = await api.get<IPessoa>(`/pessoa/${params.id}`);

      setPessoa(response.data);
    }

    loadTipoDePessoa();
    loadPessoa();
  }, [params.id]);

  return (
    <Container>
      <Menu />
      <Content>
        <Form initialData={pessoa} ref={formRef} onSubmit={() => {}}>
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
            <AsyncSelect name="cargo" options={cargos} label="CARGO" />
          </InputGroup>
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

export default InternalInformation;
