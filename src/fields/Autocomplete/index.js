import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MuiDownshift from 'mui-downshift'
import { fieldToSelect } from 'formik-material-ui'
import getInputProps from './getInputProps'

/**
 * @note There is an issue with react-virtualised and this npm package "mui-downshift"
 * @note Awaiting implementation of a non eact-virtualised solution from the owner.
 */

class Autocomplete extends Component {
  state = {
    filteredItems: []
  }

  constructor(props) {
    super(props)
    this.state = {
      filteredItems: this.getMappedItems()
    }
  }

  getMappedItems = () => {
    return this.props.items.map(item => ({
      label: item[this.props.nameKey],
      value: item[this.props.valueKey]
    }))
  }

  onBlur = () => {
    this.props.form.setFieldTouched(this.props.field.name)
  }

  onChange = item => {
    const value = item ? item.value : ''
    this.props.form.setFieldValue(this.props.field.name, value)
    this.onBlur()
  }

  onStateChange = changes => {
    if (typeof changes.inputValue === 'string') {
      const filteredItems = this.getMappedItems().filter(item => {
        const input = changes.inputValue.toLowerCase()
        return item.label.toLowerCase().includes(input)
      })
      this.setState({ filteredItems })
    }
  }

  render() {
    const { filteredItems } = this.state
    const props = fieldToSelect(this.props)
    return (
      <MuiDownshift
        {...props}
        items={filteredItems}
        onChange={this.onChange}
        onBlur={this.onBlur}
        onStateChange={this.onStateChange}
        getInputProps={() => getInputProps(props, this.props.form)}
      />
    )
  }
}

Autocomplete.propTypes = {
  items: PropTypes.array,
  nameKey: PropTypes.string,
  valueKey: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string.isRequired
  }),
  form: PropTypes.shape({
    setFieldValue: PropTypes.func.isRequired,
    setFieldTouched: PropTypes.func.isRequired
  })
}

Autocomplete.defaultProps = {
  items: [],
  valueKey: 'slug',
  nameKey: 'name'
}

export default Autocomplete
