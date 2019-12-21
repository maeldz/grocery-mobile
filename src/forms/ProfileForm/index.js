import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';

import translate, { dateLanguage } from '../../locales';

import { unformatNumber, formatPhone, formatCPF } from '../../util/format';

import {
  SubmitButton,
  Input,
  GenderContainer,
  ButtonContainer,
  GenderLabel,
  TextButton,
  TextButtonText,
  DateInput,
} from './styles';

import {
  handleChangeText,
  handleBlur,
  handleSubmit,
} from '../validation/validations/profileValidation';

export default function ProfileForm({ handleFormSubmit, loading }) {
  const profile = useSelector(state => state.user.profile);

  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [form, setForm] = useState({
    name: profile.name,
    lastName: profile.last_name,
    phone: formatPhone(profile.phone),
    gender: profile.gender,
    birthday: format(parseISO(profile.birthday), 'PPP', {
      locale: dateLanguage,
    }),
    birthdayFormatted: profile.birthday,
    cpf: formatCPF(profile.cpf),
    email: profile.email,
    oldPassword: '',
    password: '',
    passwordConfirmation: '',
  });

  const lastNameRef = useRef();
  const phoneRef = useRef();
  const birthdayRef = useRef();
  const cpfRef = useRef();
  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();

  async function handleDateChange(date) {
    if (date) {
      const dateFormatted = format(date, 'PPP', {
        locale: dateLanguage,
      });

      await onChangeText('birthday', dateFormatted);

      setForm({
        ...form,
        birthday: dateFormatted,
        birthdayFormatted: format(date, "yyyy-MM-dd'T00:00:00'xxx"),
      });
    }
  }

  async function onChangeText(id, value) {
    const { errors, text } = await handleChangeText(form, id, value);
    if (errors) {
      setFieldErrors(errors);
    } else {
      if (id === 'oldPassword') {
        const { oldPassword, password, ...rest } = fieldErrors;
        setFieldErrors(rest);
      } else if (id === 'password') {
        const { password, passwordConfirmation, ...rest } = fieldErrors;
        setFieldErrors(rest);
      } else {
        const { [id]: _, ...rest } = fieldErrors;
        setFieldErrors(rest);
      }
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
      handleFormSubmit({
        ...form,
        phone: unformatNumber(form.phone),
        cpf: unformatNumber(form.cpf),
      });
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
        icon="user"
        placeholder={translate('first_name_placeholder')}
        autoCorrect={false}
        autoCapitalize="words"
        onChangeText={text => onChangeText('name', text)}
        onBlur={() => onBlur('name')}
        value={form.name}
        returnKeyType="next"
        onSubmitEditing={() => lastNameRef.current.focus()}
        error={fieldErrors.name && touched.name && fieldErrors.name}
      />
      <Input
        icon="user"
        placeholder={translate('last_name_placeholder')}
        autoCorrect={false}
        autoCapitalize="words"
        onChangeText={text => onChangeText('lastName', text)}
        onBlur={() => onBlur('lastName')}
        value={form.lastName}
        returnKeyType="next"
        onSubmitEditing={() => phoneRef.current.focus()}
        error={fieldErrors.lastName && touched.lastName && fieldErrors.lastName}
      />
      <Input
        icon="phone"
        placeholder={translate('phone_placeholder')}
        keyboardType="phone-pad"
        maxLength={15}
        autoCorrect={false}
        onChangeText={text => onChangeText('phone', text)}
        onBlur={() => onBlur('phone')}
        value={form.phone}
        returnKeyType="next"
        onSubmitEditing={() => birthdayRef.current.focus()}
        error={fieldErrors.phone && touched.phone && fieldErrors.phone}
      />
      <GenderContainer>
        <GenderLabel>{translate('gender_label')}</GenderLabel>
        <ButtonContainer>
          <TextButton
            onPress={() => {
              setForm({ ...form, gender: 'm' });
            }}>
            <TextButtonText disabled={form.gender === 'f'} color="#2196f3">
              {translate('male_button')}
            </TextButtonText>
          </TextButton>
          <TextButton
            onPress={() => {
              setForm({ ...form, gender: 'f' });
            }}>
            <TextButtonText disabled={form.gender === 'm'} color="#ff4081">
              {translate('female_button')}
            </TextButtonText>
          </TextButton>
        </ButtonContainer>
      </GenderContainer>
      <DateInput
        icon="birthday-cake"
        placeholder={translate('birthday_placeholder')}
        autoCorrect={false}
        onDateChange={handleDateChange}
        onBlur={() => onBlur('birthday')}
        value={form.birthday}
        returnKeyType="next"
        onSubmitEditing={() => cpfRef.current.focus()}
        error={fieldErrors.birthday && touched.birthday && fieldErrors.birthday}
      />
      <Input
        icon="id-card"
        placeholder={translate('national_id_placeholder')}
        maxLength={14}
        autoCorrect={false}
        keyboardType="numeric"
        onChangeText={text => onChangeText('cpf', text)}
        onBlur={() => onBlur('cpf')}
        value={form.cpf}
        returnKeyType="next"
        onSubmitEditing={() => emailRef.current.focus()}
        error={fieldErrors.cpf && touched.cpf && fieldErrors.cpf}
      />
      <Input
        icon="envelope"
        placeholder={translate('email_placeholder_2')}
        autoCorrect={false}
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
        placeholder={translate('old_password_placeholder')}
        ref={oldPasswordRef}
        onChangeText={text => onChangeText('oldPassword', text)}
        onBlur={() => onBlur('oldPassword')}
        value={form.oldPassword}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef.current.focus()}
        error={
          fieldErrors.oldPassword &&
          touched.oldPassword &&
          fieldErrors.oldPassword
        }
      />
      <Input
        icon="lock"
        secureTextEntry
        placeholder={translate('new_password_placeholder')}
        ref={passwordRef}
        onChangeText={text => onChangeText('password', text)}
        onBlur={() => onBlur('password')}
        value={form.password}
        returnKeyType="next"
        onSubmitEditing={() => passwordConfirmationRef.current.focus()}
        error={fieldErrors.password && touched.password && fieldErrors.password}
      />
      <Input
        icon="lock"
        secureTextEntry
        placeholder={translate('password_confirmation_placeholder')}
        ref={passwordConfirmationRef}
        onChangeText={text => onChangeText('passwordConfirmation', text)}
        onBlur={() => onBlur('passwordConfirmation')}
        value={form.passwordConfirmation}
        returnKeyType="send"
        onSubmitEditing={handleFormSubmit}
        error={
          fieldErrors.passwordConfirmation &&
          touched.passwordConfirmation &&
          fieldErrors.passwordConfirmation
        }
      />
      <SubmitButton onPress={onSubmit} loading={loading}>
        {translate('save_button')}
      </SubmitButton>
    </>
  );
}
