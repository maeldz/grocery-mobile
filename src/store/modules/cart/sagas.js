import { select, put, all, takeLatest } from 'redux-saga/effects';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ payload }) {
  const { product } = payload;

  const productExists = yield select(state =>
    state.cart.find(p => p.id === product.id),
  );

  /* check product quantity in stock

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  */
  const currentAmount = productExists ? productExists.amount : 0;

  const amount = currentAmount + 1;

  /* check if requested quantity is in stock

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');

    return;
  }
*/
  if (productExists) {
    yield put(updateAmountSuccess(product.id, amount));
  } else {
    const data = {
      ...product,
      amount: 1,
    };

    yield put(addToCartSuccess(data));
  }
}

function* updateAmount({ payload }) {
  const { id, amount } = payload;
  if (amount <= 0) {
    return;
  }
  /*
  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    Alert.alert('Quantidade solicitada fora de estoque');

    return;
  }
  */

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
