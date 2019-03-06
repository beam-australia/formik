import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Field, Form } from 'formik'
import Switch from './'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik>
      <Form>
        <Field name='switch_field' component={Switch} label='Switch' />
      </Form>
    </Formik>, div)
})
