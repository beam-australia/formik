import React from 'react'
import ReactDOM from 'react-dom'
import TestForm from 'testing/Form'
import { salary } from 'testing/mocks'
import ConditionalSelect from './'

it('<ConditionalSelect /> renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <TestForm initialValues={{ salary_type: 'anually', salary_value: '' }}>
      <ConditionalSelect
        items={salary}
        label='Minimum salary expectation'
        helperText='Select your salary expectations for this role'
        conditional='salary_type'
        dependant='salary_value'
      />
    </TestForm>, div)
})
