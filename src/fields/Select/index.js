import React from "react";
import { TextField as BaseSelect } from "formik-material-ui";
import { Options, OptionGroups } from "components/Options";

const Select = ({ options, group, ...props }) => (
  <BaseSelect {...props}>
    {group === true && <OptionGroups groups={options} />}
    {group === false && <Options options={options} />}
  </BaseSelect>
);

Select.defaultProps = {
  fullWidth: true,
  margin: "normal",
  select: true,
  group: false,
  type: "text",
  SelectProps: {
    native: true,
    displayEmpty: false
  }
};

export default Select;
