import React from "react";
import find from "lodash/find";
import isEqual from "lodash/isEqual";
import { withStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import Grid from "@material-ui/core/Grid";
import { connect, getIn } from "formik";
import styles from "./styles";

class ConditionalField extends React.Component {
  componentDidUpdate(prevProps) {
    const prevPrimaryValue = getIn(prevProps.formik.values, this.props.primary, "");
    if (prevPrimaryValue !== this.getPrimaryValue()) {
      this.resetSecondary();
    }
    if (this.props.combined) {
      const prevCombinedValue = getIn(prevProps.formik.values, this.props.combined, []);
      this.updateCombinedValue(prevCombinedValue);
    }
  }

  getPrimaryValue = () => {
    return getIn(this.props.formik.values, this.props.primary, "");
  };

  getSecondaryValue = () => {
    return getIn(this.props.formik.values, this.props.secondary, "");
  };

  updateCombinedValue(previousValue) {
    const primaryVal = this.getPrimaryValue();
    const secondaryVal = this.getSecondaryValue();
    if (primaryVal.length > 0 && secondaryVal.length > 0) {
      const combined = [primaryVal,secondaryVal];
      if (false === isEqual(previousValue.sort(), combined.sort())) {
        this.props.formik.setFieldValue(this.props.combined, combined.sort());
      }
    }
  }

  resetSecondary = () => {
    this.props.formik.setFieldValue(this.props.secondary, "");
    this.props.formik.setFieldTouched(this.props.secondary, false);
  };

  getSecondaryOptions = () => {
    const selected = find(this.props.options, {
      value: this.getPrimaryValue()
    });
    return selected ? selected.children : this.props.options[0].children;
  };

  getChildren = () => {
    return this.props.children(this.props.options, this.getSecondaryOptions());
  };

  render() {
    const { label, helperText, classes } = this.props;
    const children = this.getChildren();
    return (
      <Grid container spacing={3}>
        {label && (
          <Grid item sm={12} className={classes.label}>
            <FormLabel>{label}</FormLabel>
          </Grid>
        )}
        <Grid item sm={6}>
          {React.cloneElement(children[0], {
            margin: label ? "none" : undefined
          })}
        </Grid>
        <Grid item sm={6}>
          {React.cloneElement(children[1], {
            margin: label ? "none" : undefined
          })}
        </Grid>
        {helperText && (
          <Grid item sm={12} className={classes.helperText}>
            <FormHelperText>{helperText}</FormHelperText>
          </Grid>
        )}
      </Grid>
    );
  }
}

export default withStyles(styles)(connect(ConditionalField));
