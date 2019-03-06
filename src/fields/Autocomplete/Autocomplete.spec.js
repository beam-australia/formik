import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form, Field } from 'formik'
import Autocomplete from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik initialValues={{ foo: '' }}>
      <Form>
        <Field
          name='foo'
          label='Foo'
          component={Autocomplete}
        />
      </Form>
    </Formik>, div)
})
