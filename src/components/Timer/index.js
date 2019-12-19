import React, { useState, useEffect, useRef } from 'react';
import { subSeconds, formatDistanceToNow, differenceInSeconds } from 'date-fns';
import PropTypes from 'prop-types';

import translate, { dateLanguage } from '../../locales';

import { Container, CountdownText } from './styles';

export default function Timer({ onTimerFinish, offerId, finalDate }) {
  const [time, setTime] = useState(
    formatDistanceToNow(finalDate, { locale: dateLanguage }),
  );
  const [endDate, setEndDate] = useState(finalDate);

  const countdownRef = useRef();

  useEffect(() => {
    if (
      differenceInSeconds(endDate, new Date()) <= 60 &&
      differenceInSeconds(endDate, new Date()) > 0
    ) {
      countdownRef.current = setTimeout(() => {
        setTime(
          differenceInSeconds(endDate, new Date()) > 1
            ? `${differenceInSeconds(endDate, new Date())} ${translate(
                'seconds',
              )}`
            : `${differenceInSeconds(endDate, new Date())} ${translate(
                'second',
              )}`,
        );
      }, 1000);
    } else if (differenceInSeconds(endDate, new Date()) <= 0) {
      onTimerFinish(offerId);
    } else {
      countdownRef.current = setTimeout(() => {
        setEndDate(subSeconds(finalDate, 1));
        setTime(
          formatDistanceToNow(endDate, {
            locale: dateLanguage,
          }),
        );
      }, 1000);
    }

    return () => clearTimeout(countdownRef.current);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endDate, time]);

  return (
    <Container>
      <CountdownText>{`${translate('ends_in')} ${time}`}</CountdownText>
    </Container>
  );
}

Timer.propTypes = {
  onTimerFinish: PropTypes.func.isRequired,
  offerId: PropTypes.number.isRequired,
  finalDate: PropTypes.instanceOf(Date).isRequired,
};
