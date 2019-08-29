import React from 'react'
import { connect } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import MuiFormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import getFieldError from '../../lib/getFieldError'
import styles from './styles'

const FormControl = ({ children, name, formik, helperText, label, classes, ...props }) => {
  const error = getFieldError(formik, name)
  const showError = error.length > 0
  const text = showError ? error : helperText
  const disabled = formik.isSubmitting ? true : false
  return (
    <MuiFormControl error={showError} disabled={disabled} {...props} margin='none'>
      {label && <FormLabel className={classes.label}>{label}</FormLabel>}
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          error: showError ? 'error' : ''
        })
      )}
      {text && <FormHelperText>{text}</FormHelperText>}
    </MuiFormControl>
  )
}

FormControl.defaultProps = {
  fullWidth: true,
  margin: 'normal'
}

export default withStyles(styles)(
  connect(FormControl)
)
