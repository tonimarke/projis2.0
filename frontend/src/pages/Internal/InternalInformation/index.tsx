import { useEffect, useRef, useState } from 'react';
import { FormHandles } from '@unform/core';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';

import { Container, Content, InputGroup, Form, ButtonGroup } from './styles';

interface Tipo_de_Pessoa {
  id: string;
  tipo_de_pessoa: string;
}

interface Options {
  label: string;
  value: string;
}

function InternalInformation() {
  const [cargos, setCargos] = useState<Options[]>([]);
  const formRef = useRef<FormHandles>(null);

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
    
    loadTipoDePessoa();
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <Form ref={formRef} onSubmit={() => {}}>
          <InputGroup lg={4}>
            <Input name="Nome" label="Nome do Cliente" placeholder="Nome do cliente" />
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
