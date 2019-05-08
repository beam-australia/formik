import { getIn } from 'formik'

export default function getFieldError(formik, name = '') {
  const error = getIn(formik, `errors.${name}`, false)
  const touched = getIn(formik, `touched.${name}`, false)
  return error && touched ? error : ''
}
