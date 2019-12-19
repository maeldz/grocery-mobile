import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { Dimensions } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

import colors from '../../styles/colors';
const { height, width } = Dimensions.get('window');

export const Container = styled(LinearGradient).attrs({
  colors: [colors.blue, colors.light_blue],
  useAngle: true,
  angle: 35,
})`
  justify-content: space-between;
  height: ${props => props.height || 0.35 * height};
  width: ${props => props.width || 0.6 * width};
  padding: 12px;
  border-radius: 10px;
`;

export const BrandLogo = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 15%;
  height: 15%;
`;

export const NumberContainer = styled.View`
  align-items: stretch;
`;

export const NumberText = styled.Text`
  letter-spacing: ${RFPercentage(0.6)};
  font-size: ${RFPercentage(2)};
  text-align: center;
  font-family: 'FjallaOne-Regular';
  color: ${colors.white};
`;

export const InfoContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
`;

export const NameContainer = styled.View`
  justify-content: center;
`;

export const NameLabel = styled.Text`
  font-size: 10px;
  font-family: 'FjallaOne-Regular';
  color: ${colors.white};
  text-transform: uppercase;
`;

export const NameText = styled.Text`
  font-family: 'FjallaOne-Regular';
  color: ${colors.white};
  text-transform: uppercase;
`;

export const ExpirationDateContainer = styled.View``;

export const ExpirationDateLabel = styled.Text`
  font-size: 10px;
  font-family: 'FjallaOne-Regular';
  color: ${colors.white};
  text-transform: uppercase;
`;

export const ExpirationDateText = styled.Text`
  font-family: 'FjallaOne-Regular';
  color: ${colors.white};
  text-transform: uppercase;
`;
