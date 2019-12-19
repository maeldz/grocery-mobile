import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import translate from '../../locales';

import colors from '../../styles/colors';
import mastercardLogo from '../../assets/mastercard-logo.png';
import visaLogo from '../../assets/visa-logo.png';
import amexLogo from '../../assets/amex-logo.png';

import {
  Container,
  BrandLogo,
  NumberContainer,
  NumberText,
  InfoContainer,
  NameContainer,
  NameLabel,
  NameText,
  ExpirationDateContainer,
  ExpirationDateLabel,
  ExpirationDateText,
} from './styles';

export default function CreditCard({ data, height }) {
  const { nameOnCard, brand, number, expirationMonth, expirationYear } = data;

  const brandLogo = {
    mc: mastercardLogo,
    visa: visaLogo,
    amex: amexLogo,
  };

  return (
    <Container height={height} style={styles.boxShadow}>
      <BrandLogo source={brandLogo[brand] || null} />
      <NumberContainer>
        <NumberText>{`•••• •••• •••• ${number.slice(-4)}`}</NumberText>
      </NumberContainer>
      <InfoContainer>
        <NameContainer>
          <NameLabel>{translate('name_on_card_label')}</NameLabel>
          <NameText>{nameOnCard}</NameText>
        </NameContainer>
        <ExpirationDateContainer>
          <ExpirationDateLabel>
            {translate('expiration_date_label')}
          </ExpirationDateLabel>
          <ExpirationDateText>{`${expirationMonth}/${expirationYear}`}</ExpirationDateText>
        </ExpirationDateContainer>
      </InfoContainer>
    </Container>
  );
}

const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
});

CreditCard.propTypes = {
  data: PropTypes.object.isRequired,
  height: PropTypes.number,
};

CreditCard.defaultProps = {
  height: null,
};
