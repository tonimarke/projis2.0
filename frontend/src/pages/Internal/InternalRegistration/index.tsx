import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

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

interface Options {
  label: string;
  value: string;
}

interface InternalRegistrationFormData {
  nome: string;
  rg: string;
  cpf: string;
  cargo: string;
}

function InternalRegistration() {
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
;
  const handleSubmitForm = useCallback(async (data: InternalRegistrationFormData) => {
    console.log(data);

    /*
    try {
      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatorio'),
        rg: Yup.string().required('RG obrigatorio'),
        cpf: Yup.string().required('RG obrigatorio'),
        cargo: Yup.string().required('RG obrigatorio'),
      });
    } catch (err) {

    }
    */
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Cadastro dos internos</h1>

        <Form ref={formRef} onSubmit={handleSubmitForm} >
          <InputStyle>
            <Input name="nome" label="NOME" placeholder="Insira o nome...." />
            <Input name="rg" label="RG" placeholder="Insira o RG...." />
            <Input name="cpf" label="CPF" placeholder="Insira o CPF...." />
            <AsyncSelect name="cargo" options={cargos} label="CARGO" />
          </InputStyle>
          <Button type="submit">Cadastro</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default InternalRegistration;
