import React from 'react'
import PropTypes from 'prop-types'
import FormLabel from '@material-ui/core/FormLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from 'components/FormControl'
import gridTemplateColumns from 'lib/gridTemplateColumns'

class CheckboxGroup extends React.Component {
  onChange = ({ target }) => {
    const { push, remove, form, name } = this.props
    if (target.checked) {
      push(target.value)
    } else {
      remove(form.values[name].indexOf(target.value))
    }
    // formik.setFieldTouched(name)
    // See issue: https://github.com/jaredpalmer/formik/issues/1158
  }
  render() {
    const { form, options, label, helperText, grid, name } = this.props
    return (
      <FormControl name={name} helperText={helperText} label={label}>
        <FormGroup style={gridTemplateColumns(grid)}>
          {options.map(option => (
            <FormControlLabel
              key={option.value}
              label={option.label}
              control={
                <Checkbox
                  checked={form.values[name].includes(option.value)}
                  onChange={this.onChange}
                  value={option.value}
                  color='primary'
                />
              }
            />
          ))}
        </FormGroup>
      </FormControl>
    )
  }
}

CheckboxGroup.propTypes = {

}

CheckboxGroup.defaultProps = {
  grid: 110,
  options: []
}

export default CheckboxGroup
