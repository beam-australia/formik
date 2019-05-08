import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import CssBaseline from '@material-ui/core/CssBaseline'
import styles from './styles'

const App = ({ classes, children }) => (
  <React.Fragment>
    <CssBaseline />
    <main className={classes.main}>
      {children}
    </main>
  </React.Fragment>
)

App.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node
}

export default withStyles(styles)(App)
