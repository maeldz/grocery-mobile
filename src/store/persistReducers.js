import storage from '@react-native-community/async-storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'grocery',
      storage,
      whitelist: ['auth', 'user', 'cart'],
    },
    reducers,
  );

  return persistedReducer;
};
