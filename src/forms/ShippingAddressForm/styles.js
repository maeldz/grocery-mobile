import styled from 'styled-components/native';
import TextInput from '../../components/Input';

import Button from '../../components/Button';

export const Input = styled(TextInput)`
  margin-bottom: ${props => (props.error ? 0 : 10)};
`;

export const SubmitButton = styled(Button)`
  margin-top: 20px;
  align-self: stretch;
`;
