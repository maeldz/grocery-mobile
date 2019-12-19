import styled from 'styled-components/native';
import { Placeholder, Fade, PlaceholderMedia } from 'rn-placeholder';

export const Wrapper = styled.View`
  flex: 1;
`;

export const Container = styled(Placeholder).attrs({ Animation: Fade })``;

export const Circle = styled(PlaceholderMedia)`
  width: 84px;
  height: 84px;
  border-radius: 42px;
  margin: 5px;
`;
