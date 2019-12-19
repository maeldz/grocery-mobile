import React, { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

import translate, { dateLanguage } from '../../locales';

import { formatPrice } from '../../util/format';

import Background from '../../components/Background';

import Table from '../../components/Table';

import {
  Container,
  OrderDetailsContainer,
  OrderInfo,
  OrderInfoLabelContainer,
  OrderInfoLabel,
  OrderInfoContentContainer,
  OrderInfoContent,
  PaymentMethod,
  PaymentMethodLabelContainer,
  PaymentMethodLabel,
  PaymentMethodContentContainer,
  PaymentMethodContent,
  ShippingAddress,
  ShippingAddressLabelContainer,
  ShippingAddressLabel,
  ShippingAddressContentContainer,
  ShippingAddressContent,
  CartDetails,
  TableTitle,
} from './styles';

export default function OrderDetails({ navigation }) {
  const [tableData, setTableData] = useState({});
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    const orderDetailsFormatted = {
      ...navigation.getParam('order'),
      dateFormatted: format(
        parseISO(navigation.getParam('order').date),
        'PPPpp',
        { locale: dateLanguage },
      ),
    };

    setOrderDetails(orderDetailsFormatted);

    const tableHeader = [
      translate('product_label'),
      translate('content_label'),
      translate('quantity_label'),
      translate('price_label'),
    ];

    const tableRows = orderDetailsFormatted.order_details.map(order => [
      order.product.name,
      `${order.product.quantity} ${order.product.unit}`,
      order.quantity,
      formatPrice(order.total),
    ]);

    setTableData({ tableHeader, tableRows });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const paymentMethod = {
    credit_card: translate('credit_card'),
    cash: translate('cash'),
  };

  return (
    <Background>
      <Container>
        <OrderDetailsContainer>
          <OrderInfo>
            <OrderInfoLabelContainer>
              <OrderInfoLabel>
                {translate('order_details_label')}
              </OrderInfoLabel>
            </OrderInfoLabelContainer>
            <OrderInfoContentContainer>
              <OrderInfoContent>{`${translate('order_number_label')} ${
                orderDetails.id
              }\n${translate('placed_in_label')} ${
                orderDetails.dateFormatted
              }`}</OrderInfoContent>
            </OrderInfoContentContainer>
          </OrderInfo>
          <PaymentMethod>
            <PaymentMethodLabelContainer>
              <PaymentMethodLabel>
                {translate('payment_method_label')}
              </PaymentMethodLabel>
            </PaymentMethodLabelContainer>
            <PaymentMethodContentContainer>
              <PaymentMethodContent>
                {paymentMethod[orderDetails.payment_method]}
              </PaymentMethodContent>
            </PaymentMethodContentContainer>
          </PaymentMethod>
          <ShippingAddress>
            <ShippingAddressLabelContainer>
              <ShippingAddressLabel>
                {translate('delivery_address_label')}
              </ShippingAddressLabel>
            </ShippingAddressLabelContainer>
            <ShippingAddressContentContainer>
              <ShippingAddressContent>{`${translate('zipcode_label')}: ${
                orderDetails.ship_postal_code
              }\n${translate('address_label')}: ${orderDetails.ship_street}, ${
                orderDetails.ship_street_n
              } - ${orderDetails.ship_city}`}</ShippingAddressContent>
            </ShippingAddressContentContainer>
          </ShippingAddress>
        </OrderDetailsContainer>
        <CartDetails>
          <TableTitle>{translate('items_header')}</TableTitle>
          <Table header={tableData.tableHeader} rows={tableData.tableRows} />
        </CartDetails>
      </Container>
    </Background>
  );
}
