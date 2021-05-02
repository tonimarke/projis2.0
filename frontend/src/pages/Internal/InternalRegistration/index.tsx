import { useEffect, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';

import { Container, Content, InputStyle } from './styles';

import api from '../../../services/api';

interface Tipo_de_Pessoa {
  id: string;
  tipo_de_pessoa: string;
}

function InternalRegistration() {
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    api.get<Tipo_de_Pessoa[]>('tipos_de_pessoas').then(cargo => {
      const tipos = cargo.data;
      formRef.current?.setData({ cargo: tipos });
    });
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Cadastro dos internos</h1>

        <Form ref={formRef} onSubmit={() => {}} >
          <InputStyle>
            <Input name="nome" label="NOME" placeholder="Insira o nome...." />
            <Input name="rg" label="RG" placeholder="Insira o RG...." />
            <Input name="cpf" label="CPF" placeholder="Insira o CPF...." />
            <AsyncSelect name="cargo" option="" label="CARGO" />
          </InputStyle>
          <Button>Cadastro</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default InternalRegistration;
