import React from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from 'components/FormControl'
import Select from 'components/Select'
import { years, months } from 'lib/dates'

class DateSelect extends React.Component {
  onChange = () => {
    const month = this.month.value ? this.month.value : months[1].value
    const year = this.year.value ? this.year.value : years[1].value
    this.setFieldValue(year, month)
  }

  setFieldValue = (year, month) => {
    this.props.form.setFieldValue(this.props.field.name, new Date(year, month))
    this.props.form.setFieldTouched(this.props.field.name)
  }

  render() {
    const { field, form, label, helperText, variant, ...props } = this.props
    const date = new Date(field.value)
    const disabled = form.isSubmitting
    return (
      <FormControl
        name={field.name}
        helperText={helperText}
        label={label}
      >
        <Grid container spacing={24}>
          <Grid item sm={6}>
            <Select
              variant={variant}
              disabled={disabled}
              value={field.value ? date.getMonth() : ''}
              onChange={this.onChange}
              inputProps={{ ref: select => { this.month = select } }}
              options={months}
            />
          </Grid>
          <Grid item sm={6}>
            <Select
              variant={variant}
              disabled={disabled}
              value={field.value ? date.getFullYear() : ''}
              onChange={this.onChange}
              inputProps={{ ref: select => { this.year = select } }}
              options={years}
            />
          </Grid>
        </Grid>
      </FormControl>
    )
  }
}

DateSelect.propTypes = {

}

export default DateSelect
