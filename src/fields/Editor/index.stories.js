import React from "react";
import { storiesOf } from "@storybook/react";
import * as Yup from "yup";
import Divider from "testing/Divider";
import { Field } from "formik";
import Form from "testing/Form";
import EditorState from "lib/EditorState";
import Editor from "./";

const schema = Yup.object().shape({
  researchPaper: Yup.object().required(),
  researchPaperSummary: Yup.object().required(),
});

const rawJsonState = '{"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]}';

storiesOf("Fields", module).add("Editor", () => (
  <React.Fragment>
    <Form
      schema={schema}
      initialValues={{
        researchPaper: EditorState.createEmpty(),
        researchPaperSummary: EditorState.createWithContent(rawJsonState)
      }}
    >
      <Divider title="With empty initial state">
        <Field
          name="researchPaper"
          placeholder="Hello World."
          label="Type your reasearch paper"
          component={Editor}
        />
      </Divider>
      <Divider title="With initial state">
        <Field
          name="researchPaperSummary"
          label="Type your reasearch paper summary"
          component={Editor}
        />
      </Divider>
    </Form>
  </React.Fragment>
));
