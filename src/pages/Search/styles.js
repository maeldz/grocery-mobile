import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.View``;

export const SearchBarContainer = styled.View`
  padding: 10px 10px 0;
  background: ${colors.white};
`;

export const SearchBar = styled.View`
  padding: 0 15px;
  border: 1px solid ${colors.border};
  border-bottom-width: ${props => (props.focused ? 2 : 1)};
  border-bottom-color: ${props =>
    props.focused ? colors.primary : colors.border};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SearchBarInput = styled.TextInput`
  flex: 1;
  font-size: 15px;
`;

export const SearchLoading = styled.View`
  margin-left: 10px;
`;

export const SearchResultList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 10, paddingTop: 10 },
})``;

export const Product = styled.View`
  flex-direction: row;
  background: ${colors.white};
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const ImageContainer = styled.TouchableOpacity``;

export const ProductImage = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 100;
  height: 100;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ProductInfo = styled.View`
  flex-direction: row;
`;

export const ProductUnit = styled.Text`
  font-weight: bold;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  color: ${colors.red};
`;

export const AddButton = styled(BaseButton)`
  background: ${colors.primary};
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: auto;
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
  font-weight: bold;
  font-size: 12px;
  color: ${colors.white};
`;

export const NoProducts = styled.View`
  margin-top: 50px;
  padding: 0 20px;
`;

export const NoProductsTextContainer = styled.View``;

export const NoProductsText = styled.Text`
  text-align: center;
  align-self: center;
  font-size: 20px;
  font-family: 'CerebriSans-ExtraBold';
`;

export const NoProductsSubText = styled.Text`
  text-align: center;
  align-self: center;
  font-size: 14px;
  font-family: 'CerebriSans-Regular';
`;
