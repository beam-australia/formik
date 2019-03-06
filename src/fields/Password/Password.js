import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

export default class PasswordField extends React.Component {
  state = {
    visible: false
  }

  toggle = () => {
    this.setState(state => ({ visible: !state.visible }))
  }

  render() {
    const { visible } = this.state

    return (
      <TextField
        {...this.props}
        type={visible ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton
                aria-label='Toggle password visibility'
                onClick={this.toggle}
              >
                {visible ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
    )
  }
}
