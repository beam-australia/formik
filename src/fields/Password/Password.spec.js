import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form } from 'formik'
import PasswordField from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik>
      <Form>
        <Field name='password' component={PasswordField} />
      </Form>
    </Formik>, div)
})
