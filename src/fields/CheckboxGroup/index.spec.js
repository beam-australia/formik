import React from 'react'
import ReactDOM from 'react-dom'
import { insects } from 'testing/mocks'
import Form from 'testing/Form'
import CheckboxGroup from './'

it('<CheckboxGroup /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Form initialValues={{ insects: [] }}>
      <CheckboxGroup
        name='insects'
        items={insects}
        label='Insect types'
      />
    </Form>, div)
})
