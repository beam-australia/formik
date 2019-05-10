import React from 'react'
import { storiesOf } from '@storybook/react'
import * as Yup from 'yup'
import Divider from 'testing/Divider'
import { Field } from 'formik'
import Form from 'testing/Form'
import Upload from './'

const schema = Yup.object().shape({
  researchPaper: Yup.object().required()
})

storiesOf('Fields', module)
  .add('Upload', () =>
    <Form
      schema={schema}
      initialValues={{
        researchPaper: {}
      }}
    >
      <Divider title='Document preset, filesize limit'>
        <Field
          name='researchPaper'
          label='Upload a research paper'
          allowedFileTypes='documents'
          maxFileSize={25000000}
          component={Upload}
        />
      </Divider>
      <Divider title='Image preset'>
        <Field
          name='researchPaper'
          label='Upload a research paper'
          allowedFileTypes='images'
          component={Upload}
        />
      </Divider>
      <Divider title='Helper text, filesize limit, button label'>
        <Field
          name='researchPaper'
          label='Upload a research paper'
          helperText='This component uses the TUS protocol'
          buttonLabel='Send files'
          maxFileSize={25000000}
          component={Upload}
        />
      </Divider>
    </Form>
  )