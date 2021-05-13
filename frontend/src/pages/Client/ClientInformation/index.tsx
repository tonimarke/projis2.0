import { FormHandles } from '@unform/core';
import { useRef } from 'react';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import { Container, Content, InputGroup, Form, ButtonGroup } from './styles';

function ClientInformation() {
  const formRef = useRef<FormHandles>(null);
  return (
    <Container>
      <Menu />
      <Content>
        <Form ref={formRef} onSubmit={() => {}}>
          <InputGroup lg={6}>
            <Input name="Nome" label="Nome do Cliente" placeholder="Nome do cliente" />
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
            <Input name="estado_civil" label="Estado Civil" placeholder="Estado civil" />
          </InputGroup>
          <InputGroup>
            <Input name="tipo_de_pessoa" label="Cargo" placeholder="Cargo" />
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

export default ClientInformation;
