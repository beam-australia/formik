import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import Divider from 'testing/Divider'
import { Field } from 'formik'
import Form from 'testing/Form'
import { kingdoms, phylum, classes, animals } from 'testing/mocks'
import Select from './'

const schema = Yup.object().shape({
  kingdoms: Yup.string().oneOf(['plants', 'fungus']).required(),
  phylum: Yup.string().oneOf(['mollusca', 'cnidaria']).required(),
  class: Yup.string().oneOf(['arachnid', 'hagfish']).required(),
})

storiesOf('Dropdowns', module)
  .add('Select', () =>
    <Form
      schema={schema}
      initialValues={{
        kingdoms: kingdoms[0].value,
        phylum: phylum[0].value,
        class: 'arachnid',
        animals: animals[0].value,
      }}
    >
      <Divider title='Standard variant'>
        <Field
          name='kingdoms'
          label='Species kingdom'
          helperText='Should be one of "plants" or "fungus"'
          component={Select}
          options={kingdoms}
        />
      </Divider>
      <Divider title='Outlined variant'>
        <Field
          name='phylum'
          label='Species phylum'
          helperText='Should be one of "mollusca" or "cnidaria"'
          variant='outlined'
          component={Select}
          options={phylum}
        />
      </Divider>
      <Divider title='Filled variant'>
        <Field
          name='class'
          label='Species class'
          helperText='Should be one of "arachnid" or "hagfish"'
          variant='filled'
          component={Select}
          options={classes}
        />
      </Divider>
      <Divider title='Groups'>
        <Field
          name='animals'
          label='Species class'
          helperText='Should be one of "arachnid" or "hagfish"'
          variant='outlined'
          group={true}
          component={Select}
          options={animals}
        />
      </Divider>
    </Form>
  )
