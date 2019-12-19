import { Platform } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
`;

export const FormContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 30,
  },
})``;
