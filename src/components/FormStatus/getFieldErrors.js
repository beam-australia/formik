/**
 * Returns all field errors
 * @param {Object} fromik
 * @return {Array}
 */
export default function getFieldErrors(formik) {
  const fieldErrors = [];
  const { errors, submitCount } = formik;
  if (submitCount > 0) {
    Object.keys(errors).forEach(key => {
        fieldErrors.push(errors[key]);
    });
  }
  return fieldErrors;
}
