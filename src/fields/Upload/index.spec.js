import React from 'react'
import ReactDOM from 'react-dom'
import Form from 'testing/Form'
import { Field } from 'formik'
import Upload from './'

it('<Upload /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Form initialValues={{ upload_file: '' }}>
      <Field
        name='upload_file'
        label='Upload'
        component={Upload}
      />
    </Form>, div)
})
