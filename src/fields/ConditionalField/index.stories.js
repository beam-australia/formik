import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import { Field } from 'formik'
import Form from 'testing/Form'
import Divider from 'testing/Divider'
import { invertebrates } from 'testing/mocks'
import Select from 'fields/Select'
import ConditionalField from './'

const schema = Yup.object().shape({
  insect: Yup.object().shape({
    class: Yup.string().required(),
    species: Yup.string().required()
  })
})

storiesOf('Dropdowns', module)
  .add('Conditional Select', () =>
    <Form
      schema={schema}
      initialValues={{
        insect: {
          class: 'porifera',
          species: ''
        }
      }}
    >
      <Divider title='Parent label, child helper text'>
        <ConditionalField
          label='Select an insect'
          primary='insect.class'
          secondary='insect.species'
          options={invertebrates}
        >
          {(options, childOptions) => [
            <Field
              name='insect.class'
              helperText='Select a class of insect'
              component={Select}
              options={options}
              emptyOption='Select a class'
            />,
            <Field
              name='insect.species'
              helperText='Select the species of insect'
              component={Select}
              options={childOptions}
              emptyOption='Select a species'
            />
          ]}
        </ConditionalField>
      </Divider>
      <Divider title='Child labels, child helper text'>
        <ConditionalField
          primary='insect.class'
          secondary='insect.species'
          options={invertebrates}
        >
          {(options, childOptions) => [
            <Field
              name='insect.class'
              label='Insect class'
              helperText='Class determies the species available'
              component={Select}
              options={options}
              emptyOption=' '
            />,
            <Field
              name='insect.species'
              label='Insect species'
              helperText='Class determies the species available'
              component={Select}
              options={childOptions}
              emptyOption=' '
            />
          ]}
        </ConditionalField>
      </Divider>
      <Divider title='Alternate variant'>
        <ConditionalField
          primary='insect.class'
          secondary='insect.species'
          options={invertebrates}
        >
          {(options, childOptions) => [
            <Field
              name='insect.class'
              label='Insect class'
              helperText='Class determies the species available'
              variant='outlined'
              component={Select}
              options={options}
              emptyOption=' '
            />,
            <Field
              name='insect.species'
              label='Insect species'
              helperText='Class determies the species available'
              variant='outlined'
              component={Select}
              options={childOptions}
              emptyOption=' '
            />
          ]}
        </ConditionalField>
      </Divider>
    </Form>
  )
