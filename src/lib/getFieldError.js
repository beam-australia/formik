export default function getFieldError(formik, name = '') {
  const { touched, errors } = formik
  const fieldError = errors[name] || false
  const showError = touched[name] && fieldError !== false
  return showError ? fieldError : ''
}
