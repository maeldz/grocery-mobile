import React, { forwardRef, useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { Wrapper, Container, TextInput, Error } from './styles';
import colors from '../../styles/colors';

export function Input(
  { style, editable, icon, error, onFocus, onBlur, ...rest },
  ref,
) {
  const [isFocused, setIsFocused] = useState(false);

  function handleFocus(...args) {
    setIsFocused(true);
    onFocus && onFocus(args);
  }

  function handleBlur(...args) {
    setIsFocused(false);
    onBlur && onBlur(args);
  }

  function iconColor() {
    if (error) {
      return colors.error;
    }

    if (isFocused) {
      return colors.primary;
    }

    return colors.inactive;
  }

  return (
    <Wrapper style={style}>
      <Container
        error={error}
        isFocused={isFocused}
        editable={editable === undefined ? true : editable}>
        {icon && <Icon name={icon} size={16} color={iconColor()} solid />}
        <TextInput
          editable={editable}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...rest}
          ref={ref}
          error={error}
          icon={icon}
        />
      </Container>
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
}

Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  editable: PropTypes.bool,
  error: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

Input.defaultProps = {
  icon: null,
  style: {},
  editable: null,
  error: null,
};

export default forwardRef(Input);
