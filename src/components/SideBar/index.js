import React from 'react';
import { useDispatch } from 'react-redux';
import { ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';

import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/logo-branco.png';

import { Container, LogoContainer, Logo } from './styles';

export default function SideBar(props) {
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <LogoContainer>
        <Logo source={logo} />
      </LogoContainer>
      <ScrollView>
        <DrawerItems
          {...props}
          onItemPress={({ route }) => {
            if (route.routeName === 'Logout') {
              handleLogout();
            }
            props.navigation.navigate(route);
          }}
        />
      </ScrollView>
    </Container>
  );
}
