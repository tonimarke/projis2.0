import { FormHandles } from '@unform/core';
import { useEffect, useRef, useState } from 'react';

import api from '../../../services/api';

import AsyncSelect from '../../../components/AsyncSelect';
import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, InputGroup, Form, ButtonGroup } from './styles';

interface EstadoCivil {
  id: string;
  estado_civil: string;
}

interface Options {
  label: string;
  value: string;
}

function CounterpartInformation() {
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
            <Input name="ocupacao" label="Ocupação" placeholder="Ocupação" />
          </InputGroup>

          <InputGroup>
            <AsyncSelect name="estado_civil_id" options={civil} label="Estado Civil" />
          </InputGroup>
          <InputGroup>
            <Input name="tipo_de_pessoa" label="Cargo" placeholder="Cargo" />
          </InputGroup>
      
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

          <ButtonGroup>
            <Button className="first-button" type="submit">Salvar</Button>

            <Button className="last-button" type="submit">Delete</Button>
          </ButtonGroup>

        </Form>
      </Content>
    </Container>
  );
};

export default CounterpartInformation;
