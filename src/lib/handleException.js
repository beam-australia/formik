import transformErrors from './transformErrors'

/**
 * Form exception utility
 * @param {Object} response
 * @param {Object} actions
 * @param {string} override replaces exception message
 * @return {undefined}
 */
export default function handleException(response, actions, override = '') {
  let message = ''
  switch (response.statusCode) {
    case 502:
      message = 'We are currently doing some maintenece, please come back later.'
      break
    case 422:
      message = 'Please address the errors above.'
      break
    default:
      message = override.length ? override : response.message
      break
  }
  actions.setStatus({ success: false, message })
  actions.setErrors(transformErrors(response))
  actions.setSubmitting(false)
}
