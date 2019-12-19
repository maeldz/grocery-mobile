import styled from 'styled-components/native';
import TextInput from '../../components/Input';

import Button from '../../components/Button';
import DatePicker from '../../components/DatePicker';
import colors from '../../styles/colors';

export const Input = styled(TextInput)`
  margin-bottom: ${props => (props.error ? 0 : 10)};
`;

export const GenderContainer = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-self: stretch;
`;

export const GenderLabel = styled.Text`
  font-size: 15px;
  color: ${colors.medium_gray};
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
`;

export const TextButton = styled.TouchableOpacity`
  margin-bottom: 10px;
`;
export const TextButtonText = styled.Text`
  text-transform: uppercase;
  font-weight: bold;
  color: ${props => (props.disabled ? colors.inactive : colors.primary)};
  margin-right: 10px;
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  align-self: stretch;
`;

export const DateInput = styled(DatePicker)`
  margin-bottom: ${props => (props.error ? 0 : 10)};
`;
