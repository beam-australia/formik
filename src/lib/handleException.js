import transformErrors from "./transformErrors";

/**
 * Form exception utility
 * @param {Object} response
 * @param {Object} actions
 * @return {undefined}
 */
export default function handleException(response, actions) {
  let message = "";
  if (response.statusCode > 499 || !response.statusCode) {
    message = "The site is experiencing technical difficulties.";
  } else {
    message = response.message;
  }
  actions.setStatus({ success: false, message });
  actions.setErrors(transformErrors(response));
  actions.setSubmitting(false);
}
