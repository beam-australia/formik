/**
 * Returns all field errors
 * @param {Object} fromik
 * @return {Array}
 */
export default function getFieldErrors(formik) {
  const fieldErrors = [];
  const { errors, touched } = formik;
  if (touched && touched.length) {
    Object.keys(touched).forEach(key => {
      if (errors && errors.hasOwnProperty(key)) {
        fieldErrors.push(errors[key]);
      }
    });
  }
  return fieldErrors;
}
