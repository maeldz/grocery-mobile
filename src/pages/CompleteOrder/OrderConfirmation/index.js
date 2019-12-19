import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import translate from '../../../locales';

import Background from '../../../components/Background';

import { unformatNumber, unformatPrice } from '../../../util/format';
import api from '../../../services/api';

import CreditCard from '../../../components/CreditCard';

import {
  Container,
  CreditCardContainer,
  ShippingDetailsContainer,
  ShippingDetailsHeader,
  AddresseeContainer,
  AddresseeLabel,
  AddresseeText,
  AddressContainer,
  AddressLabel,
  AddressText,
  CityPostalCodeContainer,
  CityContainer,
  CityLabel,
  CityText,
  PostalCodeContainer,
  PostalCodeLabel,
  PostalCodeText,
  OrderSummaryContainer,
  OrderSummaryHeader,
  SubtotalContainer,
  SubtotalLabel,
  SubtotalText,
  DeliveryFeeContainer,
  DeliveryFeeLabel,
  DeliveryFeeText,
  TotalContainer,
  TotalLabel,
  TotalText,
  ConfirmButton,
} from './styles';

export default function OrderConfirmation({ navigation }) {
  const [loading, setLoading] = useState(false);

  const address = navigation.getParam('address');
  const orderDetails = navigation.getParam('orderDetails');
  const paymentMethod = navigation.getParam('paymentMethod');
  const creditCardInfo = navigation.getParam('creditCardInfo');

  const userId = useSelector(state => state.user.profile.id);

  const products = useSelector(state =>
    state.cart.map(product => ({
      product_id: product.id,
      quantity: product.amount,
      price: product.price,
      total: product.amount * product.price,
    })),
  );

  async function handleSubmit() {
    try {
      setLoading(true);
      if (paymentMethod === 'credit_card') {
        await api.post('orders', {
          user_id: userId,
          status: 'in_progress',
          addressee: address.addressee,
          ship_postal_code: unformatNumber(address.postal_code),
          ship_street: address.street,
          ship_street_n: address.street_n,
          ship_neighborhood: address.neighborhood,
          ship_city: address.city,
          ship_state: address.state,
          payment_method: paymentMethod,
          cc_brand: creditCardInfo.brand,
          cc_last_4_digits: creditCardInfo.number.slice(-4),
          payment_condition: 1,
          delivery_fee: unformatPrice(orderDetails.deliveryFee),
          products,
        });
      } else if (paymentMethod === 'cash') {
        await api.post('orders', {
          user_id: userId,
          status: 'in_progress',
          addressee: address.addressee,
          ship_postal_code: unformatNumber(address.postal_code),
          ship_street: address.street,
          ship_street_n: address.street_n,
          ship_neighborhood: address.neighborhood,
          ship_city: address.city,
          ship_state: address.state,
          payment_method: paymentMethod,
          payment_condition: 1,
          delivery_fee: unformatPrice(orderDetails.deliveryFee),
          products,
        });
      }
      setLoading(false);
      navigation.navigate('PaymentResult', { status: 'success' });
    } catch (err) {
      setLoading(false);
      navigation.navigate('PaymentResult', { status: 'failed' });
    }
  }

  return (
    <Background>
      <Container>
        {creditCardInfo && (
          <CreditCardContainer>
            <CreditCard data={creditCardInfo} height={150} />
          </CreditCardContainer>
        )}
        <ShippingDetailsContainer>
          <ShippingDetailsHeader>
            {translate('delivery_details_header')}
          </ShippingDetailsHeader>
          <AddresseeContainer>
            <AddresseeLabel>{translate('addressee_label')}</AddresseeLabel>
            <AddresseeText>{address.addressee}</AddresseeText>
          </AddresseeContainer>
          <AddressContainer>
            <AddressLabel>{translate('address_label')}</AddressLabel>
            <AddressText>{`${address.street}, ${
              address.street_n
            }`}</AddressText>
          </AddressContainer>
          <CityPostalCodeContainer>
            <CityContainer>
              <CityLabel>{translate('city_label')}</CityLabel>
              <CityText>{address.city}</CityText>
            </CityContainer>
            <PostalCodeContainer>
              <PostalCodeLabel>{translate('zipcode_label')}</PostalCodeLabel>
              <PostalCodeText>{address.postal_code}</PostalCodeText>
            </PostalCodeContainer>
          </CityPostalCodeContainer>
        </ShippingDetailsContainer>
        <OrderSummaryContainer>
          <OrderSummaryHeader>
            {translate('order_details_header')}
          </OrderSummaryHeader>
          <SubtotalContainer>
            <SubtotalLabel>{translate('subtotal_label')}</SubtotalLabel>
            <SubtotalText>{orderDetails.subtotal}</SubtotalText>
          </SubtotalContainer>
          <DeliveryFeeContainer>
            <DeliveryFeeLabel>
              {translate('delivery_fee_label')}
            </DeliveryFeeLabel>
            <DeliveryFeeText>{orderDetails.deliveryFee}</DeliveryFeeText>
          </DeliveryFeeContainer>
          <TotalContainer>
            <TotalLabel>{translate('total_label')}</TotalLabel>
            <TotalText>{orderDetails.total}</TotalText>
          </TotalContainer>
        </OrderSummaryContainer>
        <ConfirmButton loading={loading} onPress={handleSubmit}>
          {translate('confirm_button')}
        </ConfirmButton>
      </Container>
    </Background>
  );
}
