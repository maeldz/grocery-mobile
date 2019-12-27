import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { parseISO } from 'date-fns';

import translate from '../../locales';

import Timer from '../../components/Timer';

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
  PriceContainer,
  FromPrice,
  ToPrice,
  AddButton,
  ProductAmount,
  ProductAmountText,
  AddButtonText,
  NoOffers,
  AnimationContainer,
  EmptyBoxAnimation,
  NoOffersTextContainer,
  NoOffersText,
  NoOffersSubText,
} from './styles';
import colors from '../../styles/colors';

export default function Offers({ navigation }) {
  const [offers, setOffers] = useState(null);

  const dispatch = useDispatch();

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  );

  function handleAddProduct(product) {
    dispatch(addToCartRequest(product));
  }

  function onTimerFinish(id) {
    setOffers(offers.filter(offer => offer.id !== id));
  }

  useEffect(() => {
    async function loadOffers() {
      const response = await api.get('offers');

      const data = response.data.map(offer => ({
        ...offer,
        fromFormatted: formatPrice(offer.from),
        toFormatted: formatPrice(offer.to),
        product: {
          ...offer.product,
          priceFormatted: formatPrice(offer.product.price),
        },
      }));
      setOffers(data);
    }

    loadOffers();
  }, []);

  function renderProduct({ item }) {
    return (
      <Product style={styles.boxShadow} key={item.id}>
        <Timer
          onTimerFinish={onTimerFinish}
          offerId={item.id}
          finalDate={parseISO(item.expiration_date)}
        />
        <ImageContainer
          onPress={() =>
            navigation.navigate('ProductDetails', { product: item.product })
          }>
          <ProductImage
            source={{
              uri: item.product.image.url,
            }}
          />
        </ImageContainer>
        <ProductTitle>{item.product.name}</ProductTitle>
        <ProductInfoContainer>
          <ProductUnit>{`${item.quantity} ${item.unit}`}</ProductUnit>
          <PriceContainer>
            <FromPrice>{item.fromFormatted}</FromPrice>
            <ToPrice>{item.toFormatted}</ToPrice>
          </PriceContainer>
        </ProductInfoContainer>
        <AddButton onPress={() => handleAddProduct(item.product)}>
          <ProductAmount>
            <Icon name="add-shopping-cart" color="#FFF" size={18} />
            <ProductAmountText>
              {amount[item.product.id] || 0}
            </ProductAmountText>
          </ProductAmount>
          <AddButtonText>{translate('add_button')}</AddButtonText>
        </AddButton>
      </Product>
    );
  }

  function RenderList() {
    if (offers) {
      if (offers.length) {
        return (
          <ProductList
            extraData={amount}
            data={offers}
            keyExtractor={item => String(item.id)}
            renderItem={renderProduct}
          />
        );
      }

      return (
        <NoOffers>
          <AnimationContainer>
            <EmptyBoxAnimation />
          </AnimationContainer>
          <NoOffersTextContainer>
            <NoOffersText>{translate('no_offers_text')}</NoOffersText>
            <NoOffersSubText>{translate('no_offers_sub_text')}</NoOffersSubText>
          </NoOffersTextContainer>
        </NoOffers>
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
