import React from "react";
import format from "date-fns/format";
import Grid from "@material-ui/core/Grid";
import FormControl from "components/FormControl";
import Dropdown from "components/Dropdown";
import { years, months, days } from "lib/dates";

class DateSelect extends React.Component {
  onChange = () => {
    this.setFieldValue(
      this.getFieldValue("year", new Date().getFullYear()),
      this.getFieldValue("month", 0),
      this.getFieldValue("day", 1)
    );
  };

  getFieldValue = (field, defaultValue) => {
    if (this[field] && this[field].value) {
      return this[field].value;
    }
    return defaultValue;
  };

  setFieldValue = (year, month, day) => {
    const date = new Date(year, month, day, 23, 59, 59);
    const formated = format(date, this.props.format);
    this.props.form.setFieldValue(this.props.field.name, formated);
    this.props.form.setFieldTouched(this.props.field.name);
  };

  numberOfCols = () => {
    return 12 / this.props.fields.length;
  };

  render() {
    const { field, form, label, helperText, variant } = this.props;
    const selectProps = {
      variant,
      disabled: form.isSubmitting,
      onChange: this.onChange
    };
    const date = new Date(field.value);
    return (
      <FormControl name={field.name} helperText={helperText} label={label}>
        <Grid container spacing={5}>
          {this.props.fields.includes("d") && (
            <Grid item sm={this.numberOfCols()}>
              <Dropdown
                {...selectProps}
                value={field.value ? date.getDate() : ""}
                inputProps={{
                  ref: select => {
                    this.day = select;
                  }
                }}
                options={days(date)}
              />
            </Grid>
          )}
          {this.props.fields.includes("m") && (
            <Grid item sm={this.numberOfCols()}>
              <Dropdown
                {...selectProps}
                value={field.value ? date.getMonth() : ""}
                inputProps={{
                  ref: select => {
                    this.month = select;
                  }
                }}
                options={months}
              />
            </Grid>
          )}
          {this.props.fields.includes("y") && (
            <Grid item sm={this.numberOfCols()}>
              <Dropdown
                {...selectProps}
                value={field.value ? date.getFullYear() : ""}
                inputProps={{
                  ref: select => {
                    this.year = select;
                  }
                }}
                options={years}
              />
            </Grid>
          )}
        </Grid>
      </FormControl>
    );
  }
}

DateSelect.defaultProps = {
  format: "yyyy-MM-dd HH:mm:ss",
  fields: "dmy"
};

export default DateSelect;
