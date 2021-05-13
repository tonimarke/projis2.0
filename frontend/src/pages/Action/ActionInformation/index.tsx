import { FormHandles } from '@unform/core';
import { useEffect, useRef, useState } from 'react';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import AsyncSelect from '../../../components/AsyncSelect';

import { Container, Content, InputGroup, Form, ButtonGroup } from './styles';

interface Tipo_de_Acao {
  id: string;
  nome: string;
}

interface Options {
  label: string;
  value: string;
}

function ActionInformation() {
  const formRef = useRef<FormHandles>(null);
  const [acoes, setAcoes] = useState<Options[]>([]);

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
        <Form ref={formRef} onSubmit={() => {}}>
          <InputGroup lg={4}>
            <Input name="data" label="Data de Atendimento" placeholder="Insira a data de atendimento...." />
          </InputGroup>
          <InputGroup lg={4}>
            <Input name="cliente" label="Nome do cliente" placeholder="Insira o nome do cliente...." />
          </InputGroup>
          <InputGroup lg={4}>
            <Input name="contraria" label="Nome da parte contraria" placeholder="Insira a parte contraria...." />
          </InputGroup>
          <InputGroup>
            <AsyncSelect name="acao" options={acoes} label="Ações" />
          </InputGroup>
          <InputGroup>
            <Input className="input-providencia" name="providencia" label="Providências" placeholder="Insira a providência...." />
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

export default ActionInformation;
