import React from 'react'
import TextField from '@material-ui/core/TextField'
import MapOptions from 'components/MapOptions'

export default ({ options, ...props }) => (
  <TextField
    select
    fullWidth
    SelectProps={{ native: true }}
    {...props}
  >
    <MapOptions options={options} />
  </TextField>
)
