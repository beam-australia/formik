import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import { Field } from 'formik'
import Form from 'testing/Form'
import { invertebrates } from 'testing/mocks'
import TreeSelect from './'

const schema = Yup.object().shape({
  invertebrates: Yup.array().required(),
})

storiesOf('Dropdowns', module)
  .add('Tree Select', () =>
    <Form
      schema={schema}
      initialValues={{
        invertebrates: []
      }}
    >
      <Field
        name='invertebrates'
        label='Invertabrates taxonomy tree'
        helperText='Select invertebrates from the tree'
        component={TreeSelect}
        options={invertebrates}
      />
    </Form>
  )
