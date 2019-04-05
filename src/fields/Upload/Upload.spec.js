import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form } from 'formik'
import Upload from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik initialValues={{ upload_file: '' }}>
      <Form>
        <Field
          name='upload_file'
          label='Upload'
          component={Upload}
        />
      </Form>
    </Formik>, div)
})
