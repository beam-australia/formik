import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import Divider from 'testing/Divider'
import { Field } from 'formik'
import Form from 'testing/Form'
import { kingdoms, phylum, classes } from 'testing/mocks'
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
        kingdoms: '',
        phylum: '',
        class: 'arachnid'
      }}
    >
      <Divider title='Standard variant'>
        <Field
          name='kingdoms'
          label='Species kingdom'
          helperText='Should be one of "plants" or "fungus"'
          component={Select}
          options={[{ value: '' }, ...kingdoms]}
        />
      </Divider>
      <Divider title='Outlined variant'>
        <Field
          name='phylum'
          label='Species phylum'
          helperText='Should be one of "mollusca" or "cnidaria"'
          variant='outlined'
          component={Select}
          options={[{ value: '' }, ...phylum]}
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
    </Form>
  )
