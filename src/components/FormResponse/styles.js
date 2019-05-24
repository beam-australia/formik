import red from '@material-ui/core/colors/red'
import green from '@material-ui/core/colors/green'

export default theme => ({
  error: {
    color: red[600]
  },
  success: {
    color: green[600]
  },
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 0
  },
  icon: {
    paddingRight: theme.spacing(2)
  },
  typography: {
    marginTop: 2,
    textAlign: 'center'
  },
  marginDense: {
    margin: theme.spacing()
  },
  marginNormal: {
    margin: theme.spacing(2)
  }
})
