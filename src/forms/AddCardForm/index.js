import React, { useState, useRef } from 'react';
import { StyleSheet } from 'react-native';
import validate from 'card-validator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import translate from '../../locales';

import { SaveCardButton, Input } from './styles';

import {
  handleChangeText,
  handleBlur,
  handleSubmit,
} from '../validation/validations/addCardValidation';
import colors from '../../styles/colors';

export default function AddCardForm({ handleFormSubmit, loading }) {
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [form, setForm] = useState({
    nameOnCard: '',
    number: '',
    expirationDate: '',
    cvv: '',
  });

  const nameOnCardRef = useRef();
  const numberRef = useRef();
  const expirationDateRef = useRef();
  const cvvRef = useRef();

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
      handleFormSubmit({
        ...form,
        brand: validate.number(form.number).card
          ? validate.number(form.number).card.type
          : 'other',
      });
      setForm({
        nameOnCard: '',
        number: '',
        expirationDate: '',
        cvv: '',
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
        placeholder={translate('name_on_card_placeholder')}
        autoCapitalize="words"
        autoCorrect={false}
        ref={nameOnCardRef}
        onChangeText={text => onChangeText('nameOnCard', text)}
        onBlur={() => onBlur('nameOnCard')}
        value={form.nameOnCard}
        returnKeyType="next"
        onSubmitEditing={() => numberRef.current.focus()}
        error={
          fieldErrors.nameOnCard && touched.nameOnCard && fieldErrors.nameOnCard
        }
      />
      <Input
        keyboardType="numeric"
        placeholder={translate('number_placeholder')}
        autoCorrect={false}
        maxLength={19}
        ref={numberRef}
        onChangeText={text => onChangeText('number', text)}
        onBlur={() => onBlur('number')}
        value={form.number}
        returnKeyType="next"
        onSubmitEditing={() => expirationDateRef.current.focus()}
        error={fieldErrors.number && touched.number && fieldErrors.number}
      />
      <Input
        keyboardType="numeric"
        placeholder={translate('expiration_date_placeholder')}
        autoCorrect={false}
        maxLength={5}
        ref={expirationDateRef}
        onChangeText={text => onChangeText('expirationDate', text)}
        onBlur={() => onBlur('expirationDate')}
        value={form.expirationDate}
        returnKeyType="next"
        onSubmitEditing={() => cvvRef.current.focus()}
        error={
          fieldErrors.expirationDate &&
          touched.expirationDate &&
          fieldErrors.expirationDate
        }
      />
      <Input
        keyboardType="numeric"
        placeholder={translate('cvv_placeholder')}
        autoCorrect={false}
        ref={cvvRef}
        onChangeText={text => onChangeText('cvv', text)}
        onBlur={() => onBlur('cvv')}
        value={form.cvv}
        returnKeyType="send"
        onSubmitEditing={handleFormSubmit}
        error={fieldErrors.cvv && touched.cvv && fieldErrors.cvv}
      />
      <SaveCardButton onPress={onSubmit} style={styles.buttonShadow}>
        <Icon name="floppy" size={25} color="#666672" />
      </SaveCardButton>
    </>
  );
}

const styles = StyleSheet.create({
  buttonShadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
