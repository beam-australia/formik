import React from 'react'
import PropTypes from 'prop-types'
import MuiTextField from '@material-ui/core/TextField'
import { fieldToTextField } from 'formik-material-ui'

const TextField = props => (
  <MuiTextField {...fieldToTextField(props)} />
)

TextField.propTypes = {
  variant: PropTypes.string,
  fullWidth: PropTypes.bool
}

TextField.defaultProps = {
  fullWidth: true
}

export default TextField
