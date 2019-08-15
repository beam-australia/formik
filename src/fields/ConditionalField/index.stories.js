import React from "react";
import { storiesOf } from "@storybook/react";
import * as Yup from "yup";
import { Field } from "formik";
import Form from "testing/Form";
import Divider from "testing/Divider";
import { invertebrates, animals } from "testing/mocks";
import Select from "fields/Select";
import ConditionalField from "./";

const schema = Yup.object().shape({
  insect: Yup.object().shape({
    class: Yup.string().required(),
    species: Yup.string().required()
  }),
});

storiesOf("Dropdowns", module).add("Conditional Select", () => (
  <Form
    schema={schema}
    initialValues={{
      insect: {
        class: "porifera",
        species: ""
      },
      animals: {
        primary: '',
        secondary: '',
      }
    }}
  >
    <Divider title="Parent label, child helper text">
      <ConditionalField
        label="Select an insect"
        primary="insect.class"
        secondary="insect.species"
        options={invertebrates}
      >
        {(options, childOptions) => [
          <Field
            name="insect.class"
            variant="outlined"
            helperText="Select a class of insect"
            component={Select}
            options={options}
          />,
          <Field
            name="insect.species"
            variant="outlined"
            helperText="Select the species of insect"
            component={Select}
            options={childOptions}
          />
        ]}
      </ConditionalField>
    </Divider>
    <Divider title="With Groups">
      <ConditionalField
        label="Select an animal"
        primary="animals.class"
        secondary="animals.species"
        options={animals}
      >
        {(options, childOptions) => [
          <Field
            name="animals.class"
            variant="outlined"
            helperText="Select a class of animal"
            component={Select}
            options={options}
            group
          />,
          <Field
            name="animals.species"
            variant="outlined"
            helperText="Select the species of animal"
            component={Select}
            options={childOptions}
          />
        ]}
      </ConditionalField>
    </Divider>
  </Form>
));
