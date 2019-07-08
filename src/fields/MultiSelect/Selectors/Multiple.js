import React from 'react'
import Traverse from 'obj-traverse'
import omit from 'lodash/omit'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Select from 'components/Select'
import { connect } from 'formik'
import styles from './styles'

class Multiple extends React.Component {
  state = {
    primary: '',
    secondary: ''
  }

  componentDidMount() {
    this.setInitialState()
  }

  setInitialState = () => {
    this.setValue('primary', this.props.options[0])
    this.setValue('secondary', this.props.options[0].children[0])
  }

  onChangePrimary = ({ target: { value } }) => {
    const node = this.findTreeNode(value)
    this.setValue('primary', node)
    this.setValue('secondary', node.children[0])
    this.props.onChange()
  }

  onChangeSecondary = ({ target: { value } }) => {
    this.setValue('secondary', this.findTreeNode(value))
    this.props.onChange()
  }

  onAddItem = () => {
    const selection = this.state.primary
    if (this.state.secondary.value !== -1) {
      selection.child = this.state.secondary
    }
    this.props.addItem(selection)
  }

  findTreeNode = (value) => {
    return Traverse.findFirst({ children: this.props.options }, 'children', { value })
  }

  setValue = (field, selection) => {
    this.setState({ [field]: omit(selection, ['children']) })
  }

  getSecondaryOptions = () => {
    const primary = this.findTreeNode(this.state.primary.value)
    return primary ? primary.children : this.props.options[0].children
  }

  render() {
    const { options, buttonText, variant, classes, disabled, visible } = this.props
    const { primary, secondary } = this.state
    if (visible === false) {
      return null
    }
    return (
      <Grid container spacing={2}>
        <Grid item md={5}>
          <Select
            disabled={disabled}
            variant={variant}
            options={options}
            onChange={this.onChangePrimary}
            value={primary ? primary.value : ''}
          />
        </Grid>
        <Grid item md={5}>
          <Select
            disabled={disabled}
            variant={variant}
            options={this.getSecondaryOptions()}
            onChange={this.onChangeSecondary}
            value={secondary ? secondary.value : ''}
          />
        </Grid>
        <Grid item md={2}>
          <Button
            fullWidth
            disabled={disabled}
            size={variant === 'outlined' ? 'large' : 'medium'}
            className={classNames({
              [classes.outlinedButton]: variant === 'outlined' ? true : false
            })}
            variant='contained'
            color='primary'
            onClick={this.onAddItem}
          >{buttonText}</Button>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(
  connect(Multiple)
)
