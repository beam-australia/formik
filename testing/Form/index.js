import React from 'react'
import { Formik, Form } from 'formik'
import { Grid, Paper, withStyles } from '@material-ui/core'
import SubmitButton from 'components/SubmitButton'
import Json from 'testing/Json'
import App from 'testing/App'
import * as Actions from './actions'
import styles from './styles'

const TestForm = ({
  schema = null,
  initialValues = null,
  formAction = Actions.success,
  children,
  classes
}) => (
  <App>
    <Formik
      onSubmit={formAction}
      validationSchema={schema}
      initialValues={initialValues}
      render={props => (
        <Form>
          <Grid container spacing={5}>
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
