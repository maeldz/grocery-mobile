import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import NavigationService from '../../../services/navigation';

import api from '../../../services/api';

import { signInSuccess, signUpSuccess, signFailure } from './actions';
import translate from '../../../locales';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, user));
  } catch (err) {
    if (err.response.status === 429) {
      Alert.alert(
        translate('too_many_requests_title_error'),
        translate('too_many_requests_error'),
      );
      yield put(signFailure());
    } else {
      Alert.alert(translate('auth_title_error'), translate('auth_error'));
      yield put(signFailure());
    }
  }
}

export function* signUp({ payload }) {
  try {
    const {
      name,
      lastName,
      phone,
      cpf,
      gender,
      birthday,
      email,
      password,
    } = payload;

    yield call(api.post, 'users', {
      name,
      last_name: lastName,
      email,
      phone,
      password,
      birthday,
      gender,
      cpf,
    });

    yield put(signUpSuccess());
    NavigationService.navigate('SignIn');
  } catch (err) {
    Alert.alert(translate('sign_up_title_error'), translate('sign_up_error'));

    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  //history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
