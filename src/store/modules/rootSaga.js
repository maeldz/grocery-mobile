import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import user from './user/sagas';
import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([auth, user, cart]);
}
