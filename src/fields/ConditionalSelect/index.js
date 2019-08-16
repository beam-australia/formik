import React from "react";
import find from "lodash/find";
import Grid from "@material-ui/core/Grid";
import FormControl from "components/FormControl";
import Select from "components/Select";
import { getIn } from "formik";

class ConditionalSelect extends React.Component {
  componentDidUpdate(prevProps) {
    if (getIn(prevProps, "field.value[0]") !== this.getPrimaryState()) {
      this.props.form.setFieldValue(this.props.field.name, [
        this.getPrimaryValue(), "0"
      ]);
    }
  }

  onChange = () => {
    this.props.form.setFieldTouched(this.props.field.name);
    this.props.form.setFieldValue(this.props.field.name, [
      this.getPrimaryValue(),
      this.getSecondaryValue()
    ]);
  };

  getPrimaryState = () => getIn(this.props, "field.value[0]", "0");

  getSecondaryState = () => getIn(this.props, "field.value[1]", "0");

  getPrimaryValue = () => getIn(this.primary, "value", "0");

  getSecondaryValue = () => getIn(this.secondary, "value", "0");

  getSecondaryOptions = () => {
    const value = this.getPrimaryState();
    const selected = find(this.props.options, { value });
    return selected ? selected.children : this.props.options[0].children;
  };

  render() {
    const { field, form, label, group, helperText, variant } = this.props;
    const selectProps = {
      variant,
      disabled: form.isSubmitting,
      onChange: this.onChange
    };
    return (
      <FormControl name={field.name} helperText={helperText} label={label}>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
            <Select
              {...selectProps}
              value={this.getPrimaryState()}
              options={this.props.options}
              group={group}
              inputProps={{
                ref: select => {
                  this.primary = select;
                }
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              {...selectProps}
              value={this.getSecondaryState()}
              options={this.getSecondaryOptions()}
              inputProps={{
                ref: select => {
                  this.secondary = select;
                }
              }}
            />
          </Grid>
        </Grid>
      </FormControl>
    );
  }
}

ConditionalSelect.defaultProps = {
  group: false,
};

export default ConditionalSelect;
