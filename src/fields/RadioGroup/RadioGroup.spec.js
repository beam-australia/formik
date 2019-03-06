import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form } from 'formik'
import RadioGroup from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik initialValues={{ foo: '' }}>
      <Form>
        <RadioGroup
          name='foo'
          label='Foo'
        />
      </Form>
    </Formik>, div)
})
