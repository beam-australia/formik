import React from 'react'
import ReactDOM from 'react-dom'
import { birds } from 'testing/mocks'
import Form from 'testing/Form'
import { Field } from 'formik'
import Select from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Form initialValues={{ bird: '' }}>
      <Field
        name='bird'
        label='Bird type'
        component={Select}
        items={birds}
      />
    </Form>, div)
})
