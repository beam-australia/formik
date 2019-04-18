import React from 'react'
import ReactDOM from 'react-dom'
import Form from 'testing/Form'
import { Field } from 'formik'
import Checkbox from './'

it('<Checkbox /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Form initialValues={{ checkbox_field: '' }}>
      <Field
        name='checkbox_field'
        component={Checkbox}
        label='Checkbox'
      />
    </Form>, div)
})
