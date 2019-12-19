import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Wrapper = styled.View`
  align-self: stretch;
`;

export const Container = styled.View`
  padding: 0 15px;
  height: 46px;
  background: ${colors.white};
  border: 1px solid
    ${props => {
      if (props.error) {
        return colors.error;
      }
      if (props.isFocused) {
        return colors.primary;
      }
      return colors.border;
    }};
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const DateInput = styled.TextInput.attrs(props => ({
  placeholderTextColor: props.error ? colors.error : colors.inactive,
}))`
  flex: 1;
  font-size: 15px;
  margin-left: 10px;
  color: ${colors.dark_gray};
`;

export const Error = styled.Text`
  font-size: 12px;
  margin-top: 2px;
  margin-bottom: 8px;
  color: ${colors.red};
`;
