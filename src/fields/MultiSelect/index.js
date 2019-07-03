import React from "react";
import find from "lodash/find";
import { getIn } from "formik";
import FormControl from "components/FormControl";
import SelectionList from "./SelectionList";
import Selectors from "./Selectors";
import ListItemText from "./ListItemText";
import AddNewButton from "./AddNewButton";

class MultiSelect extends React.Component {
  state = {
    alreadySelected: false,
    selectorVisible: false
  };

  addItem = selection => {
    const current = getIn(this.props.form.values, this.props.name);
    if (find(current, selection)) {
      this.setState({ alreadySelected: true });
    } else {
      this.props.push(selection);
    }
  };

  removeItem = index => {
    this.props.remove(index);
  };

  onChange = () => {
    this.setState({ alreadySelected: false });
  };

  toggleSelector = () => {
    this.setState({ selectorVisible: !this.state.selectorVisible });
  };

  render() {
    const {
      variant,
      ListItemText,
      maxItems,
      options,
      label,
      addText,
      addNewText,
      name,
      selector,
      form
    } = this.props;
    const { selectorVisible } = this.state;
    const values = getIn(form.values, name);
    const Selector = Selectors[selector];
    const helperText = selectorVisible ? this.props.helperText : ''
    return (
      <FormControl name={name} helperText={helperText} label={label}>
        <SelectionList
          disabled={form.isSubmitting}
          items={values}
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
          alreadySelected={this.state.alreadySelected}
          onChange={this.onChange}
          disabled={values.length >= maxItems || form.isSubmitting}
          variant={variant}
          addItem={this.addItem}
          options={options}
          name={name}
          buttonText={addText}
        />
      </FormControl>
    );
  }
}

MultiSelect.defaultProps = {
  options: [],
  maxItems: 10,
  addText: "Add",
  addNewText: "Add new item",
  ListItemText: ListItemText,
  selector: "Multiple"
};

export default MultiSelect;
