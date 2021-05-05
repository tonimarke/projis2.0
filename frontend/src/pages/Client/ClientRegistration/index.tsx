import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, InputStyle } from './styles';

function ClientRegistration() {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Cadastro dos clientes</h1>

        <Form ref={formRef} onSubmit={() => {}} >
          <InputStyle>
            <Input name="nome" label="Nome" placeholder="Insira o nome...." />
            <Input name="rg" label="RG" placeholder="Insira o RG...." />
            <Input name="cpf" label="CPF" placeholder="Insira o CPF...." />
            <Input name="email" label="E-mail" placeholder="Insira o e-mail...." />
            <Input name="pai" label="Nome do pai" placeholder="Insira o nome do pai...." />
            <Input name="mae" label="Nome da mãe" placeholder="Insira o nome da mãe...." />
            <Input name="nascimento" label="Data de nascimento" placeholder="Insira a data de nascimento...." />
            <Input name="religiao" label="Religião" placeholder="Insira a religião...." />
            <Input name="previdencia" label="Previdencia Social" placeholder="Insira a previdencia social...." />
            <Input name="bpc" label="BPC" placeholder="Insira o BPC...." />
            <Input name="sindicalizado" label="Sindicalizado" placeholder="Insira o sindicalizado...." />
            <Input name="situacao" label="Situação" placeholder="Insira a situação...." />
            <Input name="observacao" label="Observação" placeholder="Insira a observação...." />
          </InputStyle>
          <Button type="submit">Cadastro</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ClientRegistration;
