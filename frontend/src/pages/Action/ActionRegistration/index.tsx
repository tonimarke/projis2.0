import { useCallback, useEffect, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';

import { Container, Content, InputStyle } from './styles';

interface Tipo_de_Acao {
  id: string;
  nome: string;
}

interface Options {
  label: string;
  value: string;
}

function ActionRegistration() {
  const [acoes, setAcoes] = useState<Options[]>([]);
  const formRef = useRef<FormHandles>(null);

  useEffect(() => {
    async function loadTipoDePessoa () {
      const response = await api.get<Tipo_de_Acao[]>('tipos_acoes');

      const options = response.data.map(option => {
        return {
          label: option.nome,
          value: option.id,
        };
      });

      setAcoes(options);
    }
    
    loadTipoDePessoa();
  }, []);

  return (
    <Container>
      <Menu />
      <Content>
        <h1>Cadastro das ações</h1>

        <Form ref={formRef} onSubmit={() => {}} >
          <InputStyle>
            <Input name="data" label="Data de Atendimento" placeholder="Insira a data de atendimento...." />
            <Input name="cliente" label="Nome do cliente" placeholder="Insira o nome do cliente...." />
            <Input name="contraria" label="Nome da parte contraria" placeholder="Insira a parte contraria...." />
            <AsyncSelect name="acao" options={acoes} label="Ações" />
            <Input className="input-providencia" name="providencia" label="Providências" placeholder="Insira a providência...." />
          </InputStyle>
          <Button type="submit">Cadastro</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ActionRegistration;
