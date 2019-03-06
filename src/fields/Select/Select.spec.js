import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form } from 'formik'
import Select from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik initialValues={{ select_field: '' }}>
      <Form>
        <Field
          name='select_field'
          label='Select field'
          component={Select}
        />
      </Form>
    </Formik>, div)
})
