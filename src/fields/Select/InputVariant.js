import React from 'react'
import PropTypes from 'prop-types'
import Input from '@material-ui/core/Input'
import OutlinedInput from '@material-ui/core/OutlinedInput'

const InputVariant = ({ name, width, variant, ...props }) => {
  return variant === 'outlined'
    ? <OutlinedInput {...props} name={name} id={name} labelWidth={width} />
    : <Input {...props} name={name} id={name} />
}

InputVariant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  width: PropTypes.number,
  variant: PropTypes.string
}

export default InputVariant
