import React from 'react'
import ReactDOM from 'react-dom'
import Form from 'testing/Form'
import { Field } from 'formik'
import PasswordField from './'

it('<PasswordField /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Form>
      <Field
        name='password'
        component={PasswordField}
      />
    </Form>, div)
})
