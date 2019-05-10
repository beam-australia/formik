import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import { Grid, Paper, withStyles } from '@material-ui/core'
import SubmitButton from 'components/SubmitButton'
import onFormSubmit from 'lib/onFormSubmit'
import Json from 'testing/Json'
import App from 'testing/App'
import styles from './styles'

const formAction = (values) => new Promise((resolve) => {
  setTimeout(() => {
    console.log('Values: ', values)
    resolve(values)
  }, 2000)
})

const TestForm = ({ schema = null, initialValues = null, children, classes }) => (
  <App>
    <Formik
      onSubmit={onFormSubmit(formAction)}
      validationSchema={schema}
      initialValues={initialValues}
      render={props => (
        <Form>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper className={classes.paper} elevation={0}>
                {children}
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <SubmitButton>Submit</SubmitButton>
            </Grid>
            <Grid item xs={12}>
              <Json {...props} />
            </Grid>
          </Grid>
        </Form>
      )}
    />
  </App>
)

export default withStyles(styles)(TestForm)
