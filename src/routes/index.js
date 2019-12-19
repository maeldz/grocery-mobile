import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import { Home, Cart, Orders, Offers, MyAccount, Logout } from './drawerPages';

import SideBar from '../components/SideBar';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import colors from '../styles/colors';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createDrawerNavigator(
          {
            Home,
            Cart,
            Offers,
            Orders,
            MyAccount,
            Logout,
          },
          {
            drawerType: 'slide',
            contentOptions: {
              activeTintColor: colors.active_side_bar,
              inactiveTintColor: colors.inactive_side_bar,
              iconContainerStyle: {
                opacity: 1,
                marginRight: 0,
              },
            },
            contentComponent: SideBar,
          },
        ),
      },

      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      },
    ),
  );
