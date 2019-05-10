import React from 'react'
import Grid from '@material-ui/core/Grid'
import FormControl from 'components/FormControl'
import Select from 'components/Select'
import { years, months, days } from 'lib/dates'

class DateSelect extends React.Component {
  onChange = () => {
    this.setFieldValue(
      this.getFieldValue('year', (new Date()).getFullYear()),
      this.getFieldValue('month', 0),
      this.getFieldValue('day', 1)
    )
  }

  getFieldValue = (field, defaultValue) => {
    if (this[field] && this[field].value) {
      return this[field].value
    }
    return defaultValue
  }

  setFieldValue = (year, month, day) => {
    this.props.form.setFieldValue(this.props.field.name, new Date(year, month, day))
    this.props.form.setFieldTouched(this.props.field.name)
  }

  numberOfCols = () => {
    return 12 / this.props.format.length
  }

  render() {
    const { field, form, label, helperText, variant } = this.props
    const selectProps = { variant, disabled: form.isSubmitting, onChange: this.onChange }
    const date = new Date(field.value)
    return (
      <FormControl name={field.name} helperText={helperText} label={label}>
        <Grid container spacing={24}>
          {this.props.format.includes('d') &&
            <Grid item sm={this.numberOfCols()}>
              <Select
                {...selectProps}
                value={field.value ? date.getDate() : ''}
                inputProps={{ ref: select => { this.day = select } }}
                options={days(date)}
              />
            </Grid>}
          {this.props.format.includes('m') &&
            <Grid item sm={this.numberOfCols()}>
              <Select
                {...selectProps}
                value={field.value ? date.getMonth() : ''}
                inputProps={{ ref: select => { this.month = select } }}
                options={months}
              />
            </Grid>}
          {this.props.format.includes('y') &&
            <Grid item sm={this.numberOfCols()}>
              <Select
                {...selectProps}
                value={field.value ? date.getFullYear() : ''}
                inputProps={{ ref: select => { this.year = select } }}
                options={years}
              />
            </Grid>}
        </Grid>
      </FormControl>
    )
  }
}

DateSelect.defaultProps = {
  format: 'dmy'
}

export default DateSelect
