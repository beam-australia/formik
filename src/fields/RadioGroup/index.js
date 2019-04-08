import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { Field } from 'formik'
import FormLabel from '@material-ui/core/FormLabel'
import { RadioGroup as MuiRadioGroup } from 'formik-material-ui'
import FormControl from '../../components/FormControl'
import gridTemplateColumns from '../../lib/gridTemplateColumns'
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
      grid
    } = this.props
    return (
      <FormControl component='fieldset' name={name} className={classes.root}>
        <FormLabel component='legend'>{label}</FormLabel>
        <Field
          name={name}
          component={MuiRadioGroup}
          className={classNames({ [classes.grid]: grid })}
          style={gridTemplateColumns(grid)}
        >
          {items.map(item => (
            <Radio
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
  grid: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ])
}

RadioGroup.defaultProps = {
  items: [],
  nameKey: 'name',
  valueKey: 'slug',
  grid: 110
}

export default withStyles(styles)(RadioGroup)
