import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import colors from '../../styles/colors';

export const Container = styled(RectButton)`
  height: 46px;
  background: ${props => (props.colors ? props.colors[0] : colors.primary)};
  border-radius: 4px;
  opacity: ${props => (props.enabled ? 1 : 0.6)};
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${props => (props.colors ? props.colors[1] : colors.white)};
  font-weight: bold;
  font-size: 16px;
`;
