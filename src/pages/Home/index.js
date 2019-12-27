import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { YellowBox, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import translate from '../../locales';

import CategoryListPlaceholder from '../../components/Placeholders/CategoryList';
import ImageSlidePlaceholder from '../../components/Placeholders/ImageSlide';
import ProductListPlaceholder from '../../components/Placeholders/ProductList';

YellowBox.ignoreWarnings(['VirtualizedLists']);

import { addToCartRequest } from '../../store/modules/cart/actions';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import Background from '../../components/Background';

import {
  Wrapper,
  Container,
  ImageSlide,
  Banner,
  ListContainer,
  CategoriesHeaderText,
  CategoryList,
  Category,
  CategoryImageContainer,
  CategoryImage,
  CategoryName,
  ProductsHeaderText,
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
} from './styles';
import colors from '../../styles/colors';

export default function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;
      return sumAmount;
    }, {}),
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function getData() {
      const productsResponse = await api.get('/products');

      const categoriesResponse = await api.get('/categories');

      const bannersResponse = await api.get('/banners');

      const productData = productsResponse.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.promo_price || product.price),
      }));

      const bannerData = bannersResponse.data.map(banner => ({
        id: banner.id,
        url: banner.image.url,
      }));

      setProducts(productData);
      setCategories(categoriesResponse.data);
      setBanners(bannerData);
    }

    getData();
  }, []);

  function handleAddProduct(product) {
    dispatch(addToCartRequest(product));
  }

  function renderCategory({ item }) {
    return (
      <Category key={item.id}>
        <CategoryImageContainer
          onPress={() =>
            navigation.navigate('ProductsByCategory', {
              categoryId: item.id,
              CategoryName: item.name,
            })
          }>
          <CategoryImage
            source={{
              uri: item.image.url,
            }}
          />
        </CategoryImageContainer>
        <CategoryName>{item.name}</CategoryName>
      </Category>
    );
  }

  function renderProduct({ item }) {
    return (
      <Product style={styles.boxShadow} key={item.id}>
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

  return (
    <Background>
      <Wrapper>
        <Container>
          {banners.length ? (
            <ImageSlide>
              {banners.map(banner => (
                <Banner key={banner.id} source={{ uri: banner.url }} />
              ))}
            </ImageSlide>
          ) : (
            <ImageSlidePlaceholder />
          )}

          <ListContainer>
            <CategoriesHeaderText>
              {translate('category_list_header')}
            </CategoriesHeaderText>
            {categories.length ? (
              <CategoryList
                data={categories}
                keyExtractor={category => String(category.id)}
                renderItem={renderCategory}
              />
            ) : (
              <CategoryList
                data={Array.from({ length: 10 }).map((u, i) => i)}
                keyExtractor={category => String(category)}
                renderItem={CategoryListPlaceholder}
              />
            )}

            <ProductsHeaderText>
              {translate('product_list_header')}
            </ProductsHeaderText>
            {products.length ? (
              <ProductList
                data={products}
                extraData={amount}
                keyExtractor={item => String(item.id)}
                renderItem={renderProduct}
              />
            ) : (
              <ProductList
                data={Array.from({ length: 20 }).map((u, i) => i)}
                keyExtractor={item => String(item)}
                renderItem={ProductListPlaceholder}
              />
            )}
          </ListContainer>
        </Container>
      </Wrapper>
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
