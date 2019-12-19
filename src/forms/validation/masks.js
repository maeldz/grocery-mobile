import valid from 'card-validator';

const numberMask = text => {
  return text.replace(/\D/g, '');
};

const cepMask = text => {
  return text.replace(/\D/g, '').replace(/(\d{5})(\d)/, '$1-$2');
};

const phoneMask = text => {
  const onlyNumber = text.replace(/\D/g, '');

  return text
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(onlyNumber.length >= 11 ? /(\d{5})(\d)/ : /(\d{4})(\d)/, '$1-$2');
};

const cpfMask = text => {
  return text
    .replace(/\D/g, '')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2');
};

const creditCardMask = text => {
  const onlyDigits = text.replace(/\D/g, '');
  const validate = valid.number(onlyDigits);

  const brand = validate.card ? validate.card.type : '';

  const creditCardFormatted = () => {
    switch (brand) {
      case 'visa':
        return onlyDigits
          .replace(/(\d{4})(\d)/, '$1 $2')
          .replace(/(\d{4})(\d)/, '$1 $2')
          .replace(/(\d{4})(\d)/, '$1 $2');

      case 'mastercard':
        return onlyDigits
          .replace(/(\d{4})(\d)/, '$1 $2')
          .replace(/(\d{4})(\d)/, '$1 $2')
          .replace(/(\d{4})(\d)/, '$1 $2');
      case 'american-express':
        return onlyDigits
          .replace(/(\d{4})(\d)/, '$1 $2')
          .replace(/(\d{6})(\d{1,5})/, '$1 $2')
          .replace(/(\d{6} \d{5})\d+?$/, '$1');

      default: {
        if (onlyDigits.length === 15 || onlyDigits.length === 14) {
          return onlyDigits
            .replace(/(\d{4})(\d)/, '$1 $2')
            .replace(/(\d{6})(\d)/, '$1 $2');
        } else {
          return onlyDigits
            .replace(/(\d{4})(\d)/, '$1 $2')
            .replace(/(\d{4})(\d)/, '$1 $2')
            .replace(/(\d{4})(\d)/, '$1 $2');
        }
      }
    }
  };
  return creditCardFormatted();
};

const ExpirationDateMask = text => {
  return text.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2');
};

export {
  cepMask,
  phoneMask,
  cpfMask,
  creditCardMask,
  ExpirationDateMask,
  numberMask,
};
