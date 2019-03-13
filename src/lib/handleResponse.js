/**
 * Form response utility
 * @param {Object} response
 * @param {Object} actions
 * @param {Object} override overides response message
 * @return {Object}
 */
export default function formResponse(response, actions, override = '') {
  actions.setStatus({
    success: true,
    message: override.length ? override : response.message
  })
  actions.setSubmitting(false)
  return response
}
