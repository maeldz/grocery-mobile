import styled from 'styled-components/native';
import LottieView from 'lottie-react-native';

import watermelon from '../../assets/animations/watermelon.json';
import colors from '../../styles/colors.js';

export const CartContainer = styled.SafeAreaView`
  flex: 1;
`;

export const MainContainer = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 15 },
})``;

export const Products = styled.View``;

export const Product = styled.View`
  background: ${colors.white};
  border: 1px solid ${colors.border};
  border-radius: 4px;
  margin-bottom: 5px;
`;

export const ProductDetails = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
`;

export const ProductImage = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 60px;
  height: 60px;
`;

export const ProductInfo = styled.View`
  align-items: center;
`;

export const ProductTitle = styled.Text`
  font-weight: bold;
`;

export const ProductWeight = styled.Text`
  font-weight: bold;
`;

export const ProductRemoveButton = styled.TouchableOpacity``;

export const ProductControls = styled.View`
  flex: 1;
  background: ${colors.light_gray};
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({ editable: false })`
  min-width: 52px;
  background: ${colors.white};
  border-radius: 4px;
  padding: 5px;
  border: 1px solid ${colors.border};
  margin: 0 5px;
`;

export const ProductSubTotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  flex: 1;
  text-align: right;
`;

export const DetailsContainer = styled.View`
  height: 100px;
  padding: 10px;
  background: ${colors.primary};
`;

export const Subtotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const SubtotalLabel = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
`;

export const SubTotalValue = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
`;

export const DeliveryCharges = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DeliveryChargesLabel = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.red};
`;

export const DeliveryChargesValue = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.red};
`;

export const GrandTotal = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const GrandTotalLabel = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
`;

export const GrandTotalValue = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
`;

export const CartFooter = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  height: 55px;
  background: ${colors.primary};
  padding: 10px;
`;

export const ConfirmOrderText = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: ${colors.white};
`;

export const ViewDetailsButton = styled.TouchableOpacity`
  position: absolute;
  left: 50%;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
`;

export const Total = styled.Text`
  font-size: 15px;
  margin-right: 5px;
  font-weight: bold;
  color: ${colors.white};
`;

export const EmptyCart = styled.View`
  height: 70%;
  align-items: center;
  justify-content: center;
`;

export const WatermelonAnimation = styled(LottieView).attrs({
  resizeMode: 'cover',
  source: watermelon,
  autoPlay: true,
  loop: false,
})``;

export const EmptyCartTextContainer = styled.View`
  align-items: center;
  margin-top: 200px;
`;

export const EmptyCartText = styled.Text`
  font-size: 20px;
  font-family: 'CerebriSans-ExtraBold';
`;

export const EmptyCartSubText = styled.Text`
  font-size: 14px;
  font-family: 'CerebriSans-Regular';
`;
