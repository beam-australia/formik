import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form } from 'formik'
import FormResponse from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik>
      <Form>
        <FormResponse />
      </Form>
    </Formik>, div)
})
