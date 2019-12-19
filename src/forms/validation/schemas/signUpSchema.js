import * as Yup from 'yup';
import translate from '../../../locales';

const signUpSchema = Yup.object().shape({
  name: Yup.string().required(translate('first_name_error')),
  lastName: Yup.string().required(translate('last_name_error')),
  phone: Yup.string()
    .test(
      'testPhone',
      translate('phone_error_1'),
      text =>
        text.replace(/\D/g, '').length === 10 ||
        text.replace(/\D/g, '').length === 11,
    )
    .required(translate('phone_error_2')),
  birthday: Yup.string().required(translate('birthday_error')),
  cpf: Yup.string()
    .test(
      'testCPF',
      translate('national_id_error_1'),
      text => text.replace(/\D/g, '').length === 11,
    )
    .required(translate('national_id_error_2')),
  email: Yup.string()
    .email(translate('email_error_1'))
    .required(translate('email_error_2')),
  password: Yup.string()
    .min(6, translate('password_error_1'))
    .required(translate('password_error_2')),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], translate('password_confirmation_error_1'))
    .required(translate('password_confirmation_error_2')),
});

export default signUpSchema;
