import { useCallback, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { FiLock, FiMail } from 'react-icons/fi';
import * as Yup from 'yup';

import { useAuth } from '../../hook/AuthContext'

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';


interface SignInFormData {
  email: string;
  senha: string;
}

function SignIn() {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSubit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('E-mail obrigatorio'),
        senha: Yup.string().required('Senha obrigatorio'),
      });

      await schema.validate(data, {
        abortEarly: false
      });

      await signIn({
        email: data.email,
        senha: data.senha
      });

      history.push('/dashboard');
    } catch (err) {      
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);

        return;
      }
    }
  }, [history, signIn]);

  return (
    <Container>
      <img src={logoImg} alt="projis"/>
      <Form ref={formRef} onSubmit={handleSubit}>
        <h1>Projis</h1>

        <Input name="email" icon={FiMail} placeholder="E-mail" />

        <Input name="senha" icon={FiLock} type="password" autoComplete="off" placeholder="Senha" />

        <Button type="submit">Entrar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
