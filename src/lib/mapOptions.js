const defaultConfig = {
  valueKey: 'value',
  labelKey: 'label',
  emptyOption: undefined
}

export default (options, config = {}) => {
  const settings = {
    ...defaultConfig,
    ...config
  }
  const mapped = options.map(option => ({
    key: option[settings.valueKey],
    value: option[settings.valueKey],
    label: option[settings.labelKey],
    disabled: Boolean(option.disabled)
  }))
  if (settings.emptyOption) {
    mapped.unshift({ key: 'empty', label: settings.emptyOption })
  }
  return mapped
}
