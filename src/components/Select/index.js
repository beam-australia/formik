import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import { fieldProps } from 'lib/propTypes'
import styles from './styles'

const Select = ({ classes, className, items, error, field }) => (
  <select
    {...field}
    className={classNames(classes.root, className, { [classes.error]: error })}
  >
    {items.map(item => (
      <option
        key={item.slug}
        value={item.slug}
      >{item.name}</option>
    ))}
  </select>
)

Select.propTypes = {
  ...fieldProps,
  error: PropTypes.bool
}

Select.defaultProps = {
  items: [],
  error: false
}

export default withStyles(styles)(Select)
