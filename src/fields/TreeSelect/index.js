import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import FormControl from '../../components/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import AntTreeSelect from 'antd/lib/tree-select'
import 'antd/lib/tree-select/style/css.js'
import mapTree from '../../lib/mapTree'
import './index.css'

class TreeSelect extends React.Component {
  state = {
    items: []
  }

  componentDidMount() {
    this.setState({ items: mapTree(this.props.items) })
  }

  onChange = (value, label, extra) => {
    console.log('value', value)
    console.log('label', label)
    console.log('extra', extra)
    extra.triggerNode.expand()
    this.props.form.setFieldValue(this.props.field.name, value)
  }

  onBlur = () => {
    this.props.form.setFieldTouched(this.props.field.name)
  }

  getClassName = () => {
    const { form: { errors, touched }, field: { name }, className } = this.props
    return classNames('beam tree-select-field', className, {
      error: Boolean(errors[name] && touched[name])
    })
  }

  render() {
    const { items } = this.state
    const { helperText, label, field, ...rest } = this.props
    return (
      <FormControl helperText={helperText} name={field.name}>
        <FormLabel component='legend'>{label}</FormLabel>
        <AntTreeSelect
          {...field}
          className={this.getClassName()}
          treeData={items}
          onChange={this.onChange}
          onBlur={this.onBlur}
          {...rest}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          showCheckedStrategy={AntTreeSelect.SHOW_ALL}
          treeCheckable
          showSearch
          allowClear
          multiple
        />
      </FormControl>
    )
  }
}

TreeSelect.propTypes = {
  helperText: PropTypes.string,
  items: PropTypes.array.isRequired,
  label: PropTypes.string,
  className: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string
  }),
  form: PropTypes.shape({
    setFieldValue: PropTypes.func,
    setFieldTouched: PropTypes.func
  })
}

TreeSelect.defaultProps = {
  placeholder: 'Please select',
  items: []
}

export default TreeSelect
