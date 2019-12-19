import validate from 'card-validator';
import * as Yup from 'yup';
import translate from '../../../locales';

const addCardSchema = Yup.object().shape({
  expirationDate: Yup.string()
    .test(
      'testExpirationDate',
      translate('expiration_date_error_1'),
      text => validate.expirationDate(text).isValid,
    )
    .required(translate('expiration_date_error_2')),
  number: Yup.string()
    .test(
      'testNumber',
      translate('number_error_1'),
      text => validate.number(text.replace(/\D/g, '')).isValid,
    )
    .required(translate('number_error_2')),
  nameOnCard: Yup.string().required(translate('name_on_card_error')),
  cvv: Yup.string()
    .test(
      'testCVV',
      translate('cvv_error_1'),
      text => text.length >= 3 && text.length <= 4,
    )
    .required(translate('cvv_error_2')),
});

export default addCardSchema;
