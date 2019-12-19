import * as Yup from 'yup';
import translate from '../../../locales';

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email(translate('email_error_1'))
    .required(translate('email_error_2')),
  password: Yup.string().required(translate('password_error_2')),
});

export default signInSchema;
