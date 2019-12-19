import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import colors from '../../../styles/colors';

import {
  Container,
  SuccessAnimationContainer,
  SuccessAnimation,
  SucessTextContainer,
  SucessTextHeader,
  SucessText,
  FailedAnimationContainer,
  FailedAnimation,
  FailedTextContainer,
  FailedTextHeader,
  FailedText,
  ContinueButton,
  TryAgainButton,
  TryAgainText,
} from './styles';
import translate from '../../../locales';

export default function PaymentResult({ navigation }) {
  const status = navigation.getParam('status');

  useEffect(() => {
    if (status === 'success') {
      StatusBar.setBackgroundColor(colors.success);
    } else if (status === 'failed') {
      StatusBar.setBackgroundColor(colors.failed);
    }

    return () => {
      StatusBar.setBackgroundColor(colors.primary);
    };
  }, [status]);

  return (
    <Container status={status}>
      {status === 'success' ? (
        <>
          <SuccessAnimationContainer>
            <SuccessAnimation />
          </SuccessAnimationContainer>
          <SucessTextContainer>
            <SucessTextHeader>
              {translate('payment_success_header')}
            </SucessTextHeader>
            <SucessText>{translate('payment_success')}</SucessText>
          </SucessTextContainer>
        </>
      ) : (
        <>
          <FailedAnimationContainer>
            <FailedAnimation />
          </FailedAnimationContainer>
          <FailedTextContainer>
            <FailedTextHeader>
              {translate('payment_failed_header')}
            </FailedTextHeader>
            <FailedText>{translate('payment_failed_error')}</FailedText>
          </FailedTextContainer>
        </>
      )}
      <ContinueButton
        onPress={() => navigation.navigate('Home')}
        colors={
          status === 'success'
            ? [colors.white, colors.success]
            : [colors.white, colors.failed]
        }>
        {translate('continue_button')}
      </ContinueButton>
      {status === 'failed' && (
        <TryAgainButton onPress={() => navigation.pop(2)}>
          <TryAgainText>{translate('try_again')}</TryAgainText>
        </TryAgainButton>
      )}
    </Container>
  );
}
