import React from "react";
import { storiesOf } from "@storybook/react";
import * as Yup from "yup";
import Divider from "testing/Divider";
import Form from "testing/Form";
import { Field } from "formik";
import * as Actions from "testing/Form/actions";
import FormStatus from "./";
import TextField from "fields/TextField";

const schema = Yup.object().shape({
  commonName: Yup.string()
    .min(5)
    .required(),
  scientificName: Yup.string()
    .min(5)
    .required()
});

storiesOf("Form Status", module)
  .add("Exception", () => (
    <Form
      schema={schema}
      formAction={Actions.exception}
      initialValues={{
        commonName: "",
        scientificName: ""
      }}
    >
      <Divider title="Default settings">
        <Field
          name="commonName"
          label="Common name"
          helperText="Common english name for the species"
          component={TextField}
        />
        <Field
          name="scientificName"
          label="Scientific name"
          helperText="Latin scientific name for the species"
          component={TextField}
        />
        <FormStatus />
      </Divider>
    </Form>
  ))
  .add("Success", () => (
    <Form
      schema={schema}
      formAction={Actions.success}
      initialValues={{
        commonName: "",
        scientificName: ""
      }}
    >
      <Divider title="Default settings">
        <Field
          name="commonName"
          label="Common name"
          helperText="Common english name for the species"
          component={TextField}
        />
        <Field
          name="scientificName"
          label="Scientific name"
          helperText="Latin scientific name for the species"
          component={TextField}
        />
        <FormStatus
          successMessage="We have created your entry!"
        />
      </Divider>
    </Form>
  ));
