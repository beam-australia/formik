import React from 'react'
import { CheckboxWithLabel as BaseCheckbox } from 'formik-material-ui'

const Checkbox = (props) => (
  <BaseCheckbox {...props} Label={{ label: props.label }} />
)

Checkbox.defaultProps = {
  color: 'primary'
}

export default Checkbox
