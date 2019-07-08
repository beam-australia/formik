import React from "react";
import Traverse from "obj-traverse";
import omit from "lodash/omit";
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
    this.setValue(this.props.options[0]);
  };

  onChange = ({ target: { value } }) => {
    const node = this.findTreeNode(value);
    this.setValue(node);
    this.props.onChange();
  };

  onAddItem = () => {
    this.props.addItem(this.state.selection);
  };

  findTreeNode = value => {
    return Traverse.findFirst({ children: this.props.options }, "children", {
      value
    });
  };

  setValue = selection => {
    this.setState({ selection: omit(selection, ["children"]) });
  };

  getSecondaryOptions = () => {
    const primary = this.findTreeNode(this.state.primary.value);
    return primary ? primary.children : this.props.options[0].children;
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
        <Grid item sm={12} md={8}>
          <Select
            disabled={disabled}
            variant={variant}
            options={options}
            onChange={this.onChange}
            value={selection.value}
          />
        </Grid>
        <Grid item xs={4} md={2}>
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
        <Grid item xs={4} md={2}>
          <Button
            fullWidth
            disabled={disabled}
            size={variant === "outlined" ? "large" : "medium"}
            className={classNames({
              [classes.outlinedButton]: variant === "outlined" ? true : false
            })}
            color="primary"
            onClick={onHide}
          >Done</Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(connect(Single));
