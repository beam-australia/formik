import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import { FieldArray } from 'formik'
import Divider from 'testing/Divider'
import Form from 'testing/Form'
import { invertebrates } from 'testing/mocks'
import MultiSelect from './'

const schema = Yup.object().shape({
  invertebrates: Yup.array().min(3).required(),
})

storiesOf('Dropdowns', module)
  .add('Multi Select', () =>
    <Form
      schema={schema}
      initialValues={{
        invertebrates: [
          { value: 'porifera', label: 'Porifera' },
          { value: 'porifera', label: 'Porifera', child: { value: 'sulphur-sponge', label: 'Sulphur Sponge' } },
        ]
      }}
    >
      <Divider title='Default settings'>
        <FieldArray
          name='invertebrates'
          render={props => (
            <MultiSelect
              {...props}
              label='Vulnerable invertebrates'
              helperText='Limit of 10 selections'
              options={invertebrates}
            />
          )}
        />
      </Divider>
      <Divider title='Outlined variant'>
        <FieldArray
          name='invertebrates'
          render={props => (
            <MultiSelect
              {...props}
              variant='outlined'
              label='Vulnerable invertebrates'
              helperText='Only select vulnerable species'
              options={invertebrates}
            />
          )}
        />
      </Divider>
    </Form>
  )
