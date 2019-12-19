import styled from 'styled-components/native';
import { Placeholder, Fade, PlaceholderMedia } from 'rn-placeholder';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const Container = styled(Placeholder).attrs({ Animation: Fade })``;

export const Rectangle = styled(PlaceholderMedia)`
  width: ${width};
  height: 220px;
`;
