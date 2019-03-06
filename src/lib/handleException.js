import transformErrors from './transformErrors'

/**
 * Form exception utility
 * @param {Object} response
 * @param {Object} actions
 * @param {string} message override exception message
 * @return {undefined}
 */
export default function handleException(response, actions, message = '') {
  switch (response.statusCode) {
    case 502:
      actions.setStatus({ error: 'We are currently doing some maintenece, please come back later.' })
      break
    case 422:
      actions.setStatus({ error: 'Please address the errors above.' })
      break
    default:
      actions.setStatus({ error: message.length ? message : response.message })
      break
  }
  actions.setErrors(transformErrors(response))
  actions.setSubmitting(false)
}
