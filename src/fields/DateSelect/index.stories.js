import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import { Field } from 'formik'
import Divider from 'testing/Divider'
import Form from 'testing/Form'
import DateSelect from './'

const schema = Yup.object().shape({
  discovered_at: Yup.date().min('2000/01/01').required()
})

storiesOf('Dropdowns', module)
  .add('Date Select', () =>
    <Form
      schema={schema}
      initialValues={{
        discovered_at: '2014/10/10'
      }}
    >
      <Divider title='Default'>
        <Field
          name='discovered_at'
          label='Species first discovered at'
          helperText='Must be more recent the year 2000'
          component={DateSelect}
        />
      </Divider>
      <Divider title='Outlined variant'>
        <Field
          name='discovered_at'
          label='Species first discovered at'
          helperText='Must be more recent the year 2000'
          variant='outlined'
          component={DateSelect}
        />
      </Divider>
      <Divider title='Month and year'>
        <Field
          name='discovered_at'
          label='Species first discovered at'
          helperText='Must be more recent the year 2000'
          format='my'
          component={DateSelect}
        />
      </Divider>
      <Divider title='Day and month'>
        <Field
          name='discovered_at'
          label='Species first discovered at'
          helperText='Must be more recent the year 2000'
          format='dm'
          component={DateSelect}
        />
      </Divider>
    </Form>
  )
