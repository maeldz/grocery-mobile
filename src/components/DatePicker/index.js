import React, { useState, forwardRef } from 'react';
import { Platform } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DateTimePicker from '@react-native-community/datetimepicker';

import colors from '../../styles/colors';

import { Wrapper, Container, DateInput, Error } from './styles';

export function DatePicker(
  { style, icon, error, onFocus, onBlur, onDateChange, ...rest },
  ref,
) {
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(null);
  const [isFocused, setIsFocused] = useState(false);

  function handleChangeDate(event, newDate) {
    setShow(Platform.OS === 'ios');
    setDate(newDate || date);
    onDateChange(newDate);
  }

  function handleFocus(...args) {
    setShow(true);
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
    <Wrapper>
      <Container style={style} error={error} isFocused={isFocused}>
        {icon && <Icon name={icon} size={16} color={iconColor()} solid />}
        <DateInput
          {...rest}
          ref={ref}
          onFocus={handleFocus}
          onBlur={handleBlur}
          error={error}
        />

        {show && (
          <DateTimePicker
            display="spinner"
            value={date || new Date()}
            onChange={handleChangeDate}
          />
        )}
      </Container>
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
}

DatePicker.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  error: PropTypes.string,
  onFocus: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

DatePicker.defaultProps = {
  icon: null,
  style: {},
  error: null,
};

export default forwardRef(DatePicker);
