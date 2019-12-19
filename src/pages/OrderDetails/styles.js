import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 15px 15px 30px;
`;

export const OrderDetailsContainer = styled.View``;

export const OrderInfo = styled.View`
  flex-direction: row;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;

export const OrderInfoLabelContainer = styled.View`
  flex: 0.5;
`;

export const OrderInfoLabel = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const OrderInfoContentContainer = styled.View`
  flex: 0.5;
`;

export const OrderInfoContent = styled.Text`
  font-weight: bold;
  color: ${colors.dark_gray};
  flex-shrink: 1;
`;

export const PaymentMethod = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;

export const PaymentMethodLabelContainer = styled.View`
  flex: 0.5;
`;

export const PaymentMethodLabel = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const PaymentMethodContentContainer = styled.View`
  flex: 0.5;
`;

export const PaymentMethodContent = styled.Text`
  font-weight: bold;
  color: ${colors.dark_gray};
  flex-shrink: 1;
`;

export const ShippingAddress = styled.View`
  flex-direction: row;
  padding: 10px 0;
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;
export const ShippingAddressLabelContainer = styled.View`
  flex: 0.5;
`;

export const ShippingAddressLabel = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const ShippingAddressContentContainer = styled.View`
  flex: 0.5;
`;

export const ShippingAddressContent = styled.Text`
  font-weight: bold;
  color: ${colors.dark_gray};
  flex-shrink: 1;
`;

export const CartDetails = styled.ScrollView`
  padding: 0 30px;
  margin-top: 30px;
`;

export const TableTitle = styled.Text`
  align-self: center;
  margin-bottom: 30px;
  font-size: 20px;
`;
