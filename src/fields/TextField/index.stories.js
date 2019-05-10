import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import Divider from 'testing/Divider'
import { Field } from 'formik'
import Form from 'testing/Form'
import TextField from './'

const schema = Yup.object().shape({
  scientificName: Yup.string().min(8).required(),
})

storiesOf('Fields', module)
  .add('Text Field', () =>
    <Form
      schema={schema}
      initialValues={{
        scientificName: ''
      }}
    >
      <Divider title='Standard variant'>
        <Field
          name='scientificName'
          label='Scientific name'
          helperText='Latin scientific name for the species'
          component={TextField}
        />
      </Divider>
      <Divider title='Outlined variant'>
        <Field
          name='scientificName'
          label='Scientific name'
          helperText='Latin scientific name for the species'
          variant='outlined'
          component={TextField}
        />
      </Divider>
      <Divider title='Filled variant'>
        <Field
          name='scientificName'
          label='Scientific name'
          helperText='Latin scientific name for the species'
          variant='filled'
          component={TextField}
        />
      </Divider>
    </Form>
  )
