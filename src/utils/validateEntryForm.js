export const validateEntryForm = (values) => {
  const errors = {};

  if (!values.year) {
    errors.year = 'Required';
  }

  if (values.year.length < 2) {
    errors.year = 'Must be at least 2 characters.';
  } else if (values.year.length > 15) {
    errors.year = 'Must be 15 characters or less.';
  }

  return errors;
};
