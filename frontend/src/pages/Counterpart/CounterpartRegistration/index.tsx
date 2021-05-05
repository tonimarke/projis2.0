import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, InputStyle } from './styles';

function CounterpartRegistration() {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Cadastro da parte contraria</h1>

        <Form ref={formRef} onSubmit={() => {}} >
          <InputStyle>
            <Input name="nome" label="Nome" placeholder="Insira o nome...." />
            <Input name="rg" label="RG" placeholder="Insira o RG...." />
            <Input name="cpf" label="CPF" placeholder="Insira o CPF...." />
            <Input name="email" label="E-mail" placeholder="Insira o E-mail...." />
            <Input name="ocupacao" label="Ocupação" placeholder="Insira a ocupação" />
          </InputStyle>
          <Button type="submit">Cadastro</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default CounterpartRegistration;
