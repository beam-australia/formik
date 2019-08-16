import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import { Field } from 'formik'
import Divider from 'testing/Divider'
import Form from 'testing/Form'
import ConditionalTermSelect from './'
import locations from "testing/locations";

const schema = Yup.object().shape({
  locations: Yup.array().required()
})

storiesOf('Dropdowns', module)
  .add('ConditionalSelect', () =>
    <Form
      schema={schema}
      initialValues={{
        locations: ["900","904"]
      }}
    >
      <Divider title='Default'>
        <Field
          name='locations'
          label='Select location'
          helperText='Initial is Brisbane, Southern Suburbs & Logan'
          options={locations}
          component={ConditionalTermSelect}
        />
      </Divider>
    </Form>
  )
