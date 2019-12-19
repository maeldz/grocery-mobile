import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  padding: 10px;
`;

export const ProfileCard = styled(BaseButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary};
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 20px;
`;

export const IconContainer = styled.View`
  height: 60px;
  width: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  background: ${colors.white};
`;

export const ProfileLabel = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;

export const ShippingAddressCard = styled(BaseButton)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary};
  border-radius: 4px;
  padding: 20px;
`;

export const ShippingAddressLabel = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-weight: bold;
`;
