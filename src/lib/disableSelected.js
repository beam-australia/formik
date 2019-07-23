export default (options, selections) => {
  return options.map(option => {
    if (selections.includes(option.value)) {
      option.disabled = true;
    }
    return option;
  });
}
