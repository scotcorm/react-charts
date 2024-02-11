export const validateDataForm = (values) => {
  const errors = {};

  // if (!values.rating) {
  //   errors.rating = 'Required';
  // }

  if (values.year.length < 4) {
    errors.author = 'Must be at least 4 digits.';
  } else if (values.author.length > 4) {
    errors.author = 'Must be 4 characters or less.';
  }

  return errors;
};
