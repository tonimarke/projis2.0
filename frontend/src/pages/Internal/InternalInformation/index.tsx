import { useCallback, useEffect, useRef, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import api from '../../../services/api';

import Menu from '../../../components/Menu';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import ButtonBack from '../../../components/ButtonBack';
import AsyncSelect from '../../../components/AsyncSelect';

import { Container, Content, InputGroup, Form, ButtonGroup, Row } from './styles';
import getValidationErrors from '../../../utils/getValidationErrors';

interface Tipo_de_Pessoa {
  id: string;
  tipo_de_pessoa: string;
}

interface Options {
  label: string;
  value: string;
}

interface IdParams {
  id: string;
} 

interface IPessoa {
  id: string;
  nome: string;
  rg: string;
  cpf: string;
}

interface InternalInformationFormData {
  id: string;
  nome: string;
  rg: string;
  cpf: string;
  tipo_de_pessoa_id: string;
}

function InternalInformation() {
  const [cargos, setCargos] = useState<Options[]>([]);
  const [pessoa, setPessoa] = useState<IPessoa>();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();
  const { params } = useRouteMatch<IdParams>();

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
    
    async function loadPessoa() {
      const response = await api.get<IPessoa>(`/pessoa/${params.id}`);

      setPessoa(response.data);
    }

    loadTipoDePessoa();
    loadPessoa();
  }, [params.id]);

  const handleFormSubmit = useCallback(async ({ nome, rg, cpf, tipo_de_pessoa_id }: InternalInformationFormData, { reset }) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        nome: Yup.string().required('Nome é obrigatorio'),
        rg: Yup.string().required('RG obrigatorio'),
        cpf: Yup.string().required('CPF obrigatorio'),
        tipo_de_pessoa_id: Yup.string().required('Cargo obrigatorio'),
      });

      await schema.validate({
        nome,
        rg,
        cpf,
        tipo_de_pessoa_id
      });

      await api.put('/pessoa', {
        id: pessoa?.id,
        nome,
        rg,
        cpf,
        tipo_de_pessoa_id
      });

      reset();
      history.goBack();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return
      }
    }
  }, [history, pessoa?.id]);

  const handleDeleteInternal = useCallback(async (id: string | undefined) => {
    if (id) {
      await api.delete(`pessoa/${id}`)
      
      history.goBack();
    }
  }, [history]);

  return (
    <Container>
      <Menu />
      <Content>
      <ButtonBack />
        <Form initialData={pessoa} ref={formRef} onSubmit={handleFormSubmit}>
        <Row>
          <InputGroup lg={4}>
            <Input name="nome" label="Nome do Cliente" placeholder="Nome do cliente" />
          </InputGroup>
          <InputGroup lg={4}>
            <Input name="rg" label="RG" placeholder="RG do cliente" />
          </InputGroup>
          <InputGroup lg={4}>
            <Input name="cpf" label="CPF" placeholder="CPF do cliente" />
          </InputGroup>
          <InputGroup>
            <AsyncSelect name="tipo_de_pessoa_id" options={cargos} label="CARGO" />
          </InputGroup>
        </Row>

          <ButtonGroup>
            <Button className="first-button" type="submit">Salvar</Button>

            <Button className="last-button" type="button" onClick={() => handleDeleteInternal(pessoa?.id)}>Delete</Button>
          </ButtonGroup>

        </Form>
      </Content>
    </Container>
  );
};

export default InternalInformation;
