import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import Button from '../../../components/Button';

import paymentSuccess from '../../../assets/animations/paymentSuccess.json';
import paymentFailed from '../../../assets/animations/paymentFailed.json';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex: 1;
  background: ${props =>
    props.status === 'success' ? colors.success : colors.failed};
  justify-content: center;
  padding: 30px;
`;

export const SuccessAnimationContainer = styled.View`
  height: 180px;
`;

export const SuccessAnimation = styled(LottieView).attrs({
  resizeMode: 'contain',
  source: paymentSuccess,
  autoPlay: true,
  loop: false,
})``;

export const SucessTextContainer = styled.View`
  margin-bottom: 30px;
`;

export const SucessTextHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
  align-self: center;
`;

export const SucessText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: ${colors.white};
  text-align: center;
  align-self: center;
`;

export const FailedAnimationContainer = styled.View`
  height: 180px;
`;

export const FailedAnimation = styled(LottieView).attrs({
  resizeMode: 'contain',
  source: paymentFailed,
  autoPlay: true,
  loop: false,
})``;

export const FailedTextContainer = styled.View`
  margin-bottom: 30px;
`;

export const FailedTextHeader = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.white};
  align-self: center;
`;

export const FailedText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: ${colors.white};
  text-align: center;
  align-self: center;
`;

export const ContinueButton = styled(Button)`
  align-self: stretch;
`;

export const TryAgainButton = styled.TouchableOpacity`
  align-items: center;
  margin-top: 10px;
`;

export const TryAgainText = styled.Text`
  color: ${colors.white};
`;
