import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import Form from 'testing/Form'
import { salary } from 'testing/mocks'
import ConditionalSelect from './'

const schema = Yup.object().shape({
  salary_type: Yup.string().required(),
  salary_value: Yup.number().min(20000).required()
})

storiesOf('Fields', module)
  .add('Conditional Select', () =>
    <Form
      schema={schema}
      initialValues={{
        salary_type: 'anually',
        salary_value: ''
      }}
    >
      <ConditionalSelect
        items={salary}
        label='Minimum salary expectation'
        helperText='Select your salary expectations for this role'
        conditional='salary_type'
        dependant='salary_value'
      />
    </Form>
  )
