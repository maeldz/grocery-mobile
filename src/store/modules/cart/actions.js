export function addToCartRequest(product) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: { product },
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: { product },
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    payload: { id },
  };
}

export function EmptyCart() {
  return {
    type: '@cart/EMPTY',
  };
}

export function updateAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_REQUEST',
    payload: { id, amount },
  };
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    payload: { id, amount },
  };
}
