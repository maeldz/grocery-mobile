import styled from 'styled-components/native';

import logo from '../../assets/logo3-branco.png';
import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  flex-direction: row;
  justify-content: space-between;
  height: 55px;
  background: ${colors.primary};
  padding: 20px;
`;

export const LeftContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Logo = styled.Image.attrs({ source: logo, resizeMode: 'cover' })`
  width: 80px;
  height: 18px;
  margin-left: 20px;
`;

export const RightContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SearchButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const BasketButton = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -6px;
  right: -6px;
  min-width: 16px;
  min-height: 16px;
  background: ${colors.red};
  color: ${colors.white};
  font-size: 10px;
  padding: 2px;
  border-radius: 8px;
  overflow: hidden;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BackContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconContainer = styled.TouchableOpacity``;

export const PageTitle = styled.Text`
  font-size: 16px;
  margin-left: 20px;
  font-weight: bold;
  color: ${colors.white};
`;
