/**
 * Returns all field errors
 * @param {Object} fromik
 * @return {Array}
 */
export default function getFieldErrors(formik) {
  const fieldErrors = [];
  const errors = formik.errors;
  const touched = formik.touched;
  Object.keys(touched).forEach(key => {
    if (errors.hasOwnProperty(key)) {
      fieldErrors.push(errors[key]);
    }
  });
  return fieldErrors;
}
