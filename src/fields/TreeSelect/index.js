import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import FormControl from 'components/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import AntTreeSelect from 'antd/lib/tree-select'
import 'antd/lib/tree-select/style/css.js'
import mapTree from 'lib/mapTree'
import './index.css'

class TreeSelect extends React.Component {
  state = {
    options: []
  }

  componentDidMount() {
    this.setState({ options: mapTree(this.props.options) })
  }

  onChange = (value) => {
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
    const { options } = this.state
    const { helperText, label, field, ...rest } = this.props
    return (
      <FormControl helperText={helperText} name={field.name} label={label}>
        <AntTreeSelect
          {...field}
          className={this.getClassName()}
          treeData={options}
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

}

TreeSelect.defaultProps = {
  placeholder: 'Please select'
}

export default TreeSelect
