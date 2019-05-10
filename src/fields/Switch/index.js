import React from 'react'
import PropTypes from 'prop-types'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { Switch as BaseSwitch } from 'formik-material-ui'

const Switch = ({ label, ...props }) => {
  return (
    <FormControlLabel
      control={<BaseSwitch {...props} />}
      label={label}
    />
  )
}

Switch.defaultProps = {

}

export default Switch
