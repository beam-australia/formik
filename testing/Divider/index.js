import React from 'react'
import { Typography, Divider, withStyles } from '@material-ui/core'
import styles from './styles'

const Section = ({ title, children, classes }) => (
  <div className={classes.root}>
    <Typography className={classes.legend} variant='body1' color='textSecondary'>
      {title}
    </Typography>
    <Divider />
    <div className={classes.content}>
      {children}
    </div>
  </div>
)

export default withStyles(styles)(Section)
