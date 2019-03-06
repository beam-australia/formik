import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import styles from './styles'

const SubmitButton = ({
  classes,
  children,
  formik,
  progress = true,
  ...props
}) => {
  const { isSubmitting } = formik
  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <Button
          variant='contained'
          color='primary'
          type='submit'
          disabled={isSubmitting}
          {...props}
        >{children}</Button>
        {isSubmitting && progress &&
          <CircularProgress
            size={24}
            className={classes.progress}
          />}
      </div>
    </div>
  )
}

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
  formik: PropTypes.object.isRequired,
  children: PropTypes.node,
  progress: PropTypes.bool
}

export default withStyles(styles)(
  connect(SubmitButton)
)
