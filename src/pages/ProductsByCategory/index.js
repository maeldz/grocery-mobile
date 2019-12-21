import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import translate from '../../locales';

import ProductListPlaceholder from '../../components/Placeholders/ProductList';

import { addToCartRequest } from '../../store/modules/cart/actions';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import Background from '../../components/Background';

import {
  Container,
  ListContainer,
  ProductList,
  Product,
  ImageContainer,
  ProductImage,
  ProductTitle,
  ProductInfoContainer,
  ProductUnit,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
  NoProducts,
  AnimationContainer,
  EmptyBoxAnimation,
  NoProductsTextContainer,
  NoProductsText,
  NoProductsSubText,
} from './styles';
import colors from '../../styles/colors';

export default function ProductsByCategory({ navigation }) {
  const [products, setProducts] = useState(null);

  const dispatch = useDispatch();

  const categoryId = navigation.getParam('categoryId');

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  );

  function handleAddProduct(product) {
    dispatch(addToCartRequest(product));
  }

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get(`products?category=${categoryId}`);

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.promo_price || product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, [categoryId]);

  function renderProduct({ item }) {
    return (
      <Product style={styles.boxShadow} key={item.id}>
        <ImageContainer
          onPress={() =>
            navigation.navigate('ProductDetails', { product: item })
          }>
          <ProductImage
            source={{
              uri: item.image.url.replace('localhost', '192.168.0.5'),
            }}
          />
        </ImageContainer>
        <ProductTitle>{item.name}</ProductTitle>
        <ProductInfoContainer>
          <ProductUnit>{`${item.quantity} ${item.unit}`}</ProductUnit>
          <ProductPrice>{item.priceFormatted}</ProductPrice>
        </ProductInfoContainer>
        <AddButton onPress={() => handleAddProduct(item)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={18} />
            <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
          </ProductAmount>
          <AddButtonText>{translate('add_button')}</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  function RenderList() {
    if (products) {
      if (products.length) {
        return (
          <ProductList
            extraData={amount}
            data={products}
            keyExtractor={item => String(item.id)}
            renderItem={renderProduct}
          />
        );
      }

      return (
        <NoProducts>
          <AnimationContainer>
            <EmptyBoxAnimation />
          </AnimationContainer>
          <NoProductsTextContainer>
            <NoProductsText>
              Não há produtos para esse departamento
            </NoProductsText>
            <NoProductsSubText>
              Por favor, tente novamente mais tarde.
            </NoProductsSubText>
          </NoProductsTextContainer>
        </NoProducts>
      );
    }
    return (
      <ProductList
        data={Array.from({ length: 10 }).map((u, i) => i)}
        keyExtractor={item => String(item)}
        renderItem={ProductListPlaceholder}
      />
    );
  }

  return (
    <Background>
      <Container>
        <ListContainer>
          <RenderList />
        </ListContainer>
      </Container>
    </Background>
  );
}
const styles = StyleSheet.create({
  boxShadow: {
    shadowColor: colors.shadow,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
