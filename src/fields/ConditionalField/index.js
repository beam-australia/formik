import React from 'react'
import find from 'lodash/find'
import { withStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import { connect, getIn } from 'formik'
import styles from './styles'

class ConditionalField extends React.Component {
  componentDidUpdate(prevProps) {
    const prevValue = getIn(prevProps.formik.values, this.props.primary, '')
    if (prevValue !== this.getPrimaryValue()) {
      this.resetSecondary()
    }
  }

  getPrimaryValue = () => {
    return getIn(this.props.formik.values, this.props.primary, '')
  }

  resetSecondary = () => {
    this.props.formik.setFieldValue(this.props.secondary, '')
    this.props.formik.setFieldTouched(this.props.secondary, false)
  }

  getSecondaryOptions = () => {
    const selected = find(this.props.options, { value: this.getPrimaryValue() })
    return selected ? selected.children : this.props.options[0].children
  }

  getChildren = () => {
    return this.props.children(this.props.options, this.getSecondaryOptions())
  }

  render() {
    const { label, helperText, classes } = this.props
    const children = this.getChildren()
    return (
      <Grid container spacing={16}>
        {label &&
          <Grid item sm={12} className={classes.label}>
            <FormLabel>{label}</FormLabel>
          </Grid>}
        <Grid item sm={6}>
          {React.cloneElement(children[0], {
            margin: label ? 'none' : undefined
          })}
        </Grid>
        <Grid item sm={6}>
          {React.cloneElement(children[1], {
            margin: label ? 'none' : undefined
          })}
        </Grid>
        {helperText &&
          <Grid item sm={12} className={classes.helperText}>
            <FormHelperText>{helperText}</FormHelperText>
          </Grid>}
      </Grid>
    )
  }
}

export default withStyles(styles)(
  connect(ConditionalField)
)
