import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Background from '../../components/Background';
import { signUpRequest } from '../../store/modules/auth/actions';

import SignUpForm from '../../forms/SignUpForm';

import logo from '../../assets/logo.png';

import {
  Container,
  Image,
  FormContainer,
  SignLink,
  SignLinkText,
} from './styles';
import translate from '../../locales';

export default function SignUp({ navigation }) {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  function handleFormSubmit({
    name,
    lastName,
    phone,
    cpf,
    gender,
    birthday,
    email,
    password,
  }) {
    dispatch(
      signUpRequest(
        name,
        lastName,
        phone,
        cpf,
        gender,
        birthday,
        email,
        password,
      ),
    );
  }

  return (
    <Background>
      <Container>
        <FormContainer>
          <Image source={logo} />
          <SignUpForm handleFormSubmit={handleFormSubmit} loading={loading} />
          <SignLink onPress={() => navigation.navigate('SignIn')}>
            <SignLinkText>
              {translate('i_already_have_an_account_button')}
            </SignLinkText>
          </SignLink>
        </FormContainer>
      </Container>
    </Background>
  );
}
