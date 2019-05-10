import React from 'react'
import MuiPassword from './Password'
import { fieldToTextField } from 'formik-material-ui'

const Password = props => (
  <MuiPassword {...fieldToTextField(props)} />
)

Password.defaultProps = {
  fullWidth: true,
  margin: 'normal'
}

export default Password
