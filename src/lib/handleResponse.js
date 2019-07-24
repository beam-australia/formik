/**
 * Form response utility
 * @param {Object} response
 * @param {Object} actions
 * @return {Object}
 */
export default function formResponse(response, actions) {
  actions.setStatus({ success: true })
  actions.setSubmitting(false)
  return response
}
