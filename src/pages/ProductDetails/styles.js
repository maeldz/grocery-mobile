import styled from 'styled-components/native';
import { darken } from 'polished';
import { BaseButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: { padding: 15 },
  showsVerticalScrollIndicator: false,
})`
  flex: 1;
`;

export const ProductImageContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const ProductImage = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 200px;
  height: 200px;
`;

export const ProductDetailsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductTitle = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const ProductInfo = styled.Text`
  font-weight: bold;
  color: ${colors.red};
`;

export const ProductDescription = styled.View``;

export const ProductDescriptionText = styled.Text`
  margin-top: 10px;
  line-height: 20px;
`;

export const AddButton = styled(BaseButton)`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: 20px;
`;

export const ProductAmount = styled.View`
  padding: 10px;
  background: ${darken(0.03, colors.primary)};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-transform: uppercase;
  text-align: center;
  font-size: 12px;
  color: ${colors.white};
  font-weight: bold;
`;
