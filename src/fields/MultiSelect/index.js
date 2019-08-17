import React from "react";
import disableSelected from "lib/disableSelected";
import { getIn } from "formik";
import FormControl from "components/FormControl";
import SelectionList from "./SelectionList";
import Selector from "./Selector";
import ListItemText from "./ListItemText";
import AddNewButton from "./AddNewButton";

class MultiSelect extends React.Component {
  state = {
    selectorVisible: false
  };

  addItem = selection => {
    const selections = getIn(this.props.form.values, this.props.name);
    if (false === selections.includes(selection)) {
      this.props.push(selection);
    }
  };

  removeItem = index => {
    this.props.remove(index);
  };

  toggleSelector = () => {
    this.setState({ selectorVisible: !this.state.selectorVisible });
  };

  render() {
    const {
      variant,
      ListItemText,
      defaultOption,
      maxItems,
      label,
      addText,
      addNewText,
      helperText,
      name,
      form
    } = this.props;
    const { selectorVisible } = this.state;
    const values = getIn(form.values, name);
    const options = disableSelected(this.props.options, values);
    return (
      <FormControl name={name} helperText={helperText} label={label}>
        <SelectionList
          disabled={form.isSubmitting}
          values={values}
          options={options}
          removeItem={this.removeItem}
          ListItemText={ListItemText}
        />
        <AddNewButton
          onClick={() => this.toggleSelector()}
          visible={selectorVisible === false}
          buttonText={addNewText}
        />
        <Selector
          onHide={() => this.toggleSelector()}
          visible={selectorVisible}
          disabled={values.length >= maxItems || form.isSubmitting}
          variant={variant}
          addItem={this.addItem}
          options={options}
          defaultOption={defaultOption}
          name={name}
          buttonText={addText}
        />
      </FormControl>
    );
  }
}

MultiSelect.defaultProps = {
  options: [],
  defaultOption: { label: "Please select...", value: "0" },
  maxItems: 10,
  addText: "Add",
  addNewText: "Add new item",
  ListItemText: ListItemText
};

export default MultiSelect;
