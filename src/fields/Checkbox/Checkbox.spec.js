import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form } from 'formik'
import Checkbox from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik initialValues={{ select_field: '' }}>
      <Form>
        <Field name='checkbox_field' component={Checkbox} label='Checkbox' />
      </Form>
    </Formik>, div)
})
