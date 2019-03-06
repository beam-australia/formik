import React from 'react'
import PropTypes from 'prop-types'
import MuiCheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { fieldToCheckbox } from 'formik-material-ui'

const Checkbox = ({ label = '', className, ...props }) => {
  let checked = props.field.checked
  if (typeof checked === 'undefined') {
    checked = props.field.value
  }
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          {...fieldToCheckbox(props)}
          checked={checked}
        />
      }
      label={label}
      className={className}
    />
  )
}

Checkbox.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  field: PropTypes.shape({
    checked: PropTypes.bool,
    value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ])
  })
}

export default Checkbox
