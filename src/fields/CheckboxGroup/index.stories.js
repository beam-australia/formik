import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import Form from 'testing/Form'
import { fungi } from 'testing/mocks'
import CheckboxGroup from './'

const schema = Yup.object().shape({
  fungi: Yup.array().of(Yup.string()).min(2).required()
})

storiesOf('Fields', module)
  .add('CheckboxGroup', () =>
    <Form
      schema={schema}
      initialValues={{ fungi: ['basidiomycota', 'glomeromycota'] }}
    >
      <CheckboxGroup
        name='fungi'
        label='Fungi'
        items={fungi}
        grid={160}
      />
    </Form>
  )
