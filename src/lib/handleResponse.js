/**
 * Form response utility
 * @param {Object} response
 * @param {Object} actions
 * @param {Object} override overides response message
 * @return {Object}
 */
export default function formResponse(response, actions, override = '') {
  console.log('setStatus', { success: override.length ? override : response.message })
  actions.setStatus({ success: override.length ? override : response.message })
  actions.setSubmitting(false)
  return response
}
