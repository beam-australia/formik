import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Field } from 'formik'
import FormLabel from '@material-ui/core/FormLabel'
import { RadioGroup as MuiRadioGroup } from 'formik-material-ui'
import FormControl from '../../components/FormControl'
import Radio from '../Radio'
import styles from './styles'

class RadioGroup extends React.Component {
  render() {
    const {
      items,
      valueKey,
      nameKey,
      name,
      label,
      classes,
      row
    } = this.props

    return (
      <FormControl component='fieldset'name={name}>
        <FormLabel component='legend'>{label}</FormLabel>
        <Field name={name} row={row} component={MuiRadioGroup}>
          {items.map(item => (
            <Radio
              className={classNames({ [classes.row]: row })}
              key={item[valueKey]}
              value={item[valueKey]}
              label={item[nameKey]}
            />
          ))}
        </Field>
      </FormControl>
    )
  }
}

RadioGroup.propTypes = {
  classes: PropTypes.object,
  items: PropTypes.array,
  nameKey: PropTypes.string,
  valueKey: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  row: PropTypes.bool
}

RadioGroup.defaultProps = {
  items: [],
  nameKey: 'name',
  valueKey: 'slug',
  row: true
}

export default withStyles(styles)(RadioGroup)
