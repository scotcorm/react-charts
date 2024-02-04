export const validateDataForm = (values) => {
  const errors = {};

  if (!values.rating) {
    errors.rating = 'Required';
  }

  if (values.author.length < 0) {
    errors.author = 'Must be at least 2 characters.';
  } else if (values.author.length > 15) {
    errors.author = 'Must be 15 characters or less.';
  }

  return errors;
};
