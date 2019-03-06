import handleResponse from './handleResponse'
import handleException from './handleException'

/**
 * Curried formik submission helper
 * @param {Promise} action
 * @param {Object} options options to override messages
 * @return {Promise}
 */
export default function onFormSubmit(action, options = {}) {
  return (values, actions) => {
    return action(values)
      .then(response => handleResponse(response, actions, options))
      .catch(response => handleException(response, actions, options))
  }
}
