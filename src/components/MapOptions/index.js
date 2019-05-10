import React from 'react'
import mapOptions from 'lib/mapOptions'

const MapOptions = ({ options, emptyOption, component, ...props }) => {
  return mapOptions(options, { emptyOption }).map(option =>
    React.createElement('option', {
      key: option.key,
      value: option.value,
      disabled: Boolean(option.disabled)
    }, option.label)
  )
}

MapOptions.defaultProps = {
  component: 'option',
  options: []
}

export default MapOptions
