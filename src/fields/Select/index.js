import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import { Select as MuiSelect } from 'formik-material-ui'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '../../components/FormControl'
import InputVariant from './InputVariant'

class Select extends React.Component {
  state = {
    width: 0
  }

  componentDidMount() {
    this.setState({
      width: ReactDOM.findDOMNode(this.labelRef).offsetWidth
    })
  }

  render() {
    const { items, valueKey, nameKey, label, helperText, ...rest } = this.props
    const name = this.props.field.name
    return (
      <FormControl helperText={helperText} name={name}>
        <InputLabel
          variant={rest.variant}
          htmlFor={name}
          ref={ref => { this.labelRef = ref }}
        >{label}</InputLabel>
        <MuiSelect
          native
          {...rest}
          input={
            <InputVariant
              name={name}
              width={this.state.width}
              variant={rest.variant}
            />
          }
        >
          {items.map(item => (
            <option
              key={item[valueKey]}
              value={item[valueKey]}
            >{item[nameKey]}</option>
          ))}
        </MuiSelect>
      </FormControl>
    )
  }
}

Select.propTypes = {
  valueKey: PropTypes.string,
  nameKey: PropTypes.string,
  helperText: PropTypes.string,
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  id: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string
  })
}

Select.defaultProps = {
  variant: 'standard',
  valueKey: 'slug',
  nameKey: 'name',
  items: [],
  id: ''
}

export default Select
