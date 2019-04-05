import React from 'react'
import { Field, Form } from 'formik'
import Grid from '@material-ui/core/Grid'
import FormGroup from '@material-ui/core/FormGroup'
import FormLabel from '@material-ui/core/FormLabel'
import DisplayFormState from 'stories/components/DisplayFormState'
import {
  mammals,
  insects,
  fungi,
  birds,
  invertebrates
} from 'stories/kingdoms'
import {
  TextField,
  Password,
  Select,
  TreeSelect,
  Switch,
  Checkbox,
  CheckboxGroup,
  Upload,
  RadioGroup,
  SubmitButton,
  FormControl,
  FormResponse
} from '@beam-australia/formik'

export default props => (
  <Form>
    <Grid container spacing={24}>
      <Grid item xs={6}>
        <Field
          name='first_name'
          label='Researcher first name'
          variant='outlined'
          component={TextField}
        />
      </Grid>
      <Grid item xs={6}>
        <Field
          name='last_name'
          label='Researcher last name'
          component={TextField}
        />
      </Grid>
      <Grid item xs={6}>
        <Field
          name='password'
          label='Password'
          variant='outlined'
          component={Password}
        />
      </Grid>
      <Grid item xs={6}>
        <Field
          name='password'
          label='Password'
          component={Password}
        />
      </Grid>
      <Grid item xs={6}>
        <Field
          name='mammals'
          label='Mammals'
          variant='outlined'
          component={Select}
          items={mammals}
          helperText='Select a species of mammal'
        />
      </Grid>
      <Grid item xs={6}>
        <Field
          name='fungi'
          label='Fungi'
          component={Select}
          items={fungi}
          helperText='Select a species of fungi'
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          name='invertebrates'
          label='Invertebrates'
          component={TreeSelect}
          items={invertebrates}
          helperText='Select types of invertebrates'
        />
      </Grid>
      <Grid item xs={6}>
        <CheckboxGroup
          name='insects'
          label='Insects'
          items={insects}
        />
      </Grid>
      <Grid item xs={6}>
        <RadioGroup
          name='birds'
          label='Birds'
          items={birds}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          name='research_document'
          label='Research document'
          endpoint='https://uploads.beamaustralia.local'
          component={Upload}
        />
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <FormControl name='expert' component='fieldset' >
          <FormLabel component='legend'>Are you an expert?</FormLabel>
          <FormGroup>
            <Field
              name='expert'
              label='Yes im an expert?'
              component={Checkbox}
            />
          </FormGroup>
        </FormControl>
      </Grid>
      <Grid item xs={4}>
        <FormControl name='phd' component='fieldset' >
          <FormLabel component='legend'>Whats your education?</FormLabel>
          <FormGroup>
            <Field
              name='phd'
              label='I have a PhD?'
              component={Switch}
            />
          </FormGroup>
        </FormControl>
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={4}>
        <SubmitButton fullWidth>Create Researcher</SubmitButton>
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <FormResponse />
      </Grid>
    </Grid>
    <Grid container spacing={24}>
      <DisplayFormState {...props} />
    </Grid>
  </Form>
)
