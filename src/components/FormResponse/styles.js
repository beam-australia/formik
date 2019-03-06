import red from '@material-ui/core/colors/red';
import green from '@material-ui/core/colors/green';

export default theme => ({
   error: {
      color: red[600],
   },
   success: {
      color: green[600],
   },
   root: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: theme.spacing.unit * 2,
   },
   icon: {
      paddingRight: theme.spacing.unit * 2,
   },
   typography: {
      textAlign: 'center'
   }
})
