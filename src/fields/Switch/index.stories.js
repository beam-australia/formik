import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import { Field, connect } from 'formik'
import Form from 'testing/Form'
import Switch from './'

const schema = Yup.object().shape({
  commonName: Yup.bool().required()
})

const SpeciesName = connect(({ formik }) => (
  <p>{formik.values.commonName ? 'Giraffe' : 'Cervus camelopardalis'}</p>
))

storiesOf('Fields', module)
  .add('Switch', () =>
    <Form
      schema={schema}
      initialValues={{
        commonName: true
      }}
    >
      <Field
        name='commonName'
        label='Display species common name'
        component={Switch}
        required
      />
      <SpeciesName />
    </Form>
  )
