import React from 'react'
import { TextField as BaseSelect } from 'formik-material-ui'
import MapOptions from 'components/MapOptions'

const Select = ({ options, emptyOption, ...props }) => (
  <BaseSelect {...props}>
    <MapOptions options={options} emptyOption={emptyOption} />
  </BaseSelect>
)

Select.defaultProps = {
  fullWidth: true,
  margin: 'normal',
  select: true,
  type: 'text',
  SelectProps: {
    native: true,
    displayEmpty: false
  }
}

export default Select
