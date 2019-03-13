import transformErrors from './transformErrors'

/**
 * Form exception utility
 * @param {Object} response
 * @param {Object} actions
 * @param {string} override replaces exception message
 * @return {undefined}
 */
export default function handleException(response, actions, override = '') {
  switch (response.statusCode) {
    case 502:
      actions.setStatus({ error: 'We are currently doing some maintenece, please come back later.' })
      break
    case 422:
      actions.setStatus({ error: 'Please address the errors above.' })
      break
    default:
      actions.setStatus({ error: override.length ? override : response.message })
      break
  }
  actions.setErrors(transformErrors(response))
  actions.setSubmitting(false)
}
