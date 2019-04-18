import React from 'react'
import ReactDOM from 'react-dom'
import Form from 'testing/Form'
import { Field } from 'formik'
import Switch from './'

it('<Switch /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Form>
      <Field
        name='switch_field'
        component={Switch}
        label='Switch'
      />
    </Form>, div)
})
