import React, { useState } from 'react';
import { Alert } from 'react-native';

import Background from '../../components/Background';
import api from '../../services/api';
import { unformatNumber } from '../../util/format';

import ShippingAddressForm from '../../forms/ShippingAddressForm';

import { Container, FormContainer } from './styles';
import translate from '../../locales';

export default function ShippingAddress() {
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(address, haveAddress) {
    setLoading(true);
    const formattedAddress = {
      ...address,
      postal_code: unformatNumber(address.postal_code),
    };

    if (!haveAddress) {
      await api.post('address', formattedAddress);
      Alert.alert(
        translate('add_address_success_title'),
        translate('add_address_success'),
      );

      setLoading(false);
    } else {
      await api.put('address', formattedAddress);
      Alert.alert(
        translate('save_address_success_title'),
        translate('save_address_success'),
      );
      setLoading(false);
    }
  }

  return (
    <Background>
      <Container>
        <FormContainer>
          <ShippingAddressForm
            handleFormSubmit={handleFormSubmit}
            loading={loading}
          />
        </FormContainer>
      </Container>
    </Background>
  );
}
