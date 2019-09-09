import { getIn } from "formik";
import { EditorState, convertFromRaw, convertToRaw } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";

function createEmpty() {
  return EditorState.createEmpty();
}

function createWithContent(html = '') {
  return EditorState.createWithContent(convertFromHTML(html));
}

function saveToString(values, field) {
  const html = convertToHTML(values[field].getCurrentContent());
  return {
    ...values,
    [field]: html
  };
}

export default {
  createEmpty,
  createWithContent,
  saveToString
};
