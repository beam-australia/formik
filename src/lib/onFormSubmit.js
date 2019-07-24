import handleResponse from './handleResponse'
import handleException from './handleException'

/**
 * Curried formik submission helper
 * @param {Promise} action
 * @return {Promise}
 */
export default function onFormSubmit(action) {
  return (values, actions) => {
    return action(values, actions)
      .then(response => handleResponse(response, actions))
      .catch(response => handleException(response, actions))
  }
}
