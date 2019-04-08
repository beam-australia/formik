import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import classNames from 'classnames'
import ErrorIcon from '@material-ui/icons/ErrorOutline'
import SuccessIcon from '@material-ui/icons/Done'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

export const FormResponse = ({ classes, formik: { status } }) => {
  if (!status || !status.message) {
    return null
  }
  const isError = status.success === false
  const errorClass = {
    [classes.error]: isError,
    [classes.success]: !isError
  }
  return (
    <div className={classNames(classes.root, errorClass)}>
      <div className={classes.icon}>
        {isError ? <ErrorIcon /> : <SuccessIcon />}
      </div>
      <div className={classes.text}>
        <Typography
          variant='body1'
          className={classNames(classes.typography, errorClass)}
        >{status.message}</Typography>
      </div>
    </div>
  )
}

FormResponse.propTypes = {
  classes: PropTypes.object.isRequired,
  formik: PropTypes.object
}

export default withStyles(styles)(
  connect(FormResponse)
)
