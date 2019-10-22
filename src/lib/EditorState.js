import { EditorState } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";

function stateToHTML(editorState) {
  convertToHTML({
    blockToHTML: (block) => {
      if (block.type === 'PARAGRAPH') {
        return <p />;
      }
    },
  })(editorState.getCurrentContent());  
}

function createEmpty() {
  return EditorState.createEmpty();
}

function createWithContent(html = "") {
  return EditorState.createWithContent(convertFromHTML(html));
}

function saveToString(values, field) {
  if (values[field] && typeof values[field].getCurrentContent === "function") {
    const html = stateToHTML(values[field]);
    return {
      ...values,
      [field]: html
    };
  }
  return values;
}

export default {
  createEmpty,
  createWithContent,
  saveToString
};
