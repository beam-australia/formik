import React from 'react'
import find from 'lodash/find'
import { withStyles } from '@material-ui/core/styles'
import FormLabel from '@material-ui/core/FormLabel'
import FormHelperText from '@material-ui/core/FormHelperText'
import Grid from '@material-ui/core/Grid'
import FormControl from 'components/FormControl'
import Select from 'components/Select'
import { fieldProps } from 'lib/propTypes'
import { Field, connect, getIn } from 'formik'
import styles from './styles'
class ConditionalSelect extends React.Component {
  render() {
    const { label, helperText, conditional, dependant, items, formik } = this.props
    const slug = getIn(formik.values, conditional)
    const children = find(items, { slug }).children
    return (
      <div>
        <FormLabel>{label}</FormLabel>
        <Grid container spacing={24}>
          <Grid item sm={6}>
            <FormControl name={conditional}>
              <Field
                name={conditional}
                items={items}
                component={Select}
                className='mui-conditional'
              />
            </FormControl>
            {helperText && <FormHelperText>{helperText}</FormHelperText>}
          </Grid>
          <Grid item sm={6}>
            <FormControl name={dependant}>
              <Field
                name={dependant}
                items={children}
                component={Select}
                className='mui-dependant'
              />
            </FormControl>
          </Grid>
        </Grid>
      </div>
    )
  }
}

ConditionalSelect.propTypes = fieldProps

export default withStyles(styles)(
  connect(ConditionalSelect)
)
