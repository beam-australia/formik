import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import { FieldArray } from 'formik'
import Divider from 'testing/Divider'
import Form from 'testing/Form'
import { kingdoms } from 'testing/mocks'
import MultiSelect from './'

const schema = Yup.object().shape({
  kingdoms: Yup.array().min(3).required(),
})

storiesOf('Dropdowns', module)
  .add('Multi Select', () =>
    <Form
      schema={schema}
      initialValues={{
        kingdoms: "",
      }}
    >
      <Divider title='Single selector'>
        <FieldArray
          name='kingdoms'
          render={props => (
            <MultiSelect
              {...props}
              variant='outlined'
              label='Animal kingdoms'
              helperText='Select your area of interest (max 3)'
              options={kingdoms}
              maxItems={3}
              selector='Single'
              addNewText='Add new kingdom'
            />
          )}
        />
      </Divider>
    </Form>
  )
