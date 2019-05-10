import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import Divider from 'testing/Divider'
import { Field } from 'formik'
import Form from 'testing/Form'
import Password from './'

const schema = Yup.object().shape({
  password: Yup.string().min(6).required()
})

storiesOf('Fields', module)
  .add('Password', () =>
    <Form
      schema={schema}
      initialValues={{
        password: ''
      }}
    >
      <Divider title='Standard variant'>
        <Field
          name='password'
          label='Password'
          helperText='Enter your password'
          component={Password}
        />
      </Divider>
      <Divider title='Outlined variant'>
        <Field
          name='password'
          label='Password'
          helperText='Enter your password'
          variant='outlined'
          component={Password}
        />
      </Divider>
      <Divider title='Filled variant'>
        <Field
          name='password'
          label='Password'
          helperText='Enter your password'
          variant='filled'
          component={Password}
        />
      </Divider>
    </Form>
  )
