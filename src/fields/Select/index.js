import React from 'react'
import FormLabel from '@material-ui/core/FormLabel'
import { fieldProps } from 'lib/propTypes'
import FormControl from 'components/FormControl'
import BaseSelect from 'components/Select'
import getFieldError from 'lib/getFieldError'

const Select = ({ items, label, helperText, field, form }) => {
  const hasError = getFieldError(form, field.name).length > 0
  return (
    <FormControl helperText={helperText} name={field.name}>
      {label && <FormLabel>{label}</FormLabel>}
      <BaseSelect
        {...field}
        error={hasError}
        items={items}
      />
    </FormControl>
  )
}

Select.propTypes = fieldProps

export default Select
