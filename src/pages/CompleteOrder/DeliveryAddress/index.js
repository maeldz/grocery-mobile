import React, { useState } from 'react';

import Background from '../../../components/Background';
import api from '../../../services/api';
import { unformatNumber } from '../../../util/format';

import DeliveryAddressForm from '../../../forms/DeliveryAddressForm';

import { Container, FormContainer } from './styles';

export default function DeliveryAddress({ navigation }) {
  const [loading, setLoading] = useState(false);

  const orderDetails = navigation.getParam('orderDetails');

  async function handleFormSubmit(address, haveAddress) {
    setLoading(true);
    if (!haveAddress) {
      const formattedAddress = {
        ...address,
        postal_code: unformatNumber(address.postal_code),
      };

      await api.post('address', formattedAddress);
      setLoading(false);
      navigation.navigate('PaymentMethod', { address, orderDetails });
    }
    setLoading(false);
    navigation.navigate('PaymentMethod', { address, orderDetails });
  }

  return (
    <Background>
      <Container>
        <FormContainer>
          <DeliveryAddressForm
            handleFormSubmit={handleFormSubmit}
            loading={loading}
          />
        </FormContainer>
      </Container>
    </Background>
  );
}
