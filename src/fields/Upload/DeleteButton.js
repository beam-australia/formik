import React from 'react'
import classNames from 'classnames'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {

  },
})


const DeleteButton = ({ classes, visible = false, ...props }) => {
  if (visible === false) {
    return null
  }
  return (
    <Button
      className={classNames(classes.root, 'beam upload-field-button')}
      // variant="outlined"
      size="small"
      color="primary"
      {...props}
    ><DeleteIcon /> Delete</Button>
  )
}

export default withStyles(styles)(DeleteButton)
