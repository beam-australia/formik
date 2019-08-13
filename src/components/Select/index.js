import React from 'react'
import TextField from '@material-ui/core/TextField'
import { Options, OptionGroups } from "components/Options";

export default ({ options, group = false, ...props }) => (
  <TextField
    select
    fullWidth
    SelectProps={{ native: true }}
    {...props}
  >
    {group === true && <OptionGroups groups={options} />}
    {group === false && <Options options={options} />}
  </TextField>
)
