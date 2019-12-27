import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ActivityIndicator, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import translate from '../../locales';

import Background from '../../components/Background';

import { formatPrice } from '../../util/format';
import { addToCartRequest } from '../../store/modules/cart/actions';

import {
  Container,
  SearchBarContainer,
  SearchBar,
  SearchBarInput,
  SearchLoading,
  SearchResultList,
  Product,
  ImageContainer,
  ProductImage,
  ProductDetails,
  ProductName,
  ProductInfo,
  ProductUnit,
  ProductPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
  NoProducts,
  NoProductsTextContainer,
  NoProductsText,
  NoProductsSubText,
} from './styles';
import api from '../../services/api';
import colors from '../../styles/colors';

export default function Search({ navigation }) {
  const [searchResult, setSearchResult] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searching, setSearching] = useState(false);
  const [focused, setFocused] = useState(false);

  const dispatch = useDispatch();

  const timerRef = useRef();

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  );

  function handleAddProduct(product) {
    dispatch(addToCartRequest(product));
  }

  function handleChangeText(text) {
    setSearching(false);
    setSearchText(text);

    timerRef.current && clearTimeout(timerRef.current);

    if (text.length > 1) {
      timerRef.current = setTimeout(() => setSearching(true), 3000);
    }
  }

  useEffect(() => {
    async function search() {
      const response = await api.get(`products?search=${searchText}`);

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.promo_price || product.price),
      }));

      setSearchResult(data);
      setSearching(false);
    }
    if (searching) {
      search();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searching]);

  function renderProduct({ item }) {
    return (
      <Product style={styles.boxShadow}>
        <ImageContainer
          onPress={() =>
            navigation.navigate('ProductDetails', { product: item })
          }>
          <ProductImage
            source={{
              uri: item.image.url,
            }}
          />
        </ImageContainer>
        <ProductDetails>
          <ProductName>{item.name}</ProductName>
          <ProductInfo>
            <ProductUnit>{`${item.quantity} ${item.unit}`}</ProductUnit>
            <Text> / </Text>
            <ProductPrice>{item.priceFormatted}</ProductPrice>
          </ProductInfo>
          <AddButton onPress={() => handleAddProduct(item)}>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={18} />
              <ProductAmountText>{amount[item.id] || 0}</ProductAmountText>
            </ProductAmount>
            <AddButtonText>{translate('add_button')}</AddButtonText>
          </AddButton>
        </ProductDetails>
      </Product>
    );
  }

  function RenderList() {
    if (searchResult) {
      if (searchResult.length) {
        return (
          <SearchResultList
            data={searchResult}
            keyExtractor={item => String(item.id)}
            renderItem={renderProduct}
          />
        );
      }

      return (
        <NoProducts>
          <NoProductsTextContainer>
            <NoProductsText>
              {translate('no_search_results_text')}
            </NoProductsText>
            <NoProductsSubText>
              {translate('no_search_results_sub_text')}
            </NoProductsSubText>
          </NoProductsTextContainer>
        </NoProducts>
      );
    }

    return null;
  }

  return (
    <Background>
      <Container>
        <SearchBarContainer>
          <SearchBar focused={focused}>
            <SearchBarInput
              placeholder={translate('search_placeholder')}
              onChangeText={handleChangeText}
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
              value={searchText}
            />
            {searching && (
              <SearchLoading>
                <ActivityIndicator size="small" color="#3c8f2e" />
              </SearchLoading>
            )}
          </SearchBar>
        </SearchBarContainer>
        <RenderList />
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
