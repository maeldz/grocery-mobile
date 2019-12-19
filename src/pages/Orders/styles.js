import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import emptyBox from '../../assets/animations/emptyBox.json';
import colors from '../../styles/colors.js';

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const OrderList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
})``;

export const Order = styled.View`
  align-items: center;
  background: ${colors.white};
  border-radius: 4px;
  padding: 15px;
  margin-bottom: 10px;
`;

export const OrderInfo = styled.View`
  align-items: center;
`;

export const OrderNumber = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const OrderDate = styled.Text`
  font-size: 13px;
  font-style: italic;
`;

export const OrderStatusIcon = styled.View`
  margin: 10px 0px;
`;

export const OrderStatusText = styled.Text`
  font-size: 22px;
  margin-bottom: 30px;
`;

export const DetailsButton = styled.TouchableOpacity`
  align-self: flex-start;
`;

export const DetailsText = styled.Text`
  font-size: 12px;
  text-transform: uppercase;
  color: ${colors.primary};
`;

export const NoOrders = styled.View`
  padding: 0 20px;
`;

export const AnimationContainer = styled.View`
  flex: 1;
`;

export const EmptyBoxAnimation = styled(LottieView).attrs({
  resizeMode: 'cover',
  source: emptyBox,
  autoPlay: true,
  loop: false,
})`
  height: 100%;
`;

export const NoOrdersTextContainer = styled.View``;

export const NoOrdersText = styled.Text`
  text-align: center;
  align-self: center;
  font-size: 20px;
  font-family: 'CerebriSans-ExtraBold';
`;

export const NoOrdersSubText = styled.Text`
  text-align: center;
  align-self: center;
  font-size: 14px;
  font-family: 'CerebriSans-Regular';
`;
