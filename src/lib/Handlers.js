import { getIn } from "formik";

function exception(response, actions) {
  let message = "";
  if (response.statusCode > 499 || !response.statusCode) {
    message = "The site is experiencing technical difficulties.";
  } else {
    message = response.message;
  }
  actions.setStatus({ success: false, message });
  actions.setErrors(response.errors);
  actions.setSubmitting(false);
  return response;
}

export function response(response, actions) {
  actions.setStatus({ success: true, message: response.message });
  actions.setSubmitting(false);
  return response;
}

function setValues(response, actions, keyPath = '') {
  const data = getIn(response, keyPath, false);
  if (data) {
    actions.setValues(data);
  }
  return response;
}

export default {
  exception,
  response,
  setValues
}
