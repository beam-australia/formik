import React from 'react'
import { RadioGroup as BaseRadioGroup } from 'formik-material-ui'
import FormControl from 'components/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import gridTemplateColumns from 'lib/gridTemplateColumns'

const RadioGroup = ({ options, label, helperText, grid, ...props }) => (
  <FormControl name={props.field.name} helperText={helperText} label={label}>
    <BaseRadioGroup {...props} style={gridTemplateColumns(grid)}>
      {options.map(option => (
        <FormControlLabel
          key={option.value}
          value={option.value}
          control={<Radio disabled={Boolean(option.disabled)} color='primary' />}
          label={option.label}
          disabled={Boolean(props.form.isSubmitting || option.disabled)}
        />
      ))}
    </BaseRadioGroup>
  </FormControl>
)

RadioGroup.defaultProps = {
  grid: 110
}

export default RadioGroup
