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

interface EstadoCivil {
  id: string;
  estado_civil: string;
}

interface Options {
  label: string;
  value: string;
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
  return (
    <Container>
      <Menu />
      <Content>
        <h1>Cadastro da parte contrária</h1>

        <Form ref={formRef} onSubmit={() => {}} >
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

export default CounterpartRegistration;
