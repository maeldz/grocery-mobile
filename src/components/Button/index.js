import React from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';

import { Container, Text } from './styles';

export default function Button({
  children,
  colors,
  enabled,
  loading,
  ...rest
}) {
  return (
    <Container enabled={enabled} colors={colors} {...rest}>
      {loading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text colors={colors}>{children}</Text>
      )}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  enabled: PropTypes.bool,
  colors: PropTypes.array,
};

Button.defaultProps = {
  loading: false,
  enabled: true,
  colors: null,
};
