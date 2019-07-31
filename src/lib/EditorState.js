import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';

function createEmpty() {
  return EditorState.createEmpty();
}

function createWithContent(raw) {
  const content = JSON.parse(raw);
  return EditorState.createWithContent(convertFromRaw(content));
}

function saveToString(state) {
  const raw = convertToRaw(state.getCurrentContent())
  return JSON.stringify(raw);
}

export default {
  createEmpty,
  createWithContent,
  saveToString
}
