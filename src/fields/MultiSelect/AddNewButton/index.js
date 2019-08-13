import React from "react";
import Grid from '@material-ui/core/Grid'
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(1) / 2
  },
  button: {
    margin: '5px 0',
  }
}));

export default ({ visible, buttonText, ...props }) => {
  if (visible === false) {
    return null;
  }
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item md={6}>
        <Button
          className={classes.button}
          variant="contained"
          size="medium"
          color="primary"
          {...props}
        >
          <AddIcon className={classes.icon} />
          {buttonText}
        </Button>
      </Grid>
    </Grid>
  );
};
