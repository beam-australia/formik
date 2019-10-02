import React from "react";
import { connect } from "formik";
import classNames from "classnames";
import ErrorIcon from "@material-ui/icons/ErrorOutline";
import SuccessIcon from "@material-ui/icons/Done";
import Typography from "@material-ui/core/Typography";
import getFieldErrors from "./getFieldErrors";
import useStyles from "./styles";

export const FromStatus = ({ formik, margin, successMessage }) => {
  // Get errors
  const errors = getFieldErrors(formik);

  // Set status
  const status = formik.status || {};

  // determine if we should be displaying messages
  // if (errors.length > 0 || typeof status.success !== "undefined" && formik) {
  if (errors.length > 0 || status.success === true) {
    // do nothing
  } else {
    return null;
  }

  const success = Boolean(errors.length < 1 && status.success === true);

  let message = status.message;

  if (success === true) {
    message = successMessage;
  } else if (success === false) {
    message = '';
  }

  const classes = useStyles();

  const errorClass = {
    [classes.error]: errors.length > 0 === true,
    [classes.success]: success === true
  };

  const marginClass = {
    [classes.marginDense]: margin === "dense",
    [classes.marginNormal]: margin === "normal"
  };
  return (
    <div className={classNames(classes.root, errorClass, marginClass)}>
      <div className={classes.icon}>
        {success === true ? <SuccessIcon /> : <ErrorIcon />}
      </div>
      <div className={classes.text}>
        {message && (
          <div className={classes.message}>
            <Typography
              variant="body1"
              className={classNames(classes.typography, errorClass)}
            >
              {message}
            </Typography>
          </div>
        )}
        {errors.length > 0 && (
          <div className={classes.errorItems}>
            {errors.map((error, key) => (
              <div key={key} className={classes.errorItem}>
                {error}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

FromStatus.defaultProps = {
  margin: "normal"
};

export default connect(FromStatus);
