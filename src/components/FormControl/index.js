import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import get from 'lodash/get'
import MuiFormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'

const FormControl = ({ children, name, formik, helperText, ...props }) => {
  const { touched, errors } = formik

  const fieldError = get(errors, name)
  const showError = get(touched, name) && !!fieldError

  const text = showError ? fieldError : helperText

  return (
    <MuiFormControl error={showError} {...props}>
      {children}
      {text && <FormHelperText>{text}</FormHelperText>}
    </MuiFormControl>
  )
}

FormControl.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  formik: PropTypes.object,
  helperText: PropTypes.string
}

FormControl.defaultProps = {
  fullWidth: true,
  margin: 'dense',
  variant: 'outlined'
}

export default connect(FormControl)
