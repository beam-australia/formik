import React from "react";
import FormControl from "../../components/FormControl";
import { Editor as Draft } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./styles.css";

class Editor extends React.Component {
  onEditorChange = state => {
    this.props.form.setFieldTouched(this.props.field.name, true);
    this.props.form.setFieldValue(this.props.field.name, state);
  };

  render() {
    const {
      label,
      placeholder,
      field: { name, value },
      editorProps,
      toolbarProps
    } = this.props;
    return (
      <FormControl name={name} label={label}>
        <Draft
          {...editorProps}
          editorState={value}
          onEditorStateChange={this.onEditorChange}
          wrapperClassName="draft-js"
          editorClassName="draft-js-editor"
          placeholder={placeholder}
          toolbar={toolbarProps}
        />
      </FormControl>
    );
  }
}

Editor.defaultProps = {
  editorProps: {},
  toolbarProps: {
    options: ["inline", "blockType", "list", "textAlign", "link"],
    inline: {
      inDropdown: false,
      options: ["bold", "italic", "underline"]
    },
    blockType: { options: ["Normal", "H1", "H2"] },
    textAlign: {
      options: ["left", "center"]
    }
  }
};

export default Editor;
