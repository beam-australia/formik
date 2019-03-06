import join from 'lodash/join'

/**
 * Transform errors into formik object
 * @param {Object} response
 */
export default function transformErrors({ errors = {} }) {
  const transformed = {}
  Object.keys(errors).forEach(key => {
    transformed[key] = join(errors[key], ', ')
  })
  return transformed
}
