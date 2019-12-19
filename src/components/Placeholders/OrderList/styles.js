import styled from 'styled-components/native';
import { Placeholder, PlaceholderMedia, Fade } from 'rn-placeholder';
import { Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

export const Wrapper = styled(Placeholder).attrs({ Animation: Fade })`
  flex: 1;
`;

export const Container = styled.View`
  flex-direction: row;
`;

export const Rectangle = styled(PlaceholderMedia)`
  border-radius: 4px;
  height: ${height * 0.35};
  flex: 1;
  margin-bottom: 10px;
`;
