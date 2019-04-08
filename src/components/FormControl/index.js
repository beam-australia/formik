import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import MuiFormControl from '@material-ui/core/FormControl'
import FormHelperText from '@material-ui/core/FormHelperText'
import getFieldError from '../../lib/getFieldError'

const FormControl = ({ children, name, formik, helperText, ...props }) => {
  const error = getFieldError(formik, name)
  const showError = error.length > 0
  const text = showError ? error : helperText
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
  variant: 'standard'
}

export default connect(FormControl)
