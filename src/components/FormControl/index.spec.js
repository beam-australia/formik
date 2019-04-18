import React from 'react'
import ReactDOM from 'react-dom'
import { Formik, Form } from 'formik'
import FormControl from './'

it('<FormControl /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Formik>
      <Form>
        <FormControl name='foo'>
          <div>Foo bar</div>
        </FormControl>
      </Form>
    </Formik>, div)
})
