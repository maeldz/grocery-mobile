import signInSchema from '../schemas/signInSchema';

async function handleChangeText(fields, id, value) {
  let text = value;

  try {
    await signInSchema.validateSync(
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
    await signInSchema.validateSync(fields, { abortEarly: false });
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
    await signInSchema.validateSync(fields, { abortEarly: false });
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
