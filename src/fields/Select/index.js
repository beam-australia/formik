import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from '../../components/FormControl'
import getFieldError from '../../lib/getFieldError'
import styles from './styles'

const Select = ({ classes, items, valueKey, nameKey, label, helperText, field, form }) => {
  const hasError = getFieldError(form, field.name).length > 0
  return (
    <FormControl helperText={helperText} name={field.name}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <select
        {...field}
        id={field.name}
        className={classNames(classes.select, { [classes.error]: hasError })}
      >
        {items.map(item => (
          <option
            key={item[valueKey]}
            value={item[valueKey]}
          >{item[nameKey]}</option>
        ))}
      </select>
    </FormControl>
  )
}

Select.propTypes = {
  classes: PropTypes.object,
  valueKey: PropTypes.string,
  nameKey: PropTypes.string,
  helperText: PropTypes.string,
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  form: PropTypes.object,
  field: PropTypes.object
}

Select.defaultProps = {
  variant: 'standard',
  valueKey: 'slug',
  nameKey: 'name',
  items: [],
  id: ''
}

export default withStyles(styles)(Select)
