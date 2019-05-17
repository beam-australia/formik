import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import Divider from 'testing/Divider'
import Form from 'testing/Form'
import * as Actions from 'testing/Form/actions'
import FormResponse from './'

const schema = Yup.object().shape({
  kingdoms: Yup.array().max(2).required()
})

storiesOf('Form Components', module)
  .add('Form Response', () =>
    <Form
      schema={schema}
      formAction={Actions.exception}
      initialValues={{
        kingdoms: ['fungi']
      }}
    >
      <Divider title='Normal margins'>
        <FormResponse margin='normal' />
      </Divider>
      <Divider title='Dense margins'>
        <FormResponse margin='dense' />
      </Divider>
      <Divider title='No margins'>
        <FormResponse margin='none' />
      </Divider>
    </Form>
  )
