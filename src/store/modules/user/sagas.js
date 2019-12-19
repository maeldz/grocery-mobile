import { takeLatest, call, put, all } from 'redux-saga/effects';
import { Alert } from 'react-native';

import api from '../../../services/api';

import { updateProfileSuccess, updateProfileFailure } from './actions';
import translate from '../../../locales';

export function* updateProfile({ payload }) {
  try {
    const {
      name,
      lastName,
      email,
      phone,
      birthdayFormatted,
      birthday,
      gender,
      cpf,
      ...rest
    } = payload.data;

    const profile = {
      name,
      last_name: lastName,
      email,
      phone,
      birthday: birthdayFormatted,
      gender,
      cpf,
      ...(rest.oldPassword ? rest : {}),
    };
    const response = yield call(api.put, 'users', profile);

    Alert.alert(
      translate('save_profile_success_title'),
      translate('save_profile_success'),
    );
    yield put(
      updateProfileSuccess({
        ...response.data,
        cpf: String(response.data.cpf),
        phone: String(response.data.phone),
      }),
    );
  } catch (err) {
    Alert.alert(
      translate('save_profile_title_error'),
      translate('save_profile_error'),
    );

    yield put(updateProfileFailure());
  }
}

export default all([takeLatest('@user/UPDATE_PROFILE_REQUEST', updateProfile)]);
