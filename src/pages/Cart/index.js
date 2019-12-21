import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Background from '../../components/Background';
import translate from '../../locales';

import api from '../../services/api';
import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  CartContainer,
  MainContainer,
  Products,
  Product,
  ProductDetails,
  ProductImage,
  ProductInfo,
  ProductTitle,
  ProductWeight,
  ProductRemoveButton,
  ProductAmount,
  ProductControls,
  ProductControlButton,
  ProductSubTotal,
  DetailsContainer,
  Subtotal,
  SubtotalLabel,
  SubTotalValue,
  DeliveryCharges,
  DeliveryChargesLabel,
  DeliveryChargesValue,
  GrandTotal,
  GrandTotalLabel,
  GrandTotalValue,
  CartFooter,
  ConfirmOrderText,
  ViewDetailsButton,
  TotalContainer,
  Total,
  EmptyCart,
  WatermelonAnimation,
  EmptyCartTextContainer,
  EmptyCartText,
  EmptyCartSubText,
} from './styles';

export default function Cart({ navigation }) {
  const [showDetails, setShowDetails] = useState(false);
  const [feeConfig, setFeeConfig] = useState([]);
  const [deliveryFee, setDeliveryFee] = useState(0);

  let animRef;

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.amount * product.price),
    })),
  );

  const subtotal = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.amount * product.price;
      }, 0),
    ),
  );

  const unformattedSubtotal = useSelector(state =>
    state.cart.reduce((totalSum, product) => {
      return totalSum + product.amount * product.price;
    }, 0),
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.amount * product.price;
      }, 0) + deliveryFee,
    ),
  );

  const formattedDeliveryFee = formatPrice(deliveryFee);

  useEffect(() => {
    async function getDeliveryFee() {
      if (!feeConfig.length) {
        const response = await api.get('settings');

        if (response.data.length) {
          const parsedFeeConfig = JSON.parse(response.data[0].delivery_fee);

          setFeeConfig(parsedFeeConfig);

          const fee =
            unformattedSubtotal >= parsedFeeConfig[1] ? 0 : parsedFeeConfig[0];

          setDeliveryFee(fee);
        }
      } else {
        const fee = unformattedSubtotal >= feeConfig[1] ? 0 : feeConfig[0];

        setDeliveryFee(fee);
      }
    }

    getDeliveryFee();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subtotal]);

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Background>
      <CartContainer>
        {cart.length ? (
          <>
            <MainContainer>
              <Products>
                {cart.map(product => (
                  <Product key={product.id}>
                    <ProductDetails>
                      <ProductImage
                        source={{
                          uri: product.image.url.replace(
                            'localhost',
                            '192.168.0.5',
                          ),
                        }}
                      />
                      <ProductInfo>
                        <ProductTitle>{product.name}</ProductTitle>
                        <ProductWeight>{`${product.quantity} ${product.unit}`}</ProductWeight>
                      </ProductInfo>
                      <ProductRemoveButton
                        onPress={() =>
                          dispatch(CartActions.removeFromCart(product.id))
                        }>
                        <Icon name="delete-forever" color="#3c8f2e" size={20} />
                      </ProductRemoveButton>
                    </ProductDetails>
                    <ProductControls>
                      <ProductControlButton onPress={() => decrement(product)}>
                        <Icon
                          name="minus-circle-outline"
                          color="#3c8f2e"
                          size={20}
                        />
                      </ProductControlButton>
                      <ProductAmount value={String(product.amount || 0)} />
                      <ProductControlButton onPress={() => increment(product)}>
                        <Icon
                          name="plus-circle-outline"
                          color="#3c8f2e"
                          size={20}
                        />
                      </ProductControlButton>
                      <ProductSubTotal>{product.subtotal}</ProductSubTotal>
                    </ProductControls>
                  </Product>
                ))}
              </Products>
            </MainContainer>
            {showDetails && (
              <DetailsContainer>
                <Subtotal>
                  <SubtotalLabel>{translate('subtotal_label')}</SubtotalLabel>
                  <SubTotalValue>{subtotal}</SubTotalValue>
                </Subtotal>
                <DeliveryCharges>
                  <DeliveryChargesLabel>
                    {translate('delivery_fee_label')}
                  </DeliveryChargesLabel>
                  <DeliveryChargesValue>
                    {formattedDeliveryFee}
                  </DeliveryChargesValue>
                </DeliveryCharges>
                <GrandTotal>
                  <GrandTotalLabel>{translate('total_label')}</GrandTotalLabel>
                  <GrandTotalValue>{total}</GrandTotalValue>
                </GrandTotal>
              </DetailsContainer>
            )}

            <CartFooter>
              <ConfirmOrderText>{translate('confirm_order')}</ConfirmOrderText>
              <ViewDetailsButton onPress={() => setShowDetails(!showDetails)}>
                <Icon name="receipt" color="#fff" size={20} />
              </ViewDetailsButton>
              <TotalContainer>
                <Total>{total}</Total>
                <Icon
                  name="arrow-right"
                  color="#fff"
                  size={20}
                  onPress={() =>
                    navigation.navigate('DeliveryAddress', {
                      orderDetails: {
                        subtotal,
                        total,
                        deliveryFee: formattedDeliveryFee,
                      },
                    })
                  }
                />
              </TotalContainer>
            </CartFooter>
          </>
        ) : (
          <EmptyCart>
            <WatermelonAnimation
              ref={ref => (animRef = ref)}
              onAnimationFinish={() => animRef.play(419, 563)}
            />
            <EmptyCartTextContainer>
              <EmptyCartText>{translate('empty_cart_text')}</EmptyCartText>
              <EmptyCartSubText>
                {translate('empty_cart_sub_text')}
              </EmptyCartSubText>
            </EmptyCartTextContainer>
          </EmptyCart>
        )}
      </CartContainer>
    </Background>
  );
}
