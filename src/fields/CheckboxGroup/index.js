import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { connect, FieldArray } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import FormControl from '../../components/FormControl'
import Checkbox from '../Checkbox'
import styles from './styles'

class CheckboxGroup extends React.Component {
  onChange = (event, helpers, value) => {
    const { name, formik: { values } } = this.props
    if (event.target.checked) {
      helpers.push(value)
    } else {
      const index = values[name].indexOf(value)
      helpers.remove(index)
    }
  }

  render() {
    const {
      formik,
      classes,
      items,
      nameKey,
      valueKey,
      label,
      required,
      name,
      row
    } = this.props
    return (
      <FormControl component='fieldset' name={name} required={required} className={classes.root}>
        <FormLabel component='legend'>{label}</FormLabel>
        <FieldArray
          name={name}
          render={helpers => (
            <FormGroup row={row}>
              {items.map(item => (
                <Checkbox
                  className={classNames({ [classes.checkbox]: row })}
                  key={item[valueKey]}
                  name={name}
                  label={item[nameKey]}
                  form={formik}
                  field={{
                    value: item[valueKey],
                    checked: formik.values[name].includes(item[valueKey]),
                    onChange: event => this.onChange(event, helpers, item[valueKey])
                  }}
                />
              ))}
            </FormGroup>
          )}
        />
      </FormControl>
    )
  }
}

CheckboxGroup.propTypes = {
  formik: PropTypes.object,
  classes: PropTypes.object,
  items: PropTypes.array,
  nameKey: PropTypes.string,
  valueKey: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  row: PropTypes.bool,
  required: PropTypes.bool
}

CheckboxGroup.defaultProps = {
  items: [],
  nameKey: 'name',
  valueKey: 'slug',
  row: true
}

export default withStyles(styles)(
  connect(CheckboxGroup)
)
