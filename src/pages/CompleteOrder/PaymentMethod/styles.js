import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import LottieView from 'lottie-react-native';

import Button from '../../../components/Button';
import cash from '../../../assets/animations/cash.json';
import noCreditCardSaved from '../../../assets/animations/noCreditCardSaved.json';
import creditCardIcon from '../../../assets/credit-card.png';
import cashIcon from '../../../assets/cash.png';
import colors from '../../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 20 },
})`
  background: ${colors.light_gray};
`;

export const PaymentMethodContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  height: 120px;
  margin-bottom: 20px;
`;

export const CashPayment = styled(BaseButton)`
  flex: 1;
  position: relative;
  background: ${colors.dark_green};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-right: 5px;
`;

export const CashContainer = styled.View`
  flex: 1;
  background: ${colors.white};
  padding: 8px;
  border-radius: 8px;
`;

export const CashAnimationContainer = styled.View`
  height: 200px;
`;

export const CashAnimation = styled(LottieView).attrs({
  resizeMode: 'contain',
  source: cash,
  autoPlay: true,
  loop: false,
})``;

export const CashPaymentText = styled.Text`
  color: ${colors.dark_purple};
  align-self: center;
`;

export const CreditCardPayment = styled(BaseButton)`
  flex: 1;
  background: ${colors.dark_blue};
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-left: 5px;
`;

export const MethodSelect = styled.View`
  position: absolute;
  right: 5px;
  top: 5px;
`;

export const IconContainer = styled.View`
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const CreditCardIcon = styled.Image.attrs({
  source: creditCardIcon,
})`
  width: 42px;
  height: 29px;
  margin-bottom: 5px;
`;

export const CashIcon = styled.Image.attrs({
  source: cashIcon,
})`
  width: 50px;
  height: 29px;
  margin-bottom: 5px;
`;

export const MethodTitle = styled.Text`
  color: ${colors.white};
  font-weight: bold;
`;

export const CreditCardContainer = styled.View`
  flex: 1;
  background: ${colors.white};
  padding: 8px;
  border-radius: 8px;
`;

export const PaymentMethodHeader = styled.Text`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 11px;
  text-transform: uppercase;
`;

export const SavedCardsList = styled.FlatList`
  background: ${colors.light_gray};
  padding: 20px 20px 10px;
  border-radius: 8px;
`;

export const CreditCardInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: ${colors.white};
  margin-bottom: 10px;
  border-radius: 4px;
  padding: 10px;
`;

export const CreditCardNumberContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const CreditCardSelect = styled(BaseButton)`
  margin-right: 5px;
`;

export const CreditCardNumber = styled.Text`
  margin-right: 5px;
`;

export const CreditCardBrand = styled.Image.attrs({ resizeMode: 'contain' })`
  height: 25px;
`;

export const CreditCardRemoveButton = styled(BaseButton)`
  background: ${colors.light_gray};
  padding: 8px;
  border-radius: 4px;
`;

export const NoCreditCardSaved = styled.View`
  background: ${colors.light_gray};
  padding: 0px 0px 20px;
  border-radius: 8px;
  margin-bottom: 10px;
`;

export const NoCreditCardSavedAnimationContainer = styled.View`
  height: 200px;
`;

export const NoCreditCardSavedAnimation = styled(LottieView).attrs({
  source: noCreditCardSaved,
  autoPlay: true,
  loop: false,
})``;

export const NoCreditCardSavedText = styled.Text`
  color: ${colors.dark_gray};
  font-weight: bold;
  align-self: center;
`;

export const AddCardButton = styled(BaseButton)`
  flex-direction: row;
  align-self: center;
  align-items: center;
  margin-top: 10px;
`;

export const AddCardText = styled.Text`
  margin-right: 5px;
  text-transform: uppercase;
  color: ${colors.dark_purple};
  font-weight: bold;
`;

export const FormContainer = styled.View`
  background: ${colors.light_gray};
  padding: 5px 5px 40px;
  border-radius: 8px;
  margin-top: 5px;
`;

export const ContinueButton = styled(Button)`
  margin-top: 40px;
  align-self: stretch;
`;
