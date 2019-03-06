/**
 * Form response utility
 * @param {Object} response
 * @param {Object} actions
 * @param {Object} options options to override messages
 * @return {Object}
 */
export default function formResponse(response, actions, options) {
  actions.setSubmitting(false)
  return response
}
