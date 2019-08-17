import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Select from "components/Select";
import { connect } from "formik";
import styles from "./styles";

class Single extends React.Component {
  onChange = ({ target: { value } }) => {
    if (value !== this.props.defaultOption.value) {
      this.props.addItem(value);
    }
  };

  render() {
    const {
      defaultOption,
      options,
      variant,
      classes,
      disabled,
      visible,
      onHide
    } = this.props;
    if (visible === false) {
      return null;
    }
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={10}>
            <Select
              disabled={disabled}
              variant={variant}
              options={[defaultOption, ...options]}
              onChange={this.onChange}
              value={"0"}
            />
          </Grid>
          <Grid item xs={2}>
            <Button
              fullWidth
              disabled={disabled}
              size="large"
              className={classNames({
                [classes.outlinedButton]: variant === "outlined" ? true : false
              })}
              color="primary"
              onClick={onHide}
            >
              Done
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(connect(Single));
