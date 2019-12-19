import styled from 'styled-components/native';

import Button from '../../../components/Button';
import colors from '../../../styles/colors';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const CreditCardContainer = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const ShippingDetailsContainer = styled.View``;

export const ShippingDetailsHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AddresseeContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
  margin-bottom: 10px;
`;

export const AddresseeLabel = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.border};
`;

export const AddresseeText = styled.Text`
  font-size: 15px;
`;

export const AddressContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
  margin-bottom: 10px;
`;

export const AddressLabel = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.border};
`;

export const AddressText = styled.Text`
  font-size: 15px;
`;

export const CityPostalCodeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const CityContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;

export const CityLabel = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.border};
`;

export const CityText = styled.Text`
  font-size: 15px;
`;

export const PostalCodeContainer = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${colors.border};
`;

export const PostalCodeLabel = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${colors.border};
`;

export const PostalCodeText = styled.Text`
  font-size: 15px;
`;

export const OrderSummaryContainer = styled.View`
  margin-top: 20px;
`;

export const OrderSummaryHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SubtotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubtotalLabel = styled.Text`
  line-height: 20px;
`;

export const SubtotalText = styled.Text`
  line-height: 20px;
`;

export const DeliveryFeeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DeliveryFeeLabel = styled.Text`
  line-height: 20px;
`;

export const DeliveryFeeText = styled.Text`
  line-height: 20px;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const TotalLabel = styled.Text`
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
`;

export const TotalText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  line-height: 20px;
`;

export const ConfirmButton = styled(Button)`
  margin-top: 40px;
  align-self: stretch;
`;
