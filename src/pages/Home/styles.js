import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import { darken } from 'polished';
import Swiper from 'react-native-swiper';
import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})``;

export const ImageSlide = styled(Swiper).attrs({
  autoplay: true,
  showsPagination: false,
  showsButtons: false,
  height: 220,
})``;

export const Banner = styled.Image`
  flex: 1;
  width: 100%;
`;

export const ListContainer = styled.View`
  padding: 0 5px;
  flex: 1;
`;

export const CategoriesHeaderText = styled.Text`
  margin: 10px 0 5px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
`;

export const CategoryList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})``;

export const Category = styled.View`
  align-self: stretch;
  align-items: center;
  margin: 5px;
`;

export const CategoryImageContainer = styled(BaseButton)`
  background: ${colors.primary};
  height: 84px;
  width: 84px;
  border-radius: 42px;
  align-items: center;
  justify-content: center;
`;

export const CategoryImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
`;

export const CategoryName = styled.Text``;

export const ProductsHeaderText = styled.Text`
  margin: 10px 0 5px;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
`;

export const ProductList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 2,
})``;

export const Product = styled.View`
  background: ${colors.white};
  border-radius: 4px;
  padding: 10px;
  flex: 0.5;
  align-items: center;
  margin: 3px;
`;

export const ImageContainer = styled.TouchableOpacity``;

export const ProductImage = styled.Image.attrs({ resizeMode: 'contain' })`
  width: 140;
  height: 140;
  margin-bottom: 5px;
`;

export const ProductTitle = styled.Text`
  margin: 5px 0;
  font-weight: bold;
`;

export const ProductInfoContainer = styled.View`
  align-self: stretch;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 8px;
`;

export const ProductUnit = styled.Text`
  color: ${colors.black};
`;

export const ProductPrice = styled.Text`
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
