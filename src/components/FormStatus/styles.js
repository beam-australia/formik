import { makeStyles } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

export default makeStyles(theme => ({
  error: {
    color: red[600]
  },
  success: {
    color: green[600]
  },
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    margin: 0
  },
  icon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: theme.spacing(2)
  },
  text: {},
  errorItems: {},
  errorItem: {
    padding: "5px 0",
    textAlign: "center"
  },
  message: {
    fontWeight: 500
  },
  typography: {
    marginTop: 2,
    textAlign: "center"
  },
  marginDense: {
    margin: theme.spacing()
  },
  marginNormal: {
    margin: theme.spacing(2)
  }
}));
