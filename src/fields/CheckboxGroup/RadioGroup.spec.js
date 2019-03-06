import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form } from 'formik'
import CheckboxGroup from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik initialValues={{ foo: '' }}>
      <Form>
        <CheckboxGroup
          name='foo'
          label='Foo'
        />
      </Form>
    </Formik>, div)
})
