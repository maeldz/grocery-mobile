import React, { useState, useRef } from 'react';

import { SubmitButton, Input } from './styles';

import {
  handleChangeText,
  handleBlur,
  handleSubmit,
} from '../validation/validations/signInValidation';
import translate from '../../locales';

export default function SignInForm({ handleFormSubmit, loading }) {
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const emailRef = useRef();
  const passwordRef = useRef();

  async function onChangeText(id, value) {
    const { errors, text } = await handleChangeText(form, id, value);
    if (errors) {
      setFieldErrors(errors);
    } else {
      const { [id]: _, ...rest } = fieldErrors;
      setFieldErrors(rest);
    }

    setForm({ ...form, [id]: text });
  }

  async function onBlur(id) {
    if (!touched[id]) {
      setTouched({ ...touched, [id]: true });

      const errors = await handleBlur(form);

      if (errors) {
        setFieldErrors(errors);
      } else {
        const { [id]: _, ...rest } = fieldErrors;
        setFieldErrors(rest);
      }
    }
  }

  async function onSubmit() {
    const errors = await handleSubmit(form);

    if (!errors) {
      handleFormSubmit(form);
    } else {
      let alltouched;
      Object.keys(errors).forEach(
        key => (alltouched = { ...alltouched, [key]: true }),
      );
      setTouched(alltouched);
      setFieldErrors(errors);
    }
  }

  return (
    <>
      <Input
        icon="envelope"
        keyboardType="email-address"
        placeholder={translate('email_placeholder')}
        autoCapitalize="none"
        autoCorrect={false}
        ref={emailRef}
        onChangeText={text => onChangeText('email', text)}
        onBlur={() => onBlur('email')}
        value={form.email}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        error={fieldErrors.email && touched.email && fieldErrors.email}
      />
      <Input
        icon="lock"
        secureTextEntry
        placeholder={translate('password_placeholder')}
        ref={passwordRef}
        onChangeText={text => onChangeText('password', text)}
        onBlur={() => onBlur('password')}
        value={form.password}
        returnKeyType="send"
        onSubmitEditing={handleFormSubmit}
        error={fieldErrors.password && touched.password && fieldErrors.password}
      />
      <SubmitButton onPress={onSubmit} loading={loading}>
        {translate('sign_in_button')}
      </SubmitButton>
    </>
  );
}
