import React from 'react'
import ReactDOM from 'react-dom'
import Form from 'testing/Form'
import { birds } from 'testing/mocks'
import RadioGroup from './'

it('<RadioGroup /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <Form initialValues={{ birds: '' }}>
      <RadioGroup
        name='birds'
        label='Bird types'
        items={birds}
      />
    </Form>, div)
})
