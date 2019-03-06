import get from 'lodash/get'

export default function getInputProps(props, form) {
  const { touched, errors } = form
  const fieldError = get(errors, props.name)
  const showError = get(touched, props.name) && !!fieldError
  return {
    disabled: props.disabled,
    required: props.required,
    helperText: showError ? fieldError : props.helperText,
    error: showError,
    label: props.label
  }
}
