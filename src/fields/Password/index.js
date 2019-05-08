import React from 'react'
import PropTypes from 'prop-types'
import MuiPassword from './Password'
import { fieldToTextField } from 'formik-material-ui'

const Password = props => (
  <MuiPassword {...fieldToTextField(props)} />
)

Password.propTypes = {
  variant: PropTypes.string,
  fullWidth: PropTypes.bool
}

Password.defaultProps = {
  fullWidth: true
}

export default Password
