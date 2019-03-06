import React from 'react'
import PropTypes from 'prop-types'
import MuiSwitch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { fieldToSwitch } from 'formik-material-ui'

const Switch = ({ label = '', ...props }) => {
  return (
    <FormControlLabel
      control={
        <MuiSwitch
          {...fieldToSwitch(props)}
        />
      }
      label={label}
    />
  )
}

Switch.propTypes = {
  label: PropTypes.string
}

export default Switch
