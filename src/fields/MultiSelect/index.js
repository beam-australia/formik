import React from 'react'
import find from 'lodash/find'
import { getIn } from 'formik'
import FormControl from 'components/FormControl'
import SelectionList from './SelectionList'
import Selector from './Selector'
import ListItemText from './ListItemText'

class MultiSelect extends React.Component {
  state = {
    alreadySelected: false
  }

  addItem = (selection) => {
    const current = getIn(this.props.form.values, this.props.name)
    if (find(current, selection)) {
      this.setState({ alreadySelected: true })
    } else {
      this.props.push(selection)
    }
  }

  removeItem = (index) => {
    this.props.remove(index)
  }

  onChange = () => {
    this.setState({ alreadySelected: false })
  }

  render() {
    const {
      variant,
      ListItemText,
      maxItems,
      options,
      label,
      helperText,
      buttonText,
      name,
      form
    } = this.props
    const values = getIn(form.values, name)
    return (
      <FormControl name={name} helperText={helperText} label={label}>
        <SelectionList
          disabled={form.isSubmitting}
          items={values}
          removeItem={this.removeItem}
          ListItemText={ListItemText}
        />
        <Selector
          alreadySelected={this.state.alreadySelected}
          onChange={this.onChange}
          disabled={values.length >= maxItems || form.isSubmitting}
          variant={variant}
          addItem={this.addItem}
          options={options}
          name={name}
          buttonText={buttonText}
        />
      </FormControl>
    )
  }
}

MultiSelect.defaultProps = {
  maxItems: 10,
  buttonText: 'Add',
  ListItemText: ListItemText
}

export default MultiSelect
