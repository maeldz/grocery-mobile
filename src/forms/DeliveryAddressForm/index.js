import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import translate from '../../locales';

import { SubmitButton, Input } from './styles';
import api from '../../services/api';
import { cepMask } from '../validation/masks';

import {
  handleChangeText,
  handleBlur,
  handleSubmit,
} from '../validation/validations/deliveryAddressValidation';

export default function DeliveryAddressForm({ handleFormSubmit, loading }) {
  const [lockForm, setLockForm] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});
  const [haveAddress, setHaveAddress] = useState(false);
  const [touched, setTouched] = useState({});
  const [form, setForm] = useState({
    addressee: '',
    postal_code: '',
    street: '',
    street_n: '',
    neighborhood: '',
    city: '',
    state: '',
    complement: '',
    reference: '',
  });

  const addresseeRef = useRef();
  const postalCodeRef = useRef();
  const streetRef = useRef();
  const streetNumberRef = useRef();
  const neighborhoodRef = useRef();
  const cityRef = useRef();
  const stateRef = useRef();
  const complementRef = useRef();
  const referenceRef = useRef();

  const userName = useSelector(state => state.user.profile.name);

  useEffect(() => {
    async function checkHaveAddress() {
      setLockForm(true);
      const response = await api.get('address');

      if (response.data) {
        setHaveAddress(true);

        const data = {
          ...response.data,
          postal_code: cepMask(response.data.postal_code),
          addressee: userName,
        };

        setForm(data);
        setLockForm(false);
      } else {
        setLockForm(false);
      }
    }

    checkHaveAddress();
  }, [userName]);

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
      handleFormSubmit(form, haveAddress);
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
        editable={!lockForm}
        placeholder={translate('addressee_placeholder')}
        maxLength={50}
        autoCorrect={false}
        autoCapitalize="words"
        ref={addresseeRef}
        isFocused={() => addresseeRef.current.isFocused()}
        onChangeText={text => onChangeText('addressee', text)}
        onBlur={() => onBlur('addressee')}
        value={form.addressee}
        returnKeyType="next"
        onSubmitEditing={() => postalCodeRef.current.focus()}
        error={
          fieldErrors.addressee && touched.addressee && fieldErrors.addressee
        }
      />
      <Input
        editable={!lockForm}
        placeholder={translate('zipcode_placeholder')}
        maxLength={9}
        autoCorrect={false}
        keyboardType="numeric"
        isFocused={() => postalCodeRef.current.isFocused()}
        onChangeText={text => onChangeText('postal_code', text)}
        onBlur={() => onBlur('postal_code')}
        value={form.postal_code}
        ref={postalCodeRef}
        returnKeyType="next"
        onSubmitEditing={() => streetRef.current.focus()}
        error={
          fieldErrors.postal_code &&
          touched.postal_code &&
          fieldErrors.postal_code
        }
      />
      <Input
        editable={!lockForm}
        placeholder={translate('street_placeholder')}
        maxLength={100}
        autoCorrect={false}
        autoCapitalize="words"
        isFocused={() => streetRef.current.isFocused()}
        onChangeText={text => onChangeText('street', text)}
        onBlur={() => onBlur('street')}
        value={form.street}
        ref={streetRef}
        returnKeyType="next"
        onSubmitEditing={() => streetNumberRef.current.focus()}
        error={fieldErrors.street && touched.street && fieldErrors.street}
      />
      <Input
        editable={!lockForm}
        placeholder={translate('street_n_placeholder')}
        maxLength={10}
        autoCorrect={false}
        isFocused={() => streetNumberRef.current.isFocused()}
        onChangeText={text => onChangeText('street_n', text)}
        onBlur={() => onBlur('street_n')}
        value={form.street_n}
        ref={streetNumberRef}
        returnKeyType="next"
        onSubmitEditing={() => neighborhoodRef.current.focus()}
        error={fieldErrors.street_n && touched.street_n && fieldErrors.street_n}
      />
      <Input
        editable={!lockForm}
        placeholder={translate('neighborhood_placeholder')}
        maxLength={50}
        autoCorrect={false}
        autoCapitalize="words"
        isFocused={() => neighborhoodRef.current.isFocused()}
        onChangeText={text => onChangeText('neighborhood', text)}
        onBlur={() => onBlur('neighborhood')}
        value={form.neighborhood}
        ref={neighborhoodRef}
        returnKeyType="next"
        onSubmitEditing={() => cityRef.current.focus()}
        error={
          fieldErrors.neighborhood &&
          touched.neighborhood &&
          fieldErrors.neighborhood
        }
      />
      <Input
        editable={!lockForm}
        placeholder={translate('city_placeholder')}
        maxLength={50}
        autoCorrect={false}
        autoCapitalize="words"
        isFocused={() => cityRef.current.isFocused()}
        onChangeText={text => onChangeText('city', text)}
        onBlur={() => onBlur('city')}
        value={form.city}
        ref={cityRef}
        returnKeyType="next"
        onSubmitEditing={() => stateRef.current.focus()}
        error={fieldErrors.city && touched.city && fieldErrors.city}
      />
      <Input
        editable={!lockForm}
        placeholder={translate('state_placeholder')}
        maxLength={2}
        autoCorrect={false}
        isFocused={() => stateRef.current.isFocused()}
        autoCapitalize="characters"
        onChangeText={text => onChangeText('state', text)}
        onBlur={() => onBlur('state')}
        value={form.state}
        ref={stateRef}
        returnKeyType="next"
        onSubmitEditing={() => complementRef.current.focus()}
        error={fieldErrors.state && touched.state && fieldErrors.state}
      />
      <Input
        editable={!lockForm}
        placeholder={translate('complement_placeholder')}
        autoCorrect={false}
        autoCapitalize="words"
        isFocused={() => complementRef.current.isFocused()}
        onChangeText={text => onChangeText('complement', text)}
        onBlur={() => onBlur('complement')}
        value={form.complement}
        ref={complementRef}
        returnKeyType="next"
        onSubmitEditing={() => referenceRef.current.focus()}
        error={
          fieldErrors.complement && touched.complement && fieldErrors.complement
        }
      />
      <Input
        editable={!lockForm}
        placeholder={translate('reference_placeholder')}
        autoCorrect={false}
        autoCapitalize="words"
        isFocused={() => referenceRef.current.isFocused()}
        onChangeText={text => onChangeText('reference', text)}
        onBlur={() => onBlur('reference')}
        value={form.reference}
        ref={referenceRef}
        returnKeyType="send"
        onSubmitEditing={onSubmit}
        error={
          fieldErrors.reference && touched.reference && fieldErrors.reference
        }
      />
      <SubmitButton onPress={onSubmit} loading={loading}>
        {translate('continue_button')}
      </SubmitButton>
    </>
  );
}
