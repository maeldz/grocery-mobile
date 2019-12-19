import deliveryAddressSchema from '../schemas/deliveryAddressSchema';

import * as masks from '../masks';

async function handleChangeText(fields, id, value) {
  let text = value;

  if (id === 'postal_code') {
    text = masks.cepMask(text);
  }

  try {
    await deliveryAddressSchema.validateSync(
      { ...fields, [id]: text },
      { abortEarly: false },
    );

    return { errors: null, text };
  } catch (err) {
    let formattedErrors;

    err.inner.map(
      error =>
        (formattedErrors = {
          ...formattedErrors,
          [error.path]: error.errors[0],
        }),
    );

    return { errors: formattedErrors, text };
  }
}

async function handleBlur(fields) {
  try {
    await deliveryAddressSchema.validateSync(fields, { abortEarly: false });
    return { errors: null };
  } catch (err) {
    let formattedErrors;

    err.inner.map(
      error =>
        (formattedErrors = {
          ...formattedErrors,
          [error.path]: error.errors[0],
        }),
    );

    return { ...formattedErrors };
  }
}

async function handleSubmit(fields) {
  try {
    await deliveryAddressSchema.validateSync(fields, { abortEarly: false });
    return null;
  } catch (err) {
    let formattedErrors;

    err.inner.map(
      error =>
        (formattedErrors = {
          ...formattedErrors,
          [error.path]: error.errors[0],
        }),
    );

    return formattedErrors;
  }
}

export { handleChangeText, handleBlur, handleSubmit };
