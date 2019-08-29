import React from "react";
import TextField from "@material-ui/core/TextField";
import { Options, OptionGroups } from "components/Options";

const Dropdown = ({ options, group = false, ...props }) => (
  <TextField select fullWidth SelectProps={{ native: true }} {...props}>
    {group === true && <OptionGroups groups={options} />}
    {group === false && <Options options={options} />}
  </TextField>
);

export default Dropdown;
