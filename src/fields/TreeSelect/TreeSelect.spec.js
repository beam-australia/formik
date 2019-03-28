import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form } from 'formik'
import TreeSelect from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik initialValues={{ tree_field: '' }}>
      <Form>
        <Field
          name='tree_field'
          label='Tree field'
          component={TreeSelect}
        />
      </Form>
    </Formik>, div)
})
