import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form } from 'formik'
// import Autocomplete from './'

it.skip('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik initialValues={{ foo: '' }}>
      <Form>
        {/* <Field
          name='foo'
          label='Foo'
          component={Autocomplete}
        /> */}
      </Form>
    </Formik>, div)
})
