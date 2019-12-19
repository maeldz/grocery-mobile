import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';
import TextInput from '../../components/Input';
import colors from '../../styles/colors';

export const Input = styled(TextInput)`
  margin-bottom: ${props => (props.error ? 0 : 10)};
`;

export const SaveCardButton = styled(BaseButton)`
  position: absolute;
  padding: 12px;
  background: ${colors.light_gray};
  bottom: -24px;
  border-radius: 24px;
  align-self: center;
`;
