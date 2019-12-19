import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Image } from 'react-native';

import translate from '../../locales';
import SignInForm from '../../forms/SignInForm';

import Background from '../../components/Background';
import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/logo.png';

import { Container, FormContainer, SignLink, SignLinkText } from './styles';

export default function SignIn({ navigation }) {
  const dispatch = useDispatch();

  const loading = useSelector(state => state.auth.loading);

  function handleFormSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} />
        <FormContainer>
          <SignInForm handleFormSubmit={handleFormSubmit} loading={loading} />
        </FormContainer>
        <SignLink onPress={() => navigation.navigate('SignUp')}>
          <SignLinkText>{translate('create_account_button')}</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
