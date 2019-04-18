import React from 'react'
import ReactDOM from 'react-dom'
import Form from 'testing/Form'
import { invertebrates } from 'testing/mocks'
import { Field } from 'formik'
import TreeSelect from './'

it('<TreeSelect /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Form initialValues={{ invertebrates: [] }}>
      <Field
        name='invertebrates'
        label='Invertebrates selections'
        component={TreeSelect}
        items={invertebrates}
      />
    </Form>, div)
})
