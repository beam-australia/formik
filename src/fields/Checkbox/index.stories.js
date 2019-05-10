import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import { Field } from 'formik'
import Form from 'testing/Form'
import Checkbox from './'

const schema = Yup.object().shape({
  plants: Yup.bool().oneOf([false], 'Plant cannot be selected'),
  animals: Yup.bool().oneOf([true], 'Animals is required'),
  fungus: Yup.bool().oneOf([true], 'Fungus must be selected to continue')
})

storiesOf('Fields', module)
  .add('Checkbox', () =>
    <Form
      schema={schema}
      initialValues={{
        plants: false,
        animals: true,
        fungus: true
      }}
    >
      <Field
        name='plants'
        label='Plants'
        component={Checkbox}
      />
      <Field
        name='animals'
        label='Animals'
        component={Checkbox}
        required
      />
      <Field
        name='fungus'
        label='Fungus'
        component={Checkbox}
        required
      />
    </Form>
  )
