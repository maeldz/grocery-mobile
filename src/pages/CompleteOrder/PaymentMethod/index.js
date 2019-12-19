import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import AddCardForm from '../../../forms/AddCardForm';

import masterCardImage from '../../../assets/mastercard.png';
import visaImage from '../../../assets/visa.png';
import amexImage from '../../../assets/amex.png';
import defaultImage from '../../../assets/default.png';

import {
  Wrapper,
  Container,
  PaymentMethodContainer,
  CashPayment,
  CashContainer,
  CashAnimationContainer,
  CashAnimation,
  CashPaymentText,
  MethodSelect,
  IconContainer,
  CreditCardIcon,
  CashIcon,
  MethodTitle,
  CreditCardPayment,
  CreditCardContainer,
  PaymentMethodHeader,
  SavedCardsList,
  CreditCardInfo,
  CreditCardNumberContainer,
  CreditCardSelect,
  CreditCardNumber,
  CreditCardBrand,
  CreditCardRemoveButton,
  NoCreditCardSaved,
  NoCreditCardSavedAnimationContainer,
  NoCreditCardSavedAnimation,
  NoCreditCardSavedText,
  AddCardButton,
  AddCardText,
  FormContainer,
  ContinueButton,
} from './styles';
import translate from '../../../locales';

export default function PaymentMethod({ navigation }) {
  const [methodSelected, setMethodSelected] = useState('cash');
  const [savedCreditCards, setSavedCreditCards] = useState([]);
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [cardSelected, setCardSelected] = useState(null);

  const address = navigation.getParam('address');
  const orderDetails = navigation.getParam('orderDetails');

  useEffect(() => {
    function loadSavedCards() {
      setSavedCreditCards([
        {
          id: '1',
          nameOnCard: 'John Doe',
          brand: 'mc',
          number: '5156165775083266',
          expirationMonth: '07',
          expirationYear: '20',
          cvv: '809',
        },
        {
          id: '2',
          nameOnCard: 'John Doe',
          brand: 'visa',
          number: '4916204201440339',
          expirationMonth: '12',
          expirationYear: '20',
          cvv: '399',
        },
        {
          id: '3',
          nameOnCard: 'John Doe',
          brand: 'amex',
          number: '378261444987459',
          expirationMonth: '08',
          expirationYear: '20',
          cvv: '7178',
        },
      ]);
    }

    loadSavedCards();
  }, []);

  function brandIcon(brand) {
    switch (brand) {
      case 'mc':
        return masterCardImage;
      case 'visa':
        return visaImage;
      case 'amex':
        return amexImage;
      default:
        return defaultImage;
    }
  }

  function handleRemoveSavedCard(id) {
    cardSelected === id && setCardSelected(null);
    const creditCards = savedCreditCards.filter(card => card.id !== id);
    setSavedCreditCards(creditCards);
  }

  function handleFormSubmit({
    brand,
    nameOnCard,
    number,
    expirationDate,
    cvv,
  }) {
    const [expMonth, expYear] = expirationDate.split('/');
    setSavedCreditCards([
      ...savedCreditCards,
      {
        id: String(savedCreditCards.length + 1),
        nameOnCard,
        brand,
        number,
        expirationMonth: expMonth,
        expirationYear: expYear,
        cvv,
      },
    ]);
  }

  function renderCard({ item }) {
    return (
      <CreditCardInfo>
        <CreditCardNumberContainer>
          <CreditCardSelect onPress={() => setCardSelected(item.id)}>
            <Icon
              name={
                cardSelected === item.id ? 'radiobox-marked' : 'radiobox-blank'
              }
              size={20}
              color="#666672"
            />
          </CreditCardSelect>
          <CreditCardNumber>{`xxxx xxxx xxxx ${item.number.slice(
            -4,
          )}`}</CreditCardNumber>
          <CreditCardBrand source={brandIcon(item.brand)} />
        </CreditCardNumberContainer>
        <CreditCardRemoveButton onPress={() => handleRemoveSavedCard(item.id)}>
          <Icon name="delete" size={16} color="#666672" />
        </CreditCardRemoveButton>
      </CreditCardInfo>
    );
  }

  return (
    <Wrapper>
      <Container>
        <PaymentMethodContainer>
          <CashPayment onPress={() => setMethodSelected('cash')}>
            <MethodSelect>
              <Icon
                name={
                  methodSelected === 'cash'
                    ? 'radiobox-marked'
                    : 'radiobox-blank'
                }
                size={16}
                color="#fff"
              />
            </MethodSelect>
            <IconContainer>
              <CashIcon />
              <MethodTitle>{translate('cash_button')}</MethodTitle>
            </IconContainer>
          </CashPayment>
          <CreditCardPayment onPress={() => setMethodSelected('credit_card')}>
            <MethodSelect>
              <Icon
                name={
                  methodSelected === 'credit_card'
                    ? 'radiobox-marked'
                    : 'radiobox-blank'
                }
                size={16}
                color="#fff"
              />
            </MethodSelect>
            <IconContainer>
              <CreditCardIcon />
              <MethodTitle>{translate('credit_card_button')}</MethodTitle>
            </IconContainer>
          </CreditCardPayment>
        </PaymentMethodContainer>
        {methodSelected === 'cash' ? (
          <CashContainer>
            <CashAnimationContainer>
              <CashAnimation />
            </CashAnimationContainer>
            <CashPaymentText>
              {translate('cash_payment_description')}
            </CashPaymentText>
            <ContinueButton
              onPress={() =>
                navigation.navigate('OrderConfirmation', {
                  address,
                  orderDetails,
                  paymentMethod: methodSelected,
                })
              }>
              {translate('continue_button')}
            </ContinueButton>
          </CashContainer>
        ) : (
          <CreditCardContainer>
            <PaymentMethodHeader>
              {translate('credit_card_list_header')}
            </PaymentMethodHeader>
            {savedCreditCards.length ? (
              <View>
                <SavedCardsList
                  data={savedCreditCards}
                  keyExtractor={item => item.id}
                  renderItem={renderCard}
                />
              </View>
            ) : (
              <>
                <NoCreditCardSaved>
                  <NoCreditCardSavedAnimationContainer>
                    <NoCreditCardSavedAnimation />
                  </NoCreditCardSavedAnimationContainer>
                  <NoCreditCardSavedText>
                    {translate('no_credit_card_saved')}
                  </NoCreditCardSavedText>
                </NoCreditCardSaved>
              </>
            )}

            <AddCardButton
              onPress={() => setShowCreditCardForm(!showCreditCardForm)}>
              <AddCardText>{translate('add_credit_card_button')}</AddCardText>
              <Icon
                name={showCreditCardForm ? 'chevron-down' : 'chevron-right'}
                size={25}
                color="#393647"
              />
            </AddCardButton>
            {showCreditCardForm && (
              <FormContainer>
                <AddCardForm handleFormSubmit={handleFormSubmit} loading />
              </FormContainer>
            )}

            <ContinueButton
              onPress={() =>
                navigation.navigate('OrderConfirmation', {
                  address,
                  orderDetails,
                  paymentMethod: methodSelected,
                  creditCardInfo: savedCreditCards.find(
                    creditCard => creditCard.id === String(cardSelected),
                  ),
                })
              }
              enabled={cardSelected ? true : false}>
              {translate('continue_button')}
            </ContinueButton>
          </CreditCardContainer>
        )}
      </Container>
    </Wrapper>
  );
}
