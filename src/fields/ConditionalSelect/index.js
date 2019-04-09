import React from 'react'
import PropTypes from 'prop-types'
import find from 'lodash/find'
import { Field, connect } from 'formik'
import { withStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import Grid from '@material-ui/core/Grid'
import FormControl from '../../components/FormControl'
import Select from '../Select'
import styles from './styles'

class ConditionalSelect extends React.Component {
  render() {
    const { classes, items, secondaryFieldName, primaryFieldName, field, formik, label, helperText } = this.props
    // const secondayItems = form.values
    const primaryValue = formik.values[primaryFieldName]
    const secondaryItems = find(items, { slug: primaryValue }).children
    return (
      <FormControl component='fieldset' helperText={helperText} name={primaryFieldName} className={classes.root}>
        <FormLabel htmlFor={primaryFieldName}>{label}</FormLabel>
        <Grid container spacing={24}>
          <Grid item xs={6}>
            <Field
              name={secondaryFieldName}
              component={Select}
              items={secondaryItems}
            />
          </Grid>
          <Grid item xs={6}>
            <Field
              name={primaryFieldName}
              component={Select}
              items={items}
            />
          </Grid>
        </Grid>
      </FormControl>
    )
  }
}

ConditionalSelect.propTypes = {
  classes: PropTypes.object,
  valueKey: PropTypes.string,
  nameKey: PropTypes.string,
  helperText: PropTypes.string,
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  form: PropTypes.object,
  field: PropTypes.object
}

ConditionalSelect.defaultProps = {
  variant: 'standard',
  valueKey: 'slug',
  nameKey: 'name',
  items: [],
  id: ''
}

export default withStyles(styles)(
  connect(ConditionalSelect)
)
