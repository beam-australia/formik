import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import Divider from 'testing/Divider'
import { Field } from 'formik'
import Form from 'testing/Form'
import { phylum, kingdoms } from 'testing/mocks'
import RadioGroup from './'

const schema = Yup.object().shape({
  phyla: Yup.string().notOneOf(['onychophora']).required(),
  kingdoms: Yup.string().notOneOf(['animals', 'fungus']).required()
})

storiesOf('Groups', module)
  .add('RadioGroup', () =>
    <Form
      schema={schema}
      initialValues={{
        phyla: 'nematomorpha',
        kingdoms: 'fungus'
      }}
    >
      <Divider title='Grid layout'>
        <Field
          name='phyla'
          label='Animal phyla'
          helperText='Do not select the "onychophora" phylum'
          component={RadioGroup}
          options={phylum}
        />
      </Divider>
      <Divider title='List layout'>
        <Field
          name='kingdoms'
          label='Kingdoms of life'
          helperText='Do not select the "onychophora" phylum'
          component={RadioGroup}
          options={kingdoms}
          grid={false}
        />
      </Divider>
    </Form>
  )
