import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import storage from '@react-native-community/async-storage';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '10.0.2.2' })
    .useReactNative()
    .setAsyncStorageHandler(storage)
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
