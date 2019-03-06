import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form } from 'formik'
import SubmitButton from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik>
      <Form>
        <SubmitButton>Submit form</SubmitButton>
      </Form>
    </Formik>, div)
})
