import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import { Grid, FormControl, FormGroup, FormLabel } from '@material-ui/core'
import Form from 'testing/Form'
import { Field } from 'formik'
import Checkbox from './'

const schema = Yup.object().shape({
  expert: Yup.string().required()
})

storiesOf('Fields', module)
  .add('Checkbox', () =>
    <Form
      schema={schema}
      initialValues={{ terms: false }}
    >
      <Grid item xs={4}>
        <FormControl name='terms' component='fieldset' >
          <FormLabel component='legend'>Do your agree to the terms and conditions?</FormLabel>
          <FormGroup>
            <Field
              name='terms'
              label='Yes I agree.'
              component={Checkbox}
            />
          </FormGroup>
        </FormControl>
      </Grid>
    </Form>
  )
