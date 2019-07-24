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
    message = "Sorry the our systems seem to be down. Please try again.";
  } else {
    message = response.message;
  }
  actions.setStatus({ success: false, message });
  actions.setErrors(transformErrors(response));
  actions.setSubmitting(false);
}
