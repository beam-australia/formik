import React from 'react'
import { Formik } from 'formik'
import App from 'stories/components/App'
import { onFormSubmit } from '@beam-australia/formik'
import { action } from '@storybook/addon-actions'
import Form from './Form'
import Schema from './Schema'

const formApiAction = (values, actions) => new Promise((resolve, reject) => {
  setTimeout(() => {
    action('submit')(values)
    resolve(values)
    // reject(new Error({
    //   errors: {
    //     first_name: [
    //       'hello'
    //     ]
    //   }
    // })
  }, 2000)
})

export default () => (
  <App>
    <Formik
      render={props => <Form {...props} />}
      onSubmit={onFormSubmit(formApiAction)}
      validationSchema={Schema}
      initialValues={{
        first_name: '',
        last_name: '',
        password: '',
        age: '',
        mammals: '',
        fungi: '',
        reptiles: '',
        ungulates: '',
        insects: ['weevils', 'wasps'],
        invertebrates: ['cnidarians'],
        research_document: null,
        salary_amount: '',
        salary_type: 'hourly',
        expert: true,
        phd: false,
        birds: 'penguins'
      }}
    />
  </App>
)
