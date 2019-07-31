import { EditorState, convertFromRaw, convertToRaw } from "draft-js";

function createEmpty() {
  return EditorState.createEmpty();
}

function createWithContent(raw) {
  const content = JSON.parse(raw);
  return EditorState.createWithContent(convertFromRaw(content));
}

function saveToString(values, field) {
  const raw = convertToRaw(values[field].getCurrentContent());
  return {
    ...values,
    [field]: JSON.stringify(raw)
  };
}

export default {
  createEmpty,
  createWithContent,
  saveToString
};
