export default (selection) => {
  if (selection.child) {
    return `${selection.child.label}, ${selection.label}`
  }
  return `All ${selection.label}`
}
