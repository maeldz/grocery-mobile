import produce from 'immer';

const INITIAL_STATE = [];

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_SUCCESS': {
        draft.push(action.payload.product);
        break;
      }
      case '@cart/REMOVE': {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
        break;
      }
      case '@cart/EMPTY': {
        draft.length = 0;
        break;
      }
      case '@cart/UPDATE_AMOUNT_SUCCESS': {
        const productIndex = draft.findIndex(p => p.id === action.payload.id);

        if (productIndex >= 0) {
          draft[productIndex].amount = Number(action.payload.amount);
        }
        break;
      }
      default:
    }
  });
}
