import React from 'react'
import PropTypes from 'prop-types'
import posed from 'react-pose'
import { connect } from 'formik'
import classNames from 'classnames'
import ErrorIcon from '@material-ui/icons/ErrorOutline'
import SuccessIcon from '@material-ui/icons/Done'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

const Posed = posed.div({
  before: { y: -100, opacity: 0 },
  after: { y: 0, opacity: 1 }
})

const FormResponse = ({ classes, formik: { status = undefined } }) => {
  if (typeof status === 'undefined') {
    return null
  }
  const isError = Boolean(status.error)
  const errorClass = {
    [classes.error]: isError,
    [classes.success]: !isError
  }
  return (
    <Posed initialPose='before' pose='after'>
      <div className={classNames(classes.root, errorClass)}>
        <div className={classes.icon}>
          {isError ? <ErrorIcon /> : <SuccessIcon />}
        </div>
        <div className={classes.text}>
          <Typography
            variant='body1'
            className={classNames(classes.typography, errorClass)}
          >
            {isError ? status.error : status.success}
          </Typography>
        </div>
      </div>
    </Posed>
  )
}

FormResponse.propTypes = {
  classes: PropTypes.object.isRequired,
  formik: PropTypes.object
}

export default withStyles(styles)(
  connect(FormResponse)
)
