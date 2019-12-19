import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Header from '../components/Header';

import HomePage from '../pages/Home';
import CartPage from '../pages/Cart';
import OffersPage from '../pages/Offers';
import OrdersPage from '../pages/Orders';
import MyAccountPage from '../pages/MyAccount';
import ProfilePage from '../pages/Profile';
import ShippingAddressPage from '../pages/ShippingAddress';
import OrderDetailsPage from '../pages/OrderDetails';
import SearchPage from '../pages/Search';
import ProductDetailsPage from '../pages/ProductDetails';
import ProductsByCategoryPage from '../pages/ProductsByCategory';
import DeliveryAddressPage from '../pages/CompleteOrder/DeliveryAddress';
import PaymentMethodPage from '../pages/CompleteOrder/PaymentMethod';
import OrderConfirmationPage from '../pages/CompleteOrder/OrderConfirmation';
import PaymentResultPage from '../pages/CompleteOrder/PaymentResult';
import translate from '../locales';

const Home = {
  screen: createStackNavigator(
    {
      Home: HomePage,
      Cart: CartPage,
      Offers: OffersPage,
      Orders: OrdersPage,
      MyAccount: MyAccountPage,
      Profile: ProfilePage,
      ShippingAddress: ShippingAddressPage,
      OrderDetails: OrderDetailsPage,
      Search: SearchPage,
      ProductsByCategory: ProductsByCategoryPage,
      ProductDetails: ProductDetailsPage,
      DeliveryAddress: DeliveryAddressPage,
      PaymentMethod: PaymentMethodPage,
      OrderConfirmation: OrderConfirmationPage,
      PaymentResult: PaymentResultPage,
    },
    {
      defaultNavigationOptions: navigation => ({
        header: <Header {...navigation} />,
      }),
    },
  ),
  navigationOptions: {
    title: translate('home'),
    drawerIcon: ({ tintColor }) => (
      <Icon name="home" size={16} color={tintColor} />
    ),
  },
};

const Cart = {
  screen: createStackNavigator({
    Cart: CartPage,
  }),
  navigationOptions: {
    title: translate('cart'),
    drawerIcon: ({ tintColor }) => (
      <Icon name="shopping-basket" size={16} color={tintColor} />
    ),
  },
};

const Orders = {
  screen: createStackNavigator({
    Orders: OrdersPage,
  }),
  navigationOptions: {
    title: translate('orders'),
    drawerIcon: ({ tintColor }) => (
      <Icon name="shopping-cart" size={16} color={tintColor} />
    ),
  },
};

const Offers = {
  screen: createStackNavigator({
    Offers: OffersPage,
  }),
  navigationOptions: {
    title: translate('offers'),
    drawerIcon: ({ tintColor }) => (
      <Icon name="percentage" size={16} color={tintColor} solid />
    ),
  },
};

const MyAccount = {
  screen: createStackNavigator({
    MyAccountPage,
  }),
  navigationOptions: {
    title: translate('account'),
    drawerIcon: ({ tintColor }) => (
      <Icon name="user" size={16} color={tintColor} solid />
    ),
  },
};

const Logout = {
  screen: () => {},
  navigationOptions: {
    title: translate('sign_out'),
    drawerIcon: ({ tintColor }) => (
      <Icon name="sign-out-alt" size={16} color={tintColor} />
    ),
  },
};

export { Home, Cart, Orders, Offers, MyAccount, Logout };
