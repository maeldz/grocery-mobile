import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  flex: 1;
  background: ${colors.primary};
`;

export const LogoContainer = styled.View`
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

export const Logo = styled.Image`
  width: 100px;
  height: 104px;
`;
