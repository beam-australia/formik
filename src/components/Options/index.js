import React from "react";
import groupBy from "lodash/groupBy";
import capitalize from "capitalize";

export const Options = ({ options }) => (
  <React.Fragment>
    {options.map((option, index) => (
      <option
        key={option.value || option.label}
        value={option.value}
        disabled={Boolean(option.disabled)}
      >
        {option.label}
      </option>
    ))}
  </React.Fragment>
);

export const OptionGroups = ({ groups }) => {
  const grouped = groupBy(groups, "group");
  return (
    <React.Fragment>
      {Object.keys(grouped).map((key, index) => {
        if (key.length > 0) {
          return (
            <optgroup key={key} label={capitalize(key)}>
              <Options options={grouped[key]} />
            </optgroup>
          );
        } else {
          return <Options key={index} options={grouped[key]} />;
        }
      })}
    </React.Fragment>
  );
};
