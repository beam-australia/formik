import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import Divider from 'testing/Divider'
import { FieldArray } from 'formik'
import Form from 'testing/Form'
import { phylum, kingdoms } from 'testing/mocks'
import CheckboxGroup from './'

const schema = Yup.object().shape({
  phyla: Yup.array().max(3).required(),
  kingdoms: Yup.array().max(2).required()
})

storiesOf('Groups', module)
  .add('CheckboxGroup', () =>
    <Form
      schema={schema}
      initialValues={{
        phyla: ['nematomorpha', 'onychophora'],
        kingdoms: ['fungus']
      }}
    >
      <Divider title='Grid layout'>
        <FieldArray
          name='phyla'
          render={props => (
            <CheckboxGroup
              {...props}
              label='Animal phyla'
              helperText='Only select three phylum'
              options={phylum}
            />
          )}
        />
      </Divider>
      <Divider title='List layout'>
        <FieldArray
          name='kingdoms'
          render={props => (
            <CheckboxGroup
              {...props}
              label='Kingdoms of life'
              helperText='Only select two kingdoms'
              options={kingdoms}
              grid={false}
            />
          )}
        />
      </Divider>
    </Form>
  )
