import React from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Select from "components/Select";
import { connect } from "formik";
import styles from "./styles";

class Single extends React.Component {
  state = {
    selection: ""
  };

  componentDidMount() {
    this.setInitialState();
  }

  setInitialState = () => {
    const selection = this.props.options.length
      ? this.props.options[0].value
      : "";
    this.setState({ selection });
  };

  onChange = ({ target: { value } }) => {
    this.setState({ selection: value });
  };

  onAddItem = () => {
    this.props.addItem(this.state.selection);
  };

  render() {
    const {
      options,
      buttonText,
      variant,
      classes,
      disabled,
      visible,
      onHide
    } = this.props;
    const { selection } = this.state;
    if (visible === false) {
      return null;
    }
    return (
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Select
            disabled={disabled}
            variant={variant}
            options={options}
            onChange={this.onChange}
            value={selection}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <Button
            fullWidth
            disabled={disabled}
            size={variant === "outlined" ? "large" : "medium"}
            className={classNames({
              [classes.outlinedButton]: variant === "outlined" ? true : false
            })}
            variant="contained"
            color="primary"
            onClick={this.onAddItem}
          >
            {buttonText}
          </Button>
        </Grid>
        <Grid item xs={2} md={2}>
          <Button
            fullWidth
            disabled={disabled}
            size={variant === "outlined" ? "large" : "medium"}
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
    );
  }
}

export default withStyles(styles)(connect(Single));